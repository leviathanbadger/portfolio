import { redirect } from 'next/navigation';

function HoudiniPracticeRedirect({ params }: { params: { practiceId: string } }) {
    redirect(`/houdini-practice/${encodeURIComponent(params.practiceId)}/overview`);
}

export default HoudiniPracticeRedirect;
