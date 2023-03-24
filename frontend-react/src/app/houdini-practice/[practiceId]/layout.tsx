import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { HoudiniDailyPractice } from '@/models';
import HoudiniDailyPracticeProvider from '@/app/context/houdini-daily-practice';
import './layout.scss';

export async function getHoudiniPracticeById(id: string): Promise<HoudiniDailyPractice> {
    const res = await fetch(`https://brandonslade.me/api/houdini/daily-practice/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch Houdini daily practice project: [${id}].`, { cause: res });
    }

    return res.json();
}

async function HoudiniPracticeLayout({ params, children }: { params: { practiceId: string }, children: ReactNode }) {
    let practice: HoudiniDailyPractice | null, error: any = null;
    try {
        practice = await getHoudiniPracticeById(params.practiceId);
    }
    catch (e: any) {
        practice = null;
        error = (
            <div className="col-12 error">
                <p>An error occurred: {e?.message || 'Failed to fetch practice.'}</p>
            </div>
        );
    }

    return error || (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="mt-3">{practice!.name}</h1>

                        <p className="lead">
                            <span className="hover-metadata" title={practice!.date}>Day {practice!.id}</span>:&nbsp;
                            {practice!.description}
                        </p>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>

            <HoudiniDailyPracticeProvider practice={practice}>
                {children}
            </HoudiniDailyPracticeProvider>
        </div>
    );
}

export default HoudiniPracticeLayout;
