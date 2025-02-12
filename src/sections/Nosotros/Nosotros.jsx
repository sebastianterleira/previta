import { useEffect } from "react";

import Intro from "../../components/About/Intro";
import Description from "../../components/About/Description";
import Historia from "../../components/About/Historia";
import SectionContact from "../../components/Home/SectionContact";
import FooterIndex from "../../components/Footer";
import Mision from "../../components/About/Mision";

export default function Nosotros() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <SlidingImages />
       */}
      <Intro />
      <Description />
      <Historia />
      <Mision />
      <SectionContact />
      <FooterIndex />
    </main>
  );
}
