import { useEffect, useState } from 'react';
import { isObservable, Observable } from 'rxjs';

export function useObservable<T>(state$: Observable<T> | (() => Observable<T>), def: T | (() => T)): [T] {
    const [state, setState] = useState(def);

    useEffect(() => {
        if (!isObservable(state$)) state$ = state$();
        console.log('Subscribing!');
        const subscription = state$.subscribe(state => {
            setState(state);
        });

        return () => {
            console.log('Unsubscribing!');
            subscription.unsubscribe();
        };
    }, []);

    return [state];
}
