
import "./mywork.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProjectContainer from "./projectContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProjectType } from "../../types";

const MyWork = () => {
  const projectsList = useSelector(
    (state: RootState) => state.portfolio.projectList
  );
  const options = {
    margin: 30,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav: true,
    dots: true,
    loop: true,
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
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };
  return (
    <div id="mywork">
      <div className="section_heder">
        <h2>Check Out My Reacet Projects</h2>
      </div>
      <div className="section_title">
        My Works
      </div>

      <div className="mywork_body">
        <OwlCarousel {...options}>
          {projectsList?.map((details: ProjectType) => (
            <ProjectContainer details={details} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  )
}

export default MyWork;