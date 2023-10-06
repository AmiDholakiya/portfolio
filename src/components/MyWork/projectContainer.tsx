import ProjectImg from "../../assets/project.jpg"

const ProjectContainer = (details: any) => {
  details = details.details
  return (
    <div className="project" data-aos="fade-up">
      <div className="project-img">
        <img
          src={`${ProjectImg}${details.about_avatar}`}
          alt=""
          className="work-img"
        />
      </div>
      <div className="date-posted">
        <div className="who-post">
          <p className="admin">{details.language_used.join(" | ")}</p>
        </div>
      </div>
      <div className="work-details">
        <h2>{details.Project_title}</h2>
        <p className="work-info">{details.Project_info}</p>
        <div className="project-links">
          <a
            href={details.demo_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="learnmore">
              <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
              Live Demo
            </h6>
          </a>
          <a
            href={details.project_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="learnmore">
              <i className="fa fa-github" aria-hidden="true"></i> &nbsp;
              Source Code
            </h6>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer;