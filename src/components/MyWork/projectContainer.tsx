import { ProjectType } from "../../types";

const ProjectContainer = (props: { details: ProjectType }) => {
  const details = props.details as ProjectType
  return (
    <div className="project" data-aos="fade-up">
      <div className="project-img">
        <img
          src={`${details.cover_file}`}
          alt=""
          className="work-img"
        />
      </div>
      <div className="date-posted">
        <div className="who-post">
          <p className="admin">{details.technologies.join(" | ")}</p>
        </div>
      </div>
      <div className="work-details">
        <h2>{details.title} ({details.project_type})</h2>
        <p className="work-info">{details.description}</p>
        <div className="project-links">
          <a
            href={details.project_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="learnmore">
              <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
              Live Demo
            </h6>
          </a>
          <a
            href={details.source_code_link}
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