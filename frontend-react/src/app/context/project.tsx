'use client';

import { Project } from '@/models';
import { createContext, ReactNode } from 'react';

export const ProjectContext = createContext<{ project: Project | null }>({ project: null });

function ProjectProvider({ project, children }: { project: Project | null, children: ReactNode }) {
    return (
        <ProjectContext.Provider value={{ project }}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProvider;
