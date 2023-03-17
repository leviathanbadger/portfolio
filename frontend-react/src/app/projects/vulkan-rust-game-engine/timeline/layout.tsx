import { ReactNode } from 'react';

function VulkanRustTimelineLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            Vulkan rust timeline layout!

            <div>
                {children}
            </div>

            ...after
        </div>
    );
}

export default VulkanRustTimelineLayout;
