import CustomTitle from "../CustomTitle/CustomTitle";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="image">
              <img
                src={require("../../assets/imgs/about.jpeg")}
                alt="my img"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="info">
              <CustomTitle title={"About me"} />
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                mollitia maxime est temporibus hic ducimus tenetur nobis iusto
                et ab?
              </p>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                mollitia maxime est temporibus hic ducimus tenetur nobis iusto
                et ab?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
