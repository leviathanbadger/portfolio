import Link from 'next/link';
import Image from 'next/image';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './resume.scss';

function Resume() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 resume">
                    <div className="title">
                        <div className="pdf-button-links">
                            <Link className="ms-4 btn btn-primary" href="/assets/docs/resume-devops.pdf">
                                <FontAwesomeIcon className="me-2" icon={faFilePdf}></FontAwesomeIcon>View as PDF
                            </Link>
                        </div>

                        <span className="line strong">Brandon Slade</span><br/>
                        <span className="line">Senior DevOps Engineer and Software Engineer</span><br/>
                        <span className="line">Midvale, UT 84047</span><br/>
                        <span className="line">(719) 671-0324</span><br/>
                        <span className="line links">
                            <Link href="mailto:brandonyoyoslade@gmail.com">brandonyoyoslade@gmail.com</Link>
                            <span className="link-separator"></span>
                            <Link href="https://www.linkedin.com/in/brandon-slade" target="_blank">linkedin.com/in/brandon-slade</Link>
                            <span className="link-separator"></span>
                            <Link href="https://www.github.com/leviathanbadger" target="_blank">github.com/leviathanbadger</Link>
                        </span>
                    </div>

                    <div className="section">
                        <h3>Technical tools</h3>

                        <h6><strong>DevOps</strong></h6>

                        <p>
                            Kubernetes administration/application development, TKGI (PKS), Helm, Docker,
                            GitLab CI, Travis CI, TeamCity, Octopus, AWS, Linux/Unix, and more
                        </p>

                        <h6><strong>Development</strong></h6>

                        <p>
                            C# and .NET, Typescript and Javascript, HTML and CSS/SCSS,
                            Angular, Node.js, Express.js, Webpack, C++, and more
                        </p>
                    </div>

                    <div className="section">
                        <h3>Certifications</h3>

                        <div className="certification-list">
                            <Link className="certification-tile" href="https://www.credly.com/badges/ccefbafb-49f2-4b78-beba-2f4a86ac29ae/public_url" title="Certified Kubernetes Application Developer">
                                <div>
                                    <Image src="/assets/images/certifications/ckad-certified-kubernetes-application-developer.png" width={140} height={140} alt="Certified Kubernetes Application Developer" />
                                </div>
                                <div className="details">
                                    <span>Feb. 2021</span>
                                </div>
                            </Link>

                            <Link className="certification-tile" href="https://www.credly.com/badges/91f8b499-398c-4ac4-ae3a-7a7b2558e34c/public_url" title="AWS Certified Solutions Architect – Associate">
                                <div>
                                    <Image src="/assets/images/certifications/aws-certified-solutions-architect-associate.png" width={140} height={140} alt="AWS Certified Solutions Architect – Associate" />
                                </div>
                                <div className="details">
                                    <span>May 2021</span>
                                </div>
                            </Link>

                            <Link className="certification-tile" href="https://www.credly.com/badges/8ba4fedd-bb42-4982-9a6a-7a8252b2f20e/public_url" title="Certified Kubernetes Administrator">
                                <div>
                                    <Image src="/assets/images/certifications/cka-certified-kubernetes-administrator.png" width={140} height={140} alt="Certified Kubernetes Administrator" />
                                </div>
                                <div className="details">
                                    <span>Sept. 2021</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="section">
                        <div className="subsection">
                            <h3>Professional Experience</h3>
                        </div>

                        <div className="subsection">
                            <p>
                                <strong>DevSecOps Engineer</strong>, 3/23 to Present - COLSA
                            </p>

                            <p>
                                That's a little vague at the moment, since I just barely started the job. I'll update this
                                in the coming year(s) or whenever I decide to get another job.
                                <em>&#32;Achievement highlights:</em>
                            </p>

                            <ul>
                                <li>
                                    None so far. Cut me a break, I just barely started. (Or I haven't updated this yet because
                                    I'm not looking for a new job.)
                                </li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <p>
                                <strong>Senior DevOps Engineer</strong>, 1/20 to 11/22 - VPay/Optum Financial
                            </p>

                            <p>
                                Facilitated the development teams' migrations to containerized applications running
                                within kubernetes. Helped administrate and maintain several on-premises kubernetes clusters.
                                <em>&#32;Achievement highlights:</em>
                            </p>

                            <ul>
                                <li>
                                    Built and maintained dozens of applications' build and deployment pipelines
                                    within GitLab CI using Docker and Helm.
                                </li>
                                <li>
                                    Built an internal security gate to prevent production deployments without explicit approval from
                                    the security team.
                                </li>
                                <li>
                                    Assisted in performing several on-premises Kubernetes cluster upgrades to keep our production
                                    environments current and highly-available. Kubernetes clusters are a downstream variant of Kubernetes
                                    called Tanzu Kubernetes Grid Integrated Edition, by VMWare.
                                </li>
                                <li>
                                    Deployed and maintained infrastructure and applications for several developer tools,
                                    including HashiCorp Vault (for secrets management), GitLab (for source control and CI/CD),
                                    Kubernetes Dashboards, Prometheus and Grafana (for monitoring and alerting),
                                    SonarQube (for code scanning), and RabbitMQ
                                </li>
                                <li>
                                    Implemented solution for autoscaling Kubernetes deployments based on the messages in a Rabbit queue
                                </li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <p>
                                <strong>Engineer II</strong>, 9/18 to 1/20 - Axxess
                            </p>

                            <p>
                                Build new features and internal applications for a cloud-based home-health application called AgencyCore
                                <em>&#32;Achievement highlights:</em>
                            </p>

                            <ul>
                                <li>
                                    Led team of three developers focused on integrations with external applications.
                                </li>
                                <li>
                                    Helped facilitate deployments using automated CI with TeamCity and Octopus
                                </li>
                                <li>
                                    Architected solution to submit electronic visit verification information to various
                                    contracted state aggregators, abstracting away implementation details.
                                </li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <p>
                                <strong>Full-Stack Web Developer</strong>, 8/16 to 5/18 - Wiselynx, LLC
                            </p>

                            <p>
                                Software developer and full-stack web developer for several production-quality
                                solutions, including both contract and in-house projects.
                                <em>&#32;Achievement highlights:</em>
                            </p>

                            <ul>
                                <li>
                                    Engineered an automated continuous-integration pipeline that reduced deployment times from
                                    several hours to just under ten minutes. Built using GitLab CI, deployed to AWS EC2
                                    using AWS CodePipeline and bash scripts
                                </li>
                                <li>
                                    Primary developer for a developer documentation tool built from the ground-up using
                                    Angular, NodeJS, Express, and SocketIO.
                                </li>
                                <li>
                                    Created software integrations for APIs such as GitHub, SalesForce, Android, Twilio,
                                    and Chrome browser extensions.
                                </li>
                                <li>
                                    Optimized the geographic search algorithm for a production application by reducing
                                    algorithmic complexity and using native MongoDB geographic indexes.
                                </li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <p>
                                <strong>Gameplay Programmer and Designer</strong>, 6/17 to 5/18 - Miniwit Studios, LLC
                            </p>

                            <p>
                                Design, program, and publish a 2D puzzle game from start to finish.
                                <em>&#32;Achievement highlights:</em>
                            </p>

                            <ul>
                                <li>
                                    Published to Steam, including Steam Cloud integration for persistent player saves.
                                </li>
                                <li>
                                    Created using an in-house game engine built on top of WebGL.
                                </li>
                                <li>
                                    CI pipeline for automated build and regression testing using Travis CI.
                                </li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <p>
                                <strong>Backend Web Developer</strong>, 10/15 to 8/16 - U.S. Novelty, LLC
                            </p>

                            <p>
                                Build new features and patch bugs in a Ruby on Rails eCommerce application
                                with custom integrations with Amazon.
                                <em>&#32;Achievement highlights:</em>
                            </p>

                            <ul>
                                <li>
                                    Corrected regressions and security holes in the checkout process.
                                </li>
                                <li>
                                    Built out admin portal pages allowing more granular control of products, pricing, and discounts.
                                </li>
                                <li>
                                    Partially built out a CMS for marketing to more easily modify the homepage and product category pages.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Education</h3>

                        <p>
                            <span className="line">
                                <span className="degree">Bachelor of Science in Software and Game Development (BSGD)</span>, (Graduated 9/18)
                            </span><br/>
                            <span className="line">Neumont College of Computer Science – Salt Lake City, UT</span><br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
