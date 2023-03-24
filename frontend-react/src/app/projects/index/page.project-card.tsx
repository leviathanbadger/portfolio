import Link from 'next/link';
import './page.project-card.scss';
import { Project } from '@/models';
import AlternatingImage from '@/components/alternating-image/alternating-image';

function ProjectCard({ project }: { project: Project }) {
    const thumbnails = (project.images || []).filter(img => !!img.thumbnail).map(img => img.thumbnail!);
    const detailHref = `/projects/${encodeURIComponent(project.slug)}/overview`;

    return (
        <div className="col-md-4 mt-3">
            <Link href={detailHref} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                <div className="card link-card">
                    <div className="card-img-top">
                        <AlternatingImage seedStr={project.slug} sources={thumbnails} alt={project.name} aspectRatioType="project"></AlternatingImage>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {project.name}
                        </h5>
                        <p className="card-text">
                            {project.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;
