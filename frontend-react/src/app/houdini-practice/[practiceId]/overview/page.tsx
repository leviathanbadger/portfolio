'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { HoudiniDailyPracticeContext } from '@/app/context';
import MarkdownRender from '@/components/markdown-render/markdown-render';
import Slideshow, { SlideshowItem } from '@/components/slideshow/slideshow';
import './page.scss';

function HoudiniPracticeOverview({ params }: { params: { practiceId: string } }) {
    const { practice } = useContext(HoudiniDailyPracticeContext);
    const slideshowItems: SlideshowItem[] = practice?.assets || [];
    const referenceItems: SlideshowItem[] = practice?.referenceAssets || [];

    return (
        <>
            <div className="display-render">
                <Slideshow items={slideshowItems}></Slideshow>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {!!practice?.body && (
                            <div className="pt-4 page-content">
                                <MarkdownRender src={practice.body}></MarkdownRender>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">
                        {!!practice?.links && practice.links.length > 0 && (
                            <div className="mt-3">
                                <h3 className="mt-3">Links</h3>
                                {practice.links.map((link, idx) => (
                                    <Link key={idx} href={link.href} target="_blank" className="btn btn-primary me-2">{link.name}</Link>
                                ))}
                            </div>
                        )}
                        {!!practice?.tags && practice.tags.length > 0 && (
                            <div>
                                <h3 className="mt-3">Technologies/Tags</h3>
                                <h4>
                                    {practice.tags.map((tag, idx) => (
                                        <a key={idx} className="badge rounded-pill text-bg-primary">{tag}</a>
                                    ))}
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {referenceItems.length > 0 && (
                <>
                    <hr />
                    <div className="container reference-assets-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <p className="lead">
                                    Reference Assets
                                </p>

                                <Slideshow items={referenceItems}></Slideshow>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default HoudiniPracticeOverview;
