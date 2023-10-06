
import "./mywork.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProjectContainer from "./projectContainer";
const MyWork =  ()=>{
    const projectsDetails = [0,1,2,3,4,5,6,7,8,9].map((i:any)=>{
        return {
            id:i,
            about_avatar:"",
            language_used:["Python", "React", "FastAPI"],
            Project_title:"Sample Project Test",
            Project_info:"An e-pharmaceutical management system used to manage inventory ,issue stocks, and dispense medication.",
            demo_link:"",
            project_link:"https://github.com/tech-jamara/PharmacyManagementSystem",
        }
    })
    const options = {
        margin: 30,
        autoplayHoverPause:true,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: [],
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          310: {
            items: 1,
          },
          500: {
            items: 1,
          },
          600: {
            items: 1,
          },
          740: {
            items: 2,
          },
          1000: {
            items: 3,
          },
          1300: {
            items: 3.5,
          },
          1440: {
            items: 4,
          },
        },
      };
    return (
        <div id="mywork" className="body_page">
             <div className="section_title">
                 My Works
             </div>
             <div>
             <OwlCarousel {...options}>
            {projectsDetails?.map((details:any) => (
                <ProjectContainer details={details}/>
            ))}
          </OwlCarousel>
             </div>
        </div>
    )
}

export default MyWork;