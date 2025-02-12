import { useEffect } from "react";
import Landing from "../../components/Home/Landing";
import Description from "../../components/Home/Description";
import Projects from "../../components/Home/ProductsDestacados/index";
import Body from "../../components/Home/Body/index";
import SectionContact from "../../components/Home/SectionContact";
import FooterIndex from "../../components/Footer/index"
import MarqueeCards from "../../components/Home/Products";

export default function Home() {
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
      <Landing />
      <Description />
      <MarqueeCards />
      {/* <Projects /> */}
      <Body />
      <SectionContact />
      <FooterIndex />
    </main>
  );
}
