import {
  faBehance,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 position-relative">
            <div className="text mb-4 mb-md-0">
              <h1 className="name">Mr. Beans</h1>
              <h2 className="job">
                FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER
              </h2>
              <ul className="social-icons d-flex align-items-center p-0 mt-4">
                <li>
                  <a
                    className="social-icon d-flex align-items-center justify-content-center me-3"
                    href="#"
                    aria-label="twitter"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="twitter"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a
                    className="social-icon d-flex align-items-center justify-content-center me-3"
                    href="#"
                    aria-label="behance"
                  >
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="behance"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a
                    className="social-icon d-flex align-items-center justify-content-center"
                    href="#"
                    aria-label="pinterest"
                  >
                    <FontAwesomeIcon
                      icon={faPinterest}
                      className="pinterest"
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
              <a className="custom-btn" href="#">
                Download CV
              </a>
              <div className="scroll-btn">
                <span />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="image d-flex justify-content-end">
              <img
                src={require("../../assets/imgs/landing.svg")}
                alt="landing"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
