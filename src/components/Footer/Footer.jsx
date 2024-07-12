const Footer = () => {
  return (
    <footer>
      <div className="row m-0 text-light pt-5 mx-5">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h1 className="m-0 mb-3">Your name.</h1>
          <p className="fs-4 text-secondary fw-bold">decs</p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <p className="fs-5 p-0 mb-4 text-secondary">Links</p>
          <ul className="p-0">
            <li className="mb-4">
              <a href="#"> Home </a>
            </li>
            <li className="mb-4">
              <a href="#"> Shop </a>
            </li>
            <li className="mb-4">
              <a href="#"> About </a>
            </li>
            <li className="mb-4">
              <a href="#"> Contact </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <p className="fs-5 p-0 mb-4 text-secondary">Help</p>
          <ul className="p-0">
            <li className="mb-4">
              <a href="#"> Payment Options </a>
            </li>
            <li className="mb-4">
              <a href="#"> Returns </a>
            </li>
            <li className="mb-4">
              <a href="#"> Privacy Policies </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <p className="fs-5 p-0 mb-4 text-secondary">Newsletter</p>
          <div className="d-flex mb-4 gap-3">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="bg-transparent border border-top-0 border-end-0 border-start-0"
            />
            <a
              href="#"
              className="pb-1 bg-transparent text-light border border-top-0 border-end-0 border-start-0"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
        <p className="pt-5 pb-4 border-top">2024 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
