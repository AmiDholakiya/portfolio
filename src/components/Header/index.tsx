import { useEffect, useRef } from "react";
import "./header.css";
import Main from "./header";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isLoading = useSelector(
    (state: RootState) => state.portfolio.isLoading
  );
  const error = useSelector(
    (state: RootState) => state.portfolio.error
  );

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }, []);

  function closeSideMenu() {
    var x: any = document.getElementById("side-menu");
    x.checked = false;
  }

  return (
    <>
      <Main />
      <header id="header" className={`fixed-top ${isLoading || error ? "scrolled" : ""}`}>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label id="hamb" className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        <nav className="nav">
          <ul className="menu" id="menu">
            <li
              className="active"
              data-aos="fade-down"
              data-aos-duration="300"
              id="menu_home"
            >
              <a onClick={() => { closeSideMenu() }} href="#home" > Home</a>
            </li>
            <li id="menu_about" data-aos="fade-down" data-aos-duration="600">
              <a onClick={() => { closeSideMenu() }} href="#about">About</a>
            </li>
            <li id="menu_professionalProfile" data-aos="fade-down" data-aos-duration="900">
              <a onClick={() => { closeSideMenu() }} href="#professionalProfile">ProfessionalProfile</a>
            </li>

            <li id="menu_contact" data-aos="fade-down" data-aos-duration="1500">
              <a onClick={() => { closeSideMenu() }} href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
