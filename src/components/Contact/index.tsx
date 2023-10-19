import "./contact.css";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Contact = () => {
  const socialMediaList = useSelector(
    (state: RootState) => state.portfolio.socialMediaList
  )

  const userData = useSelector(
    (state: RootState) => state.portfolio.data
  )


  return (
    <div id="contact" className="body_page">
      <div className="section_heder">
        <h2>Whether you want to get in touch, or talk about a project collaboration.</h2>
        <h2 className="bold_header">Feel free to connect with me</h2>
      </div>
      <div className="section_title">
        Get In Touch
      </div>
      <div className="section_body">
        <div className="contact-info ">
          <a href={socialMediaList.find((data) => (data.name).toLowerCase() == "github")?.profile_link} target="_blank">
            <div className="contact-details" data-aos="fade-right"
                      data-aos-duration="3000" data-aos-easing="ease-in-cubic">
              <i className="bi bi-github" ></i>
            </div>
          </a>
          {/* <a href="https://www.w3schools.com/cssref/pr_border-top.php" target="_blank"> */}
          <div className="contact-details" data-aos="fade-right"
                      data-aos-duration="2500" data-aos-easing="ease-in-cubic"> 
            <i className="bi bi-envelope" ></i>
            <p className="d_name">{userData.email}</p>
          </div>
          {/* </a> */}
          {/* <a href="https://www.w3schools.com/cssref/pr_border-top.php" target="_blank"> */}
          <div className="contact-details" data-aos="fade-right"
                      data-aos-duration="2000" data-aos-easing="ease-in-cubic"> 
            <i className="bi bi-geo-alt-fill" ></i>
            <p className="d_name">{userData.location}</p>
          </div>
          {/* </a> */}
          <a href={socialMediaList.find((data) => (data.name).toLowerCase() == "linkedin")?.profile_link} target="_blank">
            <div className="contact-details" data-aos="fade-right"
                      data-aos-duration="1500" data-aos-easing="ease-in-cubic"> 
              <i className="bi bi-linkedin" ></i>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;