import CustomTitle from "../CustomTitle/CustomTitle";
import ServiceBox from "../ServiceBox/ServiceBox";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CustomTitle title={"My Services"} />
          </div>
        </div>
        <div className="row">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div className="col-12 col-md-6 mb-4" key={index}>
                <ServiceBox />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
