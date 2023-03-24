import Link from 'next/link';
import './page.practice-card.scss';
import { HoudiniDailyPractice } from '@/models';
import AlternatingImage from '@/components/alternating-image/alternating-image';

function PracticeCard({ practice }: { practice: HoudiniDailyPractice }) {
    const thumbnails = practice.thumbnails || [];
    const detailHref = `/houdini-practice/${encodeURIComponent(practice.id)}/overview`;

    return (
        <div className="col-md-4 mt-3">
            <Link href={detailHref} style={{ textDecoration: 'inherit'}}>
                <div className="card link-card">
                    <div className="card-img-top">
                        <AlternatingImage seedStr={`${practice.id}`} sources={thumbnails} alt={practice.name}></AlternatingImage>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <span className="practice-name">{practice.name}</span>
                            <span className="practice-date" title={practice.date}>Day {practice.id}</span>
                        </h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PracticeCard;
