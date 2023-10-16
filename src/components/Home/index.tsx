import "./home.css"
// import ProfilePic from "../../assets/profile.jpg"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Typewriter from "typewriter-effect";

const Home = () => {
    const userData = useSelector(
        (state: RootState) => state.portfolio.data
    );
    return (
        <div id="home">
            <video autoPlay loop muted className="home_background">
                <source src={userData.background_file} type="video/mp4" />
                {/* 
                    <source src="https://imgur.com/2cSaKIt.mp4" type="video/mp4" /> 
                    https://docs.google.com/document/d/1ZuDUIaXUCRBF5yMaY7w-UZT4A2lPtJq9/edit?usp=sharing&ouid=107224024096550070591&rtpof=true&sd=true
                */}
                {/* <img src={ProfilePic}  alt="Background"/> */}
            </video>
            <div className="home_body">
                <div className="home_info">
                    <p className="job_title" data-aos="fade-up-right"
                      data-aos-duration="1500"><span>
                        <Typewriter
                            options={{
                                strings: userData.title,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </span></p>
                    <p className="hey_text" data-aos="fade-up-right"
                      data-aos-duration="2000"><span>Hey! I Am</span></p>
                    <p className="name" data-aos="fade-up-right"
                      data-aos-duration="2500"><span>{userData.first_name} {userData.last_name}</span></p>
                    <p className="headline" data-aos="fade-up-right"
                      data-aos-duration="3000"><span>{userData.headline}</span></p>
                </div>
                <div className="right_div">
                    <div className="home_photo" data-aos="fade-up-left"
                        data-aos-duration="3000">
                        <img src={userData.profile_file} alt="Profile Pic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home