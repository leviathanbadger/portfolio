import { ReactNode } from 'react';
import { Project } from '@/models';
import { getProjectBySlug } from '../[slug]/layout';
import ProjectProvider from '@/app/context/project';
import './layout.scss';
import VulkanRustLayoutNav from './layout-nav';

async function VulkanRustLayout({ children }: { children: ReactNode }) {
    let project: Project | null, error: any = null;
    try {
        project = await getProjectBySlug('vulkan-rust-game-engine');
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

            <VulkanRustLayoutNav></VulkanRustLayoutNav>

            <ProjectProvider project={project}>
                {children}
            </ProjectProvider>
        </div>
    );
}

export default VulkanRustLayout;
