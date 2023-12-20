import Typed from "react-typed";
// import img1 from "../../img/imgProfile.jpg";
const Home = () => {
  return (
    <section id="home" className="container home">
      <div className="img-con">
        <img
          src={require("../../img/imgProfile.jpg")}
          className="animate__animated animate__backInLeft "
          alt=""
        />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9B8C6B"
            fill-opacity="1"
            d="M0,256L24,240C48,224,96,192,144,186.7C192,181,240,203,288,224C336,245,384,267,432,250.7C480,235,528,181,576,160C624,139,672,149,720,138.7C768,128,816,96,864,85.3C912,75,960,85,1008,106.7C1056,128,1104,160,1152,144C1200,128,1248,64,1296,53.3C1344,43,1392,85,1416,106.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="content">
        <Typed
          className="type-name"
          strings={["Hi there, I'm Louy Hany"]}
          typeSpeed={40}
        />
        <div>
          <Typed
            className="dev"
            strings={[
              "Front-End Developer ",
              "Back-End Developer",
              "FullStack Developer",
              "PERN Stack Developer",
            ]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
