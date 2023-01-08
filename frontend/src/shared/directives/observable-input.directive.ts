import { Input } from '@angular/core';
import { Observable, Subscription, ReplaySubject } from 'rxjs';

const DEBUG_BINDING = false;

export function ObservableInput(bindingPropertyName?: string, skipNullAndUndefined: boolean = false) {
    return function(target: any, propertyKey: string | symbol) {
        let pk: string;
        if (typeof propertyKey === 'symbol') {
            pk = propertyKey.toString().substring(7);
            pk = pk.substring(0, pk.length - 1);
        }
        else pk = propertyKey;

        let targetName = target && target.constructor && target.constructor.name;

        let bpn = bindingPropertyName || pk;
        if (!bpn) throw new Error(`No binding property name! Target: ${targetName}`);

        if (DEBUG_BINDING) console.log(`Binding ${bpn} to ${pk}`);
        Input(bpn)(target, pk);

        let obpn = bpn + '$';
        let bpnObservable = pk + '$';
        if (DEBUG_BINDING) console.log(`Binding ${obpn} to ${bpnObservable}`);
        Input(obpn)(target, bpnObservable);

        let propInternalsSym = Symbol();
        type PropIntT = {
            currentObservable: Observable<any> | null,
            currentSubscription: Subscription | null,
            subject: ReplaySubject<any>,
            currentValue: any
        };
        function getPropInternals(self: any): PropIntT {
            if (!self[propInternalsSym]) {
                let i = self[propInternalsSym] = {
                    currentObservable: null,
                    currentSubscription: null,
                    subject: new ReplaySubject(1),
                    currentValue: undefined
                };
            }
            return self[propInternalsSym];
        }

        Object.defineProperties(target, {
            [pk]: {
                get: function(this: any) {
                    let { currentValue } = getPropInternals(this);
                    return currentValue;
                },
                set: function(this: any, val: any) {
                    if (skipNullAndUndefined && (val === null || typeof val === 'undefined')) return;
                    if (val instanceof Observable) {
                        throw new Error(`Illegal binding to Observable. Property: ${targetName}.${pk}. Should use ${targetName}.${obpn}`);
                    }
                    let i = getPropInternals(this);
                    if (val === i.currentValue) return;
                    i.currentValue = val;
                    i.subject.next(i.currentValue);
                }
            },
            [bpnObservable]: {
                get: function(this: any) {
                    let { subject } = getPropInternals(this);
                    return subject.asObservable();
                },
                set: function(this: any, val: Observable<any> | null) {
                    if (val && !(val instanceof Observable)) {
                        throw new Error(`Illegal binding to non-Observable. Property: ${targetName}.${obpn}. Should use ${targetName}.${pk}`);
                    }
                    if (skipNullAndUndefined && !val) return;
                    let i = getPropInternals(this);
                    if (val == i.currentObservable) return;
                    i.currentObservable = val;
                    if (i.currentSubscription) {
                        i.currentSubscription.unsubscribe();
                        i.currentSubscription = null;
                    }
                    if (i.currentObservable) {
                        i.currentSubscription = i.currentObservable.subscribe(val => this[pk!] = val);
                    }
                }
            }
        });
    }
}
