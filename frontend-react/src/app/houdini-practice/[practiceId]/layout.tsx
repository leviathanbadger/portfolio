import { ReactNode } from 'react';

function HoudiniPracticeLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            Houdini practice layout!

            <div>
                {children}
            </div>

            ...after
        </div>
    );
}

export default HoudiniPracticeLayout;
