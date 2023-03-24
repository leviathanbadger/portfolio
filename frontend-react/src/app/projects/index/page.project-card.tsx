import Link from 'next/link';
import './page.project-card.scss';
import { Project } from '@/models';
import AlternatingImage from '@/components/alternating-image/alternating-image';

function ProjectCard({ project }: { project: Project }) {
    const thumbnails = (project.images || []).filter(img => !!img.thumbnail).map(img => img.thumbnail!);
    const detailHref = `/projects/${encodeURIComponent(project.slug)}/overview`;

    return (
        <div className="col-md-4 mt-3">
            <div className="card link-card">
                <div className="card-img-top">
                    <Link href={detailHref}>
                        <AlternatingImage seedStr={project.slug} sources={thumbnails} alt={project.name} aspectRatioType="project"></AlternatingImage>
                    </Link>
                </div>
                <div className="card-body">
                    <Link href={detailHref} style={{ textDecoration: 'inherit'}}>
                        <h5 className="card-title">
                            {project.name}
                        </h5>
                    </Link>
                    <p className="card-text">
                        {project.description}
                    </p>
                    <Link className="btn btn-primary" href={detailHref}>Details</Link>
                    {(project.links || []).map((link, idx) => (
                        <Link className="btn btn-default" href={link.href} key={idx}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
