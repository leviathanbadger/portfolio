

function HoudiniPracticeOverview({ params }: { params: { practiceId: string } }) {
    return (
        <div>
            Hello, Houdini practice (overview: [{params.practiceId}])!
        </div>
    );
}

export default HoudiniPracticeOverview;
