'use client';

import { useContext } from 'react';
import { ProjectContext } from '@/app/context';
import Link from 'next/link';
import './page.scss';
import MarkdownRender from '@/components/markdown-render/markdown-render';
import Slideshow, { SlideshowItem } from '@/components/slideshow/slideshow';

function ProjectOverview() {
    const { project } = useContext(ProjectContext);
    const slideshowItems: SlideshowItem[] = (project?.images || []).map(img => ({
        type: 'image',
        src: img.href!
    }));

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {!!slideshowItems && slideshowItems.length > 0 && (
                        <Slideshow items={slideshowItems} aspectRatioType="project"></Slideshow>
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    {!!project?.body && (
                        <div className="pt-4 page-content">
                            <MarkdownRender src={project.body}></MarkdownRender>
                        </div>
                    )}
                </div>
                <div className="col-md-4">
                    {!!project?.links && project.links.length > 0 && (
                        <div className="mt-3">
                            <h3 className="mt-3">Links</h3>
                            {project.links.map((link, idx) => (
                                <Link key={idx} href={link.href} target="_blank" className="btn btn-primary me-2">{link.name}</Link>
                            ))}
                        </div>
                    )}
                    {!!project?.tags && project.tags.length > 0 && (
                        <div>
                            <h3 className="mt-3">Technologies/Tags</h3>
                            <h4>
                                {project.tags.map((tag, idx) => (
                                    <a key={idx} className="badge rounded-pill text-bg-primary">{tag}</a>
                                ))}
                            </h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectOverview;
