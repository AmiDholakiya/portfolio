import "./contact.css";
import Footer from "../Footer";

const Contact = () =>{
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
                <a href="https://www.w3schools.com/cssref/pr_border-top.php" target="_blank">
                <div className="contact-details">
                        <i className="bi bi-github" ></i>
                      </div>
                      </a>
                      <a href="https://www.w3schools.com/cssref/pr_border-top.php" target="_blank">
                        <div className="contact-details">
                          <i className="bi bi-envelope" ></i>
                          <p className="d_name">amidholakiya624@gmail.com</p>
                        </div>
                      </a>
                      <a href="https://www.w3schools.com/cssref/pr_border-top.php" target="_blank">
                      <div className="contact-details">
                        <i className="bi bi-geo-alt-fill" ></i>
                        <p className="d_name">Toronto, Canada</p>
                      </div>
                      </a>
                      <a href="https://www.w3schools.com/cssref/pr_border-top.php" target="_blank">
                      <div className="contact-details">
                        <i className="bi bi-linkedin" ></i>
                      </div>
                      </a>
                    </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Contact;