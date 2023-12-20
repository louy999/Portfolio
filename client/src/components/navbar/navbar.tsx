// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Scroll from "react-scroll";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [Active, setActive] = useState("");

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= 10) {
      setActive("down");
    } else {
      setActive("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className={`navbar-con `}>
      <ul className={`${Active}`}>
        <li>
          <Link activeClass="active" spy={true} smooth={true} to="about">
            about
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy={true} smooth={true} to="skills">
            skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy={true} smooth={true} to="projects">
            projects
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy={true} smooth={true} to="contact">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
