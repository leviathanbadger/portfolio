import { MutableRefObject, useEffect } from 'react';

export function autofocusElement(el: MutableRefObject<HTMLElement | null>, afterMillis: number = 300) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            el.current?.focus();
        }, afterMillis);

        return () => {
            clearTimeout(timeoutId);
        }
    });
}
