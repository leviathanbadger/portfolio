import Link from 'next/link';
import './footer.scss';

function Footer() {
    let currentYear = new Date().getFullYear();

    return (
        <footer className="text-bg-dark">
            <div className="container">
                <div className="row d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-4">
                        <span className="text-light">&copy; {currentYear}</span>
                    </div>

                    <div className="d-flex col-4 justify-content-center">
                        <Link href="/sitemap" className="ms-2 text-light">Sitemap</Link>
                    </div>

                    <ul className="nav profile-icons col-4 justify-content-end">
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
