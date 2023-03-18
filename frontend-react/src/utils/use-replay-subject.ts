import { Dispatch, useState } from 'react';
import { distinctUntilChanged, Observable, ReplaySubject } from 'rxjs';

export function useReplaySubject<S>(initialState: S | (() => S)): [S, Dispatch<S>, Observable<S>];
export function useReplaySubject<S = undefined>(): [S | undefined, Dispatch<S | undefined>, Observable<S | undefined>];
export function useReplaySubject<S = undefined>(initialState?: S | (() => S)): [S | undefined, Dispatch<S | undefined>, Observable<S | undefined>] {
    const [state, setState] = useState<S | undefined>(initialState);

    const [subject] = useState(new ReplaySubject<S | undefined>(1));
    subject.next(state);

    function setStateWrapper(state: S | undefined) {
        setState(state);
        subject.next(state);
    }

    const state$ = subject.asObservable().pipe(
        distinctUntilChanged()
    );

    return [state, setStateWrapper, state$];
}
