'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getLinkClassNames(pathname: string, path: string, exact = false) {
    let names = 'nav-link';
    if (pathname === path || (!exact && pathname.startsWith(path))) names += " active";
    return names;
}

function VulkanRustLayoutNav() {
    const pathname = usePathname();

    return (
        <div className="subsection-nav mb-4">
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link href='/projects/vulkan-rust-game-engine/overview' className={getLinkClassNames(pathname, '/projects/vulkan-rust-game-engine/overview')}>Overview</Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/projects/vulkan-rust-game-engine/timeline' className={getLinkClassNames(pathname, '/projects/vulkan-rust-game-engine/timeline')}>Timeline</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default VulkanRustLayoutNav;
