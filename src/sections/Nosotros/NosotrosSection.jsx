import { useEffect } from "react";

import Intro from "../../components/About/Intro";
import Description from "../../components/About/Description";
import Historia from "../../components/About/Historia";
import SectionContact from "../../components/Home/SectionContact";
import FooterIndex from "../../components/Footer";
import SectionMisionVision from "../../components/About/SectionMisionVision";

export default function NosotrosSection() {
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
      <SectionMisionVision />
      <SectionContact />
      <FooterIndex />
    </main>
  );
}
