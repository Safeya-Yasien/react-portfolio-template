import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faDiagramSuccessor,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomTitle from "../CustomTitle/CustomTitle";

const Contact = () => {
  return (
    <section className="getInTouch" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CustomTitle title={"get in touch"} />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4">
            <form id="form">
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-group mb-4 me-4">
                  <label htmlFor="f-name">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="f-name"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="l-name">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="l-name"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message">message:</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                />
              </div>
              <button type="submit" className="custom-btn">
                Send
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4 text-uppercase">Contact Info</h5>
                <p className="card-text mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quia quae quas explicabo corrupti necessitatibus quisquam
                  quos?.
                </p>
                <div className="d-flex mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faLocationCrosshairs}
                      className="fs-5 fw-bold me-1"
                    ></FontAwesomeIcon>
                  </span>
                  <p className="card-text">
                    Address:
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit, numquam.
                  </p>
                </div>
                <div className="d-flex mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fs-5 fw-bold me-1"
                    ></FontAwesomeIcon>
                  </span>
                  <p className="card-text">
                    Email: iisraelgonza@gmail.com abelisraelromero@gmail.com
                  </p>
                </div>
                <div className="d-flex mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fs-5 fw-bold me-1"
                    ></FontAwesomeIcon>
                  </span>
                  <p className="card-text">Phone: +52 671 114 3273</p>
                </div>
                <div className="d-flex mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faDiagramSuccessor}
                      className="fs-5 fw-bold me-1"
                    ></FontAwesomeIcon>
                  </span>
                  <p className="card-text">office - Beans studio</p>
                </div>
                <div className="d-flex">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faSkype}
                      className="fs-5 fw-bold me-1"
                    ></FontAwesomeIcon>
                  </span>
                  <p className="card-text">Skype: sadfasd.skype</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
