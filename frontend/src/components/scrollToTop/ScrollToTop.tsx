import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [hidd, setHidd] = useState("hidd");
  const goSmoothAndWhere = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= 650) {
      setHidd("act");
    } else {
      setHidd("hidd");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      <div>hi</div>
      <FontAwesomeIcon
        className={`scroll-to-top ${hidd} animate__shakeY animate__animated animate__slower animate__infinite`}
        onClick={goSmoothAndWhere}
        icon={faUpLong}
      />
    </>
  );
};

export default ScrollToTop;
