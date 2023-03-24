'use client';

import { cyrb53hash, mulberry32 } from '@/utils';
import { useState, useEffect, useRef } from 'react';
import './alternating-image.scss';

const NEXT_IMAGE_INTERVAL_MIN_MILLIS = 5000;
const NEXT_IMAGE_INTERVAL_MAX_MILLIS = 10000;
function getIntervalMillis() {
  return Math.floor(NEXT_IMAGE_INTERVAL_MIN_MILLIS + Math.random() * (NEXT_IMAGE_INTERVAL_MAX_MILLIS - NEXT_IMAGE_INTERVAL_MIN_MILLIS));
}

const POSSIBLE_GRADIENT_DIRECTIONS = ['bottom', 'right', 'bottom', 'right', 'bottom right'];
function randomGradientDirection(rng: () => number) {
    return POSSIBLE_GRADIENT_DIRECTIONS[Math.floor(rng() * POSSIBLE_GRADIENT_DIRECTIONS.length)];
}

const POSSIBLE_COLORS = ['lightskyblue', 'greenyellow', 'darkorchid', 'goldenrod', 'firebrick', 'midnightblue', 'dodgerblue', 'mediumseagreen', 'orangered', 'peru'];
function randomColor(rng: () => number) {
    return POSSIBLE_COLORS[Math.floor(rng() * POSSIBLE_COLORS.length)];
}

function createBackgroundGradient(seedStr: string) {
    const seed = cyrb53hash(seedStr);
    const rng = mulberry32(seed);

    const fromColor = randomColor(rng);
    let toColor: string;
    do { toColor = randomColor(rng); } while (fromColor == toColor);

    return `linear-gradient(to ${randomGradientDirection(rng)}, ${fromColor}, ${toColor})`;
}

function AlternatingImage({ seedStr, sources, alt, aspectRatioType, preloadNextImage }: { seedStr: string, sources: string[], alt: string, aspectRatioType?: 'normal' | 'project', preloadNextImage?: boolean }) {
    if (!aspectRatioType) aspectRatioType = 'normal';
    if (typeof preloadNextImage !== 'boolean') preloadNextImage = true;

    const [source, setSource] = useState(sources[0] || null);
    const sourceRef = useRef(source);
    const [nextSource, setNextSource] = useState(sources[1] || null);
    const nextSourceRef = useRef(nextSource);
    const [previousSource, setPreviousSource] = useState(null as string | null);

    const [triggerFade, setTriggerFade] = useState(false);

    const [background, _] = useState(createBackgroundGradient(seedStr));

    useEffect(() => {
        if (!source || sources.indexOf(source) === -1) {
            setSource(sourceRef.current = sources[0] || null);
        }
        if (!sources || sources.length <= 1) return;

        function selectNextSource() {
            let idx = Math.floor(sources.length * Math.random());
            if (sources[idx] === sourceRef.current) idx = (idx + 1) % sources.length;
            setNextSource(nextSourceRef.current = sources[idx]);
        }
        selectNextSource();

        let triggerFadeTimeout: NodeJS.Timeout | null = null;
        const interval = setInterval(() => {
            setPreviousSource(sourceRef.current);
            setSource(sourceRef.current = nextSourceRef.current);
            selectNextSource();
            setTriggerFade(true);
            triggerFadeTimeout = setTimeout(() => setTriggerFade(false), 550);
        }, getIntervalMillis());

        return () => {
            clearInterval(interval);
            if (triggerFadeTimeout !== null) clearTimeout(triggerFadeTimeout);
        }
    }, [sources]);

    return !!source ? (
        <div className={`alternating-image img-container aspect-ratio-${aspectRatioType}`}>
            {!!nextSource && preloadNextImage && <img className="nextImage" src={nextSource} alt={alt} />}
            <img src={source} alt={alt} />
            {!!previousSource && <img className={`previousImage ${triggerFade ? 'triggerFade' : ''}`} src={previousSource} alt={alt} />}
        </div>
    ) : (
        <div
            className={`alternating-image placeholder-gradient aspect-ratio-${aspectRatioType}`}
            style={{ background }}>
        </div>
    );
}

export default AlternatingImage;
