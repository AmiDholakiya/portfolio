import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./myskills.css"
import SkillContainer from "./SkillContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

const MySkill =  ()=>{
    const skillData = useSelector(
      (state: RootState) => state.portfolio.skillList
    );
    const [items, setItems] = useState([]);

    useEffect(()=>{
      const skillList:any = [];
      if(skillData.length > 0){
        skillData.map((data)=>{
          skillList.push(<SkillContainer id={data._id} data={data} />)
        })
        setItems(skillList)
      }
    },[skillData])
    const responsive = {
      0: {
        items: 1,
      },
      380: {
        items: 1,
      },
      512: {
        items: 2,
      },
      665: {
        items: 3,
      },
      767: {
        items: 3,
      },
      870: {
        items: 4,
      },
      1024: {
        items: 6,
      },
      1265: {
        items: 6,
      }
    };
    return (
        <div id="skills" className="body_page">
             <div className="section_heder">
                 <h2>My Skills Progress so far</h2>
             </div>
             <div className="section_title">
                 My Skills
             </div>
             <div>
                  <AliceCarousel
                      infinite
                      autoPlay
                      disableButtonsControls
                      disableDotsControls
                      mouseTracking
                      autoPlayInterval={1000}
                      items={items}
                      responsive={responsive}
                    /> 
             </div>
                
                
        </div>
    )
}

export default MySkill