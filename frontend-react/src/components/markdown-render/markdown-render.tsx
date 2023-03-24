'use client';

import ReactMarkdown from 'react-markdown';
import './markdown-render.scss';

function MarkdownRender({ src }: { src: string }) {
    return (
        <div>
            <ReactMarkdown>{src}</ReactMarkdown>
        </div>
    );
}

export default MarkdownRender;
