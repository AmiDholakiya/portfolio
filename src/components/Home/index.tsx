import "./home.css"
import VideoBackground from "../../assets/Homebackground.mp4"
import ProfilePic from "../../assets/profile.jpg"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Home =  ()=>{
    const userData = useSelector(
        (state: RootState) => state.portfolio.data
      );
    return (
        <div id="home">
            <video autoPlay loop muted className="home_background"> 
                <source src={VideoBackground} type="video/mp4" />
                {/* 
                    <source src="https://imgur.com/2cSaKIt.mp4" type="video/mp4" /> 
                    https://docs.google.com/document/d/1ZuDUIaXUCRBF5yMaY7w-UZT4A2lPtJq9/edit?usp=sharing&ouid=107224024096550070591&rtpof=true&sd=true
                */}
                <img src={ProfilePic} />
            </video>
            <div className="home_body">
                <div className="home_info">
                    <p className="job_title"><span>Full Stack Developer</span></p>
                    <p className="hey_text"><span>Hey! I Am</span></p>
                    <p className="name"><span>{userData.first_name} {userData.last_name}</span></p>
                    <p className="headline"><span>{userData.headline}</span></p>
                </div>
                <div className="home_photo">
                    <img src={userData.profile_file} />
                </div>
            </div>
        </div>
    )
}

export default Home