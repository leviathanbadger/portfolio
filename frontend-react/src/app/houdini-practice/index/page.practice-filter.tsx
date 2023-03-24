'use client';

import { useRef } from 'react';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { autofocusElement, useObservable, useReplaySubject } from '@/utils';
import './page.practice-filter.scss';

const FILTER_DEBOUNCE_MILLIS = 500;

function PracticeFilter({ onFilterChanged }: { onFilterChanged: (f: string) => void }) {
    const [filter, setFilter, filter$] = useReplaySubject('');
    const filterInput = useRef<HTMLInputElement | null>(null);
    autofocusElement(filterInput);
    function clearFilter() {
        setFilter('');
        filterInput.current?.focus();
    }

    const debouncedFilter$ = filter$.pipe(
        debounceTime(FILTER_DEBOUNCE_MILLIS),
        distinctUntilChanged(),
        tap(f => onFilterChanged(f))
    );
    useObservable(debouncedFilter$, '');

    const clearFilterBtn = !!filter && (<button className="btn btn-link btn-clear-filter" onClick={clearFilter}>&#10005;</button>);

    return (
        <div className="row">
            <div className="col-12 practice-filter-wrapper">
                <input
                    type="text"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="form-control practice-filter"
                    placeholder="Search"
                    ref={filterInput}
                />
                {clearFilterBtn}
            </div>
        </div>
    );
}

export default PracticeFilter;
