import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Experience = () => {

    useGSAP(() => {
        const revealTl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
            trigger: ".experience-section",
            start: "top 60%",
            end: "top top",
            scrub: 1.5,
        },
        });

        revealTl
        .to(".experience-section .first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })
        // .to(".benefit-section .second-title", {
        //     duration: 1,
        //     opacity: 1,
        //     clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        //     ease: "circ.out",
        // })
        // .to(".benefit-section .third-title", {
        //     duration: 1,
        //     opacity: 1,
        //     clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        //     ease: "circ.out",
        // })
        // .to(".benefit-section .fourth-title", {
        //     duration: 1,
        //     opacity: 1,
        //     clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        //     ease: "circ.out",
        // });
    });
  return (
    <section className="experience-section min-h-dvh bg-black overflow-hidden relative">
      <div className="container mx-auto pt-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className='2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] text-milk'>WORK EXPERIENCE</h1>

          <div className="mt-20 flex flex-col items-center">
            <ExperienceCard
                title={"IT Administrator"}
                years={2}
                company={"Imperial Homes"}
                skills={["Hardware and Software Troubleshootiing", "Network"]}
                color={"#faeade"}
                bg={"#c88e64"}
                bgSkill={'#faeade'}
                skillColor={'#222123'}
                className={"first-title rotate-3 relative z-10"}
                borderColor={"#222123"}
            />

            <ExperienceCard
                title={"R & D Engineer"}
                years={2}
                company={"Imperial Homes"}
                skills={["ReactJS", "NextJS", "Unity", "JAVASCRIPT", "BLENDER", "TAILWINDCSS", "NODEJS"]}
                color={"#222123"}
                bg={"#faeade"}
                bgSkill={'white'}
                skillColor={'#222123'}
                className={"first-title -rotate-3 relative z-10"}
                borderColor={"#222123"}
            />
      
            <ExperienceCard
                title={"3D Full Stack Web Developer"}
                years={2}
                company={"Imperial Homes"}
                skills={["ThreeJS", "Laravel", "Javascript", "Livewire", "TAILWINDCSS", "Alpine", "Git", "AWS", "BLENDER"]}
                color={"#faeade"}
                bg={"#7F3B2D"}
                bgSkill={'#faeade'}
                skillColor={'white'}
                className={"first-title rotate-3 relative z-10"}
                borderColor={"#222123"}
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience