import { ReactNode } from 'react';

function ProjectLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            Project layout!

            <div>
                {children}
            </div>

            ...after
        </div>
    );
}

export default ProjectLayout;
