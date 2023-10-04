import $ from "jquery";

const Main = () => {
  // change navbar color on scroll
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#header");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  return <></>;
};

export default Main;
