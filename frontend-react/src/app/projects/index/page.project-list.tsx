'use client';

import { useState } from 'react';
import './page.project-list.scss';
import ProjectFilter from './page.project-filter';
import { Project } from '@/models';
import ProjectCard from './page.project-card';

function projectMatchFilter(project: Project, filter: string): { project: Project, relevance: number } {
    filter = filter.toLowerCase();
    let terms = filter.split(' ');
    let searchName = project.name.toLowerCase();
    let searchDesc = project.description.toLowerCase();
    let searchTechs = project.tags.map(tag => tag.toLowerCase().trim());
    let matchCount = 0;
    for (let term of terms) {
        let isMatch = searchName.indexOf(term) !== -1 || searchDesc.indexOf(term) !== -1 || searchTechs.some(tech => tech.indexOf(term) !== -1);
        if (isMatch) matchCount++;
    }
    matchCount /= terms.length;
    matchCount *= matchCount;
    return { project, relevance: matchCount };
}

function filterProjects(filter: string, projects: Project[]): Project[] {
    return projects
        .map(proj => projectMatchFilter(proj, filter))
        .sort((a, b) => {
            if (a.relevance > b.relevance) return 1;
            else if (a.relevance < b.relevance) return -1;
            else if (a.project.slug < b.project.slug) return 1;
            else if (a.project.slug > b.project.slug) return -1;
            else return 0;
        })
        .filter(kvp => kvp.relevance >= .3)
        .map(kvp => kvp.project);
}

function ProjectList({ projects }: { projects: Project[] }) {
    const [filter, setFilter] = useState('');

    const filteredProjects = filterProjects(filter, projects);

    return (
        <div>
            <ProjectFilter onFilterChanged={f => setFilter(f)}></ProjectFilter>

            <div className="row">
                {!filteredProjects.length ? (
                    <div className="col-12">
                        No projects matched your search.
                    </div>
                ) : filteredProjects.map(project => (
                    <ProjectCard project={project} key={project.slug}></ProjectCard>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
