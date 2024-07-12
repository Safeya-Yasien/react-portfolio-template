import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialBox = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text fw-bold mb-3">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div className="card-footer bg-transparent border-0 d-flex">
        <img
          src={require("../../assets/imgs/person2.png")}
          alt="person2"
          className="card-img-top rounded-circle me-4"
          style={{ width: 50, height: 50 }}
        />
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex mb-2">
            <FontAwesomeIcon icon={faStar} className="pe-1"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="pe-1"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="pe-1"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="pe-1"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="pe-1"></FontAwesomeIcon>
          </div>
          <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
          <p className="card-text mb-2">Google</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
