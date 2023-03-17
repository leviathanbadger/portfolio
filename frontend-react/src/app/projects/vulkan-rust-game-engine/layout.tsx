import { ReactNode } from 'react';

function VulkanRustLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            Vulkan rust layout!

            <div>
                {children}
            </div>

            ...after
        </div>
    );
}

export default VulkanRustLayout;
