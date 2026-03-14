'use client'

import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
import Projects from "./sections/Projects";
import ProjectLists from "./sections/ProjectLists";
import { useGSAP } from "@gsap/react";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    });
  });

  return (
    <div>
      <Navigation />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Projects />
          <ProjectLists />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
}
