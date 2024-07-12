import CustomTitle from "../CustomTitle/CustomTitle";

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CustomTitle title={"Blog"} />
          </div>
        </div>
        <div className="gallery">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-2">
                  <img
                    src={require("../../assets/imgs/blog/blog-1.png")}
                    className="img"
                    alt="blog-1"
                    loading="lazy"
                  />
                </div>
                <div className="col-2">
                  <img
                    src={require("../../assets/imgs/blog/blog-2.png")}
                    className="img"
                    alt="blog-2"
                    loading="lazy"
                  />
                </div>
                <div className="col-2">
                  <img
                    src={require("../../assets/imgs/blog/blog-3.png")}
                    className="img"
                    alt="blog-3"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-2">
                  <img
                    src={require("../../assets/imgs/blog/blog-4.png")}
                    className="img"
                    alt="blog-4"
                    loading="lazy"
                  />
                </div>
                <div className="col-2">
                  <img
                    src={require("../../assets/imgs/blog/blog-5.png")}
                    className="img"
                    alt="blog-5"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-2">
                  <img
                    src={require("../../assets/imgs/blog/blog-6.png")}
                    className="img"
                    alt="blog-6"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
