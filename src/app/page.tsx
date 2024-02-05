import Hero from "@/components/Main/Hero";
// import AboutUs from "./about/page";
import Activity from "./activity/page";
import Main from "./main/page";
import Projects from "@/components/Main/projects/Projects";
import Reviews from "@/components/Main/reviews/Reviews";

export default function Home() {
  return (
    <>
      {/* <Main /> */}
      <Hero />

      {/* <Main /> */}
      <Projects />
      <Reviews />

      {/* <AboutUs />
      <Activity/> */}
    </>
  );
}
