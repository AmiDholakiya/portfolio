import "./errorpage.css"
import ErrorImg from "../../assets/internal_server_error.svg"
import TypewriterComponent from "typewriter-effect"

const ErrorPage = () => {
    return <div id="errorpage" className="body_page">
                <img src={ErrorImg} alt="Error Image" style={{height:"100%",width:"100%"}}/>
                <div className="error_messages">
                    <div className="error_header"><h2>Something is going on in the Universe ....</h2></div>
                    <div className="error_message"><h2>Please, don't abandon ship, sending for help.</h2></div>
                </div>
                
            </div>
}

export default ErrorPage;