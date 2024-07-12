import TestimonialBox from "../TestimonialBox/TestimonialBox";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h1 className="text-center fw-semibold m-3 text-light mb-5">
          Testimonial
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <TestimonialBox />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
