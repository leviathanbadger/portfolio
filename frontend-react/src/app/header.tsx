'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.scss';

function getLinkClassNames(pathname: string, path: string, exact = false) {
    let names = "nav-link px-3 pb-2 text-light";
    if (pathname === path || (!exact && pathname.startsWith(path))) names += " active text-dark";
    return names;
}

function Header() {
    const pathname = usePathname();

    return (
        <header className="px-3 pt-2 text-bg-dark border-bottom border-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-end justify-content-center justify-content-lg-between">
                    <div>
                        <ul className="nav nav-tabs border-bottom-0">
                            <Link href="/" className={getLinkClassNames(pathname, "/", true)}>Brandon Slade - Portfolio</Link>
                        </ul>
                    </div>

                    <div>
                        <ul className="nav nav-tabs border-bottom-0">
                            <Link href="/projects" className={getLinkClassNames(pathname, "/projects")}>Projects</Link>
                            <Link href="/houdini-practice" className={getLinkClassNames(pathname, "/houdini-practice")}>Houdini Practice</Link>
                            <Link href="/resume" className={getLinkClassNames(pathname, "/resume")}>R&eacute;sum&eacute;</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
