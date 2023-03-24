import { useState } from 'react';
import './slideshow.scss';

export type SlideshowImageItem = {
  type: 'image',
  src: string
};
export type SlideshowVideoItem = {
  type: 'video',
  src: string
};

export type SlideshowItem = SlideshowImageItem | SlideshowVideoItem;

function Slideshow({ items, aspectRatioType }: { items: SlideshowItem[], aspectRatioType?: 'normal' | 'project' }) {
    if (!aspectRatioType) aspectRatioType = 'normal';

    const [currentIdx, setCurrentIdx] = useState(0);

    const canMovePrevious = currentIdx > 0;
    const canMoveNext = currentIdx < items.length - 1;
    const canMoveAny = items.length > 1;

    function movePrevious() {
        if (canMovePrevious) {
            setCurrentIdx(currentIdx - 1);
            return true;
        }
        return false;
    }
    function moveNext() {
        if (canMoveNext) {
            setCurrentIdx(currentIdx + 1);
            return true;
        }
        return false;
    }

    function moveItem(index: number) {
        if (index >= 0 && index < items.length) {
            setCurrentIdx(index);
            return true;
        }
        return false;
    }

    return (
        <div>
            <div className="slideshow-backdrop">
                <div className="container slideshow-container max-1080p">
                    {items.map((item, idx) => (
                        <div key={idx} className={`row slideshow-item ${idx !== currentIdx ? 'no-pointer-events' : ''}`}>
                            <div className="col-12" style={{ transform: `translateX(${(idx - currentIdx) * 100}%)`, opacity: idx === currentIdx ? 1 : .2 }}>
                                {item.type === 'image' && (
                                    <img src={item.src} />
                                )}
                                {item.type === 'video' && (
                                    <>
                                        {item.src.startsWith('https://www.youtube.com/embed/') && (
                                            <div className="youtube-aspect-ratio">
                                                <iframe src={item.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="row no-flex no-pointer-events">
                        <div className={`col-12 slideshow-spacer aspect-ratio-${aspectRatioType} current-type-${items[currentIdx].type}`} tabIndex="0"></div>
                    </div>
                </div>
            </div>

            {canMoveAny && (
                <div className="controls-backdrop">
                    <div className="container max-1080p">
                        &nbsp;
                        {canMovePrevious && (
                            <div className="btn-prev" onClick={movePrevious}></div>
                        )}
                        <div className="nav-btn-wrapper">
                            {items.map((item, idx) => (
                                <div key={idx} className={`btn-index ${idx == currentIdx ? 'current' : ''}`} onClick={() => moveItem(idx)}></div>
                            ))}
                        </div>
                        {canMoveNext && (
                            <div className="btn-next" onClick={moveNext}></div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Slideshow;
