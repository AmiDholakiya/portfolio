import "./home.css"
// import VideoBackground from "../../assets/Homebackground.mp4"
import ProfilePic from "../../assets/profile.jpg"

const Home =  ()=>{
    return (
        <div id="home">
            {/* <video autoPlay loop muted className="home_background"> 
                <source src={VideoBackground} type="video/mp4" />
                {/* <source src="https://imgur.com/2cSaKIt.mp4" type="video/mp4" /> 
                <img src={ProfilePic} />
            </video> */}
            <div className="home_body">
                <div className="home_info">
                    <p className="job_title"><span>Full Stack Developer</span></p>
                    <p className="hey_text"><span>Hey! I Am</span></p>
                    <p className="name"><span>Amiben Dholakiya</span></p>
                    <p className="headline"><span>Experienced Full Stack JavaScript developer and newly certified Data Analyst.</span></p>
                </div>
                <div className="home_photo">
                    <img src={ProfilePic} />
                </div>
            </div>
        </div>
    )
}

export default Home