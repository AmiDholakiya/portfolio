import "./aboutme.css"
import AboutImage from "../../assets/aboutMe.svg"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const AboutMe = ()=>{
    const userData = useSelector(
        (state: RootState) => state.portfolio.data
    );

    return (
        <div id="about" className="body_page">
            <div className="about_image">
                <img src={AboutImage} />
            </div>
            <div className="about_info">
                <div className="section_heder">
                    <h2>About Me</h2>
                </div>
                <div className="section_title">
                    Why hire me for your next project?
                </div>
                <div className="section_body">
                    {userData.description}
                </div>
                <div>
                    <a
                      href={userData.resume_link}
                      download={`${userData.first_name + userData.last_name}_resume.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv btn btn-primary">
                        Download Resume <i className="bi bi-download"></i>
                      </button>
                    </a>
                  </div>
            </div>
        </div>
    )
}

export default AboutMe;