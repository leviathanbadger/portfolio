import Link from "next/link";


function Sitemap() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="mt-3">Sitemap</h1>
                </div>

                <div className="col-4 sitemap-section">
                    <h3 className="mt-2">Pages</h3>

                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/resume">R&eacute;sum&eacute;</Link></li>
                        <li><Link href="/houdini-practice">Houdini Practice (Index)</Link></li>
                        <li><Link href="/sitemap">Sitemap</Link></li>
                    </ul>
                </div>

                <div className="col-4 sitemap-section">
                    <h3 className="mt-2">Projects</h3>

                    <ul>
                        <li><Link href="/projects/index">Projects (Index)</Link></li>
                        <li><Link href="/projects/current">Current Project</Link></li>
                        <li><Link href="/projects/vulkan-rust-game-engine/overview">Vulkan Rust Game Engine (Overview)</Link></li>
                        <li><Link href="/projects/vulkan-rust-game-engine/timeline">Vulkan Rust Game Engine (Timeline)</Link></li>
                    </ul>
                </div>

                <div className="col-4 sitemap-section">
                    <h3 className="mt-2">Error Pages</h3>

                    <ul>
                        <li><Link href="/not-found">404 Not Found</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sitemap;
