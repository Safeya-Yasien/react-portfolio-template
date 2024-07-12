const ServiceBox = () => {
  return (
    <div className="service d-flex align-items-start text-end">
      <div className="text">
        <h4 className="service-name">photography</h4>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae
          nisi harum, consequuntur necessitatibus temporibus vel quaerat modi
          recusandae laudantium in. Autem
        </p>
      </div>
      <div className="icon">
        <img
          src={require("../../assets/imgs/services.png")}
          alt="services"
          className="img-fluid"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ServiceBox;
