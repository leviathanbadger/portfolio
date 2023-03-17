import { redirect } from 'next/navigation';

function ProjectRedirect({ params }: { params: { slug: string } }) {
    redirect(`/projects/${encodeURIComponent(params.slug)}/overview`);
}

export default ProjectRedirect;
