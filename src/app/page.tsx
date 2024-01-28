import Hero from "@/components/Main/Hero";
import AboutUs from "./aboutUs/page";
import Activity from "./activity/page";
import Main from "./main/page";
import Projects from "@/components/Main/Projects";

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Main /> */}
      <Projects />

      {/* <AboutUs />
      <Activity/> */}
    </>
  );
}
