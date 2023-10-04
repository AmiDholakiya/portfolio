import "./home.css"
import VideoBackground from "../../assets/Homebackground.mp4"
export default ()=>{
    return (
        <div id="home">
            <video autoPlay loop muted className="home_background"> 
                <source src={VideoBackground} type="video/mp4" />
                <img src="../../../public/sample_background.webp" />
                Your browser does not support the video tag.
            </video>
            <div className="home_body">
                Home
            </div>
        </div>
    )
}