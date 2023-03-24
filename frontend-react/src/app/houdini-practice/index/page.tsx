import Link from 'next/link';
import PracticeList from './page.practice-list';
import { HoudiniDailyPractice } from '@/models';
import './page.scss';

export async function getAllHoudiniPractices(): Promise<HoudiniDailyPractice[]> {
    const res = await fetch('https://brandonslade.me/api/houdini/daily-practice');
    if (!res.ok) {
        throw new Error('Failed to fetch Houdini daily practice projects.', { cause: res });
    }

    return res.json();
}

async function HoudiniPracticeIndex() {
    let allPractice: HoudiniDailyPractice[], error: any = null;
    try {
        allPractice = await getAllHoudiniPractices();
    }
    catch (e: any) {
        allPractice = [];
        error = (
            <div className="col-12 error">
                <p>An error occurred: {e?.message || 'Failed to fetch Houdini daily practice projects.'}</p>
            </div>
        );
    }

    return (
        <div className="section tile-list">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <div className="button-links">
                            <Link href="/houdini-practice/latest/overview" className="mx-3 mt-4 btn btn-primary">
                                Latest Practice
                            </Link>
                        </div>

                        <h1 className="mt-3">Houdini Daily Practice</h1>
                    </div>
                </div>

                {error || (<PracticeList items={allPractice}></PracticeList>)}
            </div>
        </div>
    );
}

export default HoudiniPracticeIndex;
