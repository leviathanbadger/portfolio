import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './page.scss';

function Home() {
    return (
        <div>
            <div className="banner-content">
                <div className="banner-right">
                    <div className="hello-sticker">
                        <div className="hello-label">
                            <span className="hello">hello</span>
                            <span className="mynameis">my name is</span>
                            <h1 className="display-1 name"><span>Brandon Slade</span></h1>
                        </div>
                    </div>

                    <p className="lead">
                        Senior DevOps Engineer and Software Engineer
                        <Link href="/projects/index">
                            <button className="ms-4 btn btn-primary">
                                View Projects<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                            </button>
                        </Link>
                    </p>

                    <p className="lead">
                        Houdini Enthusiast
                        <Link href="/houdini-practice/index">
                            <button className="ms-4 btn btn-primary">
                                View Practice<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                            </button>
                        </Link>
                    </p>

                    <p className="profile-icons">
                        <Link href="https://github.com/leviathanbadger"><FontAwesomeIcon icon={faGithub} size="3x" /></Link>
                        <Link href="https://stackoverflow.com/users/768597/leviathanbadger"><FontAwesomeIcon icon={faStackOverflow} size="3x" /></Link>
                        <Link href="https://www.linkedin.com/in/brandon-slade"><FontAwesomeIcon icon={faLinkedin} size="3x" /></Link>
                    </p>
                </div>
            </div>

            <div className="banner-image" style={{"backgroundImage": "url(/assets/images/closeup-face-fixed.png)"}}></div>
        </div>
    );
}

export default Home;
