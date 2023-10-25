import $ from "jquery";

const Main = () => {
    $(function () {
        var $bodyHeight = $("#profile_body").height();
        var $screenHeight = $(window).height();
        if($screenHeight > $bodyHeight){
            document.getElementById("profile_body").style.paddingTop = ($screenHeight - $bodyHeight)/4 + "px";
        }
    });

    return <></>;
};
export default Main;
