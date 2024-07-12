const Projects = () => {
  return (
    <section className="example-projects" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="feature-project">
              <p className="project-subtitle mb-0">Featured Project</p>
              <h3 className="project-title">Example Project</h3>
              <div className="box">
                <p>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="icons" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="image">
              <img
                src={require("../../assets/imgs/example.png")}
                alt="example"
              />
            </div>
          </div>
        </div>
        <div className="reversed">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-6">
              <div className="feature-project">
                <p className="project-subtitle mb-0">Featured Project</p>
                <h3 className="project-title">Example Project</h3>
                <div className="box">
                  <p>
                    A web app for visualizing personalized Spotify data. View
                    your top artists, top tracks, recently played tracks, and
                    detailed audio information about each track. Create and save
                    new playlists of recommended tracks based on your existing
                    playlists and more.
                  </p>
                </div>
                <div className="icons" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
            <div className="image">
              <img
                src={require("../../assets/imgs/example.png")}
                alt="example"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
