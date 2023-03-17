

function ProjectOverview({ params }: { params: { slug: string } }) {
    return (
        <div>
            Hello, Project (overview: [{params.slug}])!
        </div>
    );
}

export default ProjectOverview;
