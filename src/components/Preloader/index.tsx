import "./preloader.css"
import {Blocks} from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Preloader = () => {
        return (
            <div id="preloader" className="body_page">
                <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                />
            </div>
        )
}

export default Preloader;