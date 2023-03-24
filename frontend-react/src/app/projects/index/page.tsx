import Link from 'next/link';
import ProjectList from './page.project-list';
import { Project } from '@/models';
import './page.scss';

export async function getAllProjects(): Promise<Project[]> {
    const res = await fetch('https://brandonslade.me/api/projects');
    if (!res.ok) {
        throw new Error('Failed to fetch projects.', { cause: res });
    }

    return res.json();
}

async function ProjectIndex() {
    let allProjects: Project[], error: any = null;
    try {
        allProjects = await getAllProjects();
    }
    catch (e: any) {
        allProjects = [];
        error = (
            <div className="col-12 error">
                <p>An error occurred: {e?.message || 'Failed to fetch projects.'}</p>
            </div>
        );
    }

    return (
        <div className="section tile-list">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <div className="button-links">
                            <Link href="/projects/current" className="mx-3 mt-4 btn btn-primary">
                                Current Project
                            </Link>
                        </div>

                        <h1 className="mt-3">Projects</h1>
                    </div>
                </div>

                {error || (<ProjectList projects={allProjects}></ProjectList>)}
            </div>
        </div>
    );
}

export default ProjectIndex;
