'use client';

import { useState } from 'react';
import PracticeFilter from './page.practice-filter';
import PracticeCard from './page.practice-card';
import './page.practice-list.scss';
import { HoudiniDailyPractice } from '@/models';

function practiceMatchFilter(practice: HoudiniDailyPractice, filter: string): { practice: HoudiniDailyPractice, relevance: number } {
    filter = filter.toLowerCase();
    let terms = filter.split(' ');
    let searchName = practice.name.toLowerCase();
    let searchDesc = practice.description.toLowerCase();
    let searchTechs = practice.tags.map(tag => tag.toLowerCase().trim());
    let matchCount = 0;
    for (let term of terms) {
        let isMatch = searchName.indexOf(term) !== -1 || searchDesc.indexOf(term) !== -1 || searchTechs.some(tech => tech.indexOf(term) !== -1);
        if (isMatch) matchCount++;
    }
    matchCount /= terms.length;
    matchCount *= matchCount;
    return { practice: practice, relevance: matchCount };
}

function filterPractice(filter: string, practices: HoudiniDailyPractice[]): HoudiniDailyPractice[] {
    return practices
        .map(proj => practiceMatchFilter(proj, filter))
        .sort((a, b) => {
            if (a.relevance > b.relevance) return 1;
            else if (a.relevance < b.relevance) return -1;
            else if (a.practice.id < b.practice.id) return 1;
            else if (a.practice.id > b.practice.id) return -1;
            else return 0;
        })
        .filter(kvp => kvp.relevance >= .3)
        .map(kvp => kvp.practice);
}

function PracticeList({ items }: { items: HoudiniDailyPractice[] }) {
    const [filter, setFilter] = useState('');

    const filteredPractice = filterPractice(filter, items);

    return (
        <div>
            <PracticeFilter onFilterChanged={f => setFilter(f)}></PracticeFilter>

            <div className="row">
                {!filteredPractice.length ? (
                    <div className="col-12">
                        No practice projects matched your search.
                    </div>
                ) : filteredPractice.map(practice => (
                    <PracticeCard practice={practice} key={practice.id}></PracticeCard>
                ))}
            </div>
        </div>
    );
}

export default PracticeList;
