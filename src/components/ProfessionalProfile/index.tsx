import { MySkills, MyWork } from "..";
import "./professionalProfile.css";
import Main from "./professionalProfile";
const ProfessionalProfile = () => {

    return <>
        <Main />
        <div id="professionalProfile" className="body_page">
            <div id="profile_body">
                <MySkills />
                <MyWork />
            </div>
        </div>
    </>

}

export default ProfessionalProfile;