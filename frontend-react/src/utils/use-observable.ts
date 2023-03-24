import { useEffect, useState } from 'react';
import { isObservable, Observable } from 'rxjs';

export function useObservable<T>(state$: Observable<T> | (() => Observable<T>), def: T | (() => T)): [T] {
    const [state, setState] = useState(def);

    useEffect(() => {
        if (!isObservable(state$)) state$ = state$();
        const subscription = state$.subscribe(state => {
            setState(state);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return [state];
}
