import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                        <li className='nav-item'>
                            <Link href="https://github.com/leviathanbadger" className="px-2 text-light"><FontAwesomeIcon icon={faGithub} size="2x" /></Link>
                        </li>
                        <li className='nav-item'>
                            <Link href="https://stackoverflow.com/users/768597/leviathanbadger" className="px-2 text-light"><FontAwesomeIcon icon={faStackOverflow} size="2x" /></Link>
                        </li>
                        <li className='nav-item'>
                            <Link href="https://www.linkedin.com/in/brandon-slade" className="px-2 text-light"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
