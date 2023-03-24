import Link from 'next/link';
import './page.project-list.scss';
import { Project } from '@/models';

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="col-md-4 mt-3">
            <div className="card link-card">
                <div className="card-img-top">
                    <Link href={`/projects/${encodeURIComponent(project.slug)}`}>
                        {/* <bls-alternating-img [src]="project.thumbnails" [alt]="project.name" aspectRatioType="project"></bls-alternating-img> */}
                    </Link>
                </div>
                <div className="card-body">
                    <Link href={`/projects/${encodeURIComponent(project.slug)}`} style={{ textDecoration: 'inherit'}}>
                        <h5 className="card-title">
                            {project.name}
                        </h5>
                    </Link>
                    <p className="card-text">
                        {project.description}
                    </p>
                    <Link className="btn btn-primary" href={`/projects/${encodeURIComponent(project.slug)}`}>Details</Link>
                    {(project.links || []).map((link, idx) => (
                        <Link className="btn btn-default" href={link.href} key={idx}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
