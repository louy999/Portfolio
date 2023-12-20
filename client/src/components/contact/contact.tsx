import { useEffect } from "react";
import Form from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import BackContact from "../backConact/backContact";
const Contact = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="container contact" id="#contact">
        <h1 className="animate__animated">Contact Us</h1>
        <div className="con-content">
          <Form />
          <div className="info">
            <div className="my-email">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="data">louyhany999@gmail.com</span>
            </div>
            <div className="my-phone">
              <FontAwesomeIcon icon={faPhone} />
              <span className="data">+201029939183</span>
            </div>
            <div className="my-linkden">
              <FontAwesomeIcon icon={faLinkedin} />
              <Link
                target="_blank"
                to="linkedin.com/in/louy-hany"
                className="data"
              >
                linkedin.com/in/louy-hany
              </Link>
            </div>
            <div className="my-face">
              <FontAwesomeIcon icon={faFacebook} />
              <Link
                target="_blank"
                to="https://www.facebook.com/louy.hany.5/"
                className="data"
              >
                facebook.com/louy.hany.5
              </Link>
            </div>
            <div className="my-face">
              <FontAwesomeIcon icon={faGithub} />
              <Link
                target="_blank"
                to="https://github.com/louy999"
                className="data"
              >
                github.com/louy999
              </Link>
            </div>
          </div>
        </div>
        <BackContact />
      </div>
    </>
  );
};

export default Contact;
