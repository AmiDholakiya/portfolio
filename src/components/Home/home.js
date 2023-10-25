import $ from "jquery";
import { useEffect } from "react";

const Main = () => {
    const updateWindowDimensions = () => {
        var homeHeight = $("#home").height();
        var homeWidth = $("#home").width();
        if(homeWidth > 1050){
            var newValue = (homeHeight <= homeWidth) ? homeHeight /2 : homeWidth / 4;
            $("#home_photo").height(newValue);
            $("#home_photo").width(newValue);
        }
        else{
            $("#home_photo").height(homeWidth / 4);
            $("#home_photo").width(homeWidth / 4);
        }
        
      };

    useEffect(()=>{
        updateWindowDimensions()
        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions) 
    },[])

    return <></>;
};
export default Main;
