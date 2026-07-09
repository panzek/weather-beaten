
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

const Socials = () => {

    return (
        <Row className="position-absolute top-100 start-50 w-100 ms-0 translate-middle">
            <Col >
                <a
                    href="https://www.tiktok.com/@panzeksolutions"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Go to Developer's TikTok page (opens new tab on third party site)"
                    title="TikTok">
                    <FontAwesomeIcon
                        icon="fa-brands fa-tiktok"
                        aria-hidden="true"
                        size="2xl"
                        className="icon-color"
                    />
                    <span className="sr-only">
                        Twitter
                    </span>
                </a>
            </Col>
            <Col>
                <a
                    href="https://instagram.com/panzeksolutions"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Go to Developer's Instagram page (opens new tab on third party site"
                    title="Instagram">
                    <FontAwesomeIcon
                        icon="fa-brands fa-square-instagram"
                        aria-hidden="true"
                        size="2xl"
                        className="icon-color"
                    />
                    <span className="sr-only">
                        Instagram
                    </span>
                </a>
            </Col>
            <Col>
                <a
                    href="https://github.com/panzek"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Go to developer's GitHub page (opens new tab on third party site"
                    title="GitHub">
                    <FontAwesomeIcon
                        icon="fa-brands fa-square-github"
                        aria-hidden="true"
                        size="2xl"
                        className="icon-color"
                    />
                    <span className="sr-only">
                        GitHub
                    </span>
                </a>
            </Col>
        </Row>
    );
}

export default Socials;