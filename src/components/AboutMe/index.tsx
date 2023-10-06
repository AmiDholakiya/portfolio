import "./aboutme.css"
import AboutImage from "../../assets/aboutMe.svg"

export default ()=>{
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
                    I am passionate about using Javascript and Animation Libraries to create awesome user experiences. With over five years of experience developing web applications using the latest front-end and back-end technologies.
                </div>
                <div>
                    <a
                      href="https://drive.google.com/file/d/127RCSy1lUZE2sS8IgkxxPcUqbw1rYMOR/view"
                      download="RESUME.pdf"
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