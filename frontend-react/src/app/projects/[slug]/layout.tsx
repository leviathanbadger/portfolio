import { Project } from '@/models';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { getAllProjects } from '../index/page';
import ProjectProvider from '@/app/context/project';

export async function getProjectBySlug(slug: string): Promise<Project> {
    const projects = await getAllProjects();

    const project = projects.filter(proj => proj.slug === slug)[0] || null;
    if (!project) notFound();

    return project;
}

async function ProjectLayout({ params, children }: { params: { slug: string }, children: ReactNode }) {
    let project: Project | null, error: any = null;
    try {
        project = await getProjectBySlug(params.slug);
    }
    catch (e: any) {
        project = null;
        error = (
            <div className="col-12 error">
                <p>An error occurred: {e?.message || 'Failed to fetch project.'}</p>
            </div>
        );
    }

    return error || (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="mt-3">{project!.name}</h1>

                        <p className="lead">{project!.description}</p>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>

            <ProjectProvider project={project}>
                {children}
            </ProjectProvider>
        </div>
    );
}

export default ProjectLayout;
