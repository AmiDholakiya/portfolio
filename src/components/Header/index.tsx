import { useEffect, useRef } from "react";
import "./header.css";
import Main from "./header";

const Header =  () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }, []);

  return (
    <>
      <Main />
      <header id="header" className="fixed-top">
        <div className="header_body">
        <ul>
                <li
                  className="active"
                  data-aos="fade-down"
                  data-aos-duration="300"
                  id="menu_home"
                  // onClick={(event: React.MouseEvent<HTMLElement>) => scrollToSection(event.currentTarget.id)}
                >
                  <a href="#home"> Home</a>
                </li>
                <li id="menu_about" data-aos="fade-down" data-aos-duration="600">
                  <a href="#about">About</a>
                </li>
                <li id="menu_skills" data-aos="fade-down" data-aos-duration="900">
                  <a href="#skills">Skills</a>
                </li>
                <li id="menu_mywork" data-aos="fade-down" data-aos-duration="1200">
                  <a href="#mywork">My Work</a>
                </li>

                <li id="menu_contact" data-aos="fade-down" data-aos-duration="1500">
                  <a href="#contact">Contact</a>
                </li>
                </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
