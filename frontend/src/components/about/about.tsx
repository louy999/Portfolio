import React, { useEffect, useState } from "react";

import Svg1 from "../../svgs";
const About = () => {
  const [Active, setActive] = useState("");

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= 260) {
      setActive("animate__backInLeft ");
    } else {
      setActive("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <section id="about" className="about">
      <h1>About Me</h1>
      <div className="container">
        <img
          src={require("../../img/wallpaperflare.com_wallpaper.jpg")}
          className={`animate__animated ${Active}
          `}
          alt=""
        />
        <p>
          i am a full stack developer with a passion for building beautiful and
          user-friendly websites. i have a strong understanding of both
          front-end and back-end development, and iam excited to put my skills
          to use in a professional setting. i am a quick learner and a team
          player, and i am confident that i can be a valuable asset to any web
          development team.
        </p>
      </div>
      <Svg1 />
    </section>
  );
};

export default About;
