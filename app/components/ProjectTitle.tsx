import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

const ProjectTitle = () => {
    useGSAP(() => {
        const firstTextSplit = SplitText.create(".first-text-split h1", {
        type: "chars",
        });
        const secondTextSplit = SplitText.create(".second-text-split h1", {
        type: "chars",
        });

        gsap.from(firstTextSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 30%",
        },
        });

        gsap.to(".project-text-scroll", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 10%",
        },
        });

        gsap.from(secondTextSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 1%",
        },
        });
    });
  return (
    <div className="2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1 className='md:text-center text-dark-brown'>Here are my</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="project-text-scroll -rotate-3 md:translate-y-5 border-[.5vw] border-milk absolute z-10"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">Projects</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1 className='md:text-cente'>Keep Scrolling</h1>
      </div>
    </div>
  )
}

export default ProjectTitle