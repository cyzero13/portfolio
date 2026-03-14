import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';

const ProjectSlider = () => {

    const projectlists = [
        {
            name: "Mojito",
            color: "black",
            imgSrc: "./images/mojito.png",
            bgSrc: "./images/mojito-bg.png",
            rotation: "md:rotate-[-8deg] rotate-0",
            link: "https://cyzero13.github.io/mojito/"
        },{
            name: "Earth",
            color: "black",
            imgSrc: "./images/earth.png",
            bgSrc: "./images/earth.png",
            rotation: "md:rotate-[8deg] rotate-0",
            link: "https://cyzero13.github.io/earth/"
        },

    ];
    
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });

    useGSAP(() => {

        if (!sliderRef.current) return;

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".project-section",
            start: "2% top",
            end: `+=${scrollAmount + 1500}px`,
            scrub: true,
            pin: true,
            },
        });

        tl.to(".project-section", {
            x: `-${scrollAmount + 1500}px`,
            ease: "power1.inOut",
        });
        }

        const titleTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".project-section",
            start: "top top",
            end: "bottom 80%",
            scrub: true,
        },
        });

        titleTl
        .to(".first-text-split", {
            xPercent: -30,
            ease: "power1.inOut",
        })
        .to(
            ".project-text-scroll",
            {
            xPercent: -22,
            ease: "power1.inOut",
            },
            "<"
        )
        .to(
            ".second-text-split",
            {
            xPercent: -10,
            ease: "power1.inOut",
            },
            "<"
        );
    });

    return (
        <div ref={sliderRef} className="lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0">
            <div className="h-full w-full flex md:flex-row flex-col items-center 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap">
                {projectlists.map((project) => (
                <a 
                    href={project.link}
                    target='_blank'
                    key={project.name}
                    className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${project.rotation}`}
                >
                    <img
                    src={project.bgSrc}
                    alt=""
                    className="absolute bottom-0 border rounded-4xl overflow-x-hidden"
                    />

                    <h1 className='absolute md:bottom-10 md:left-10 bottom-5 left-5 text-milk md:text-6xl text-3xl font-semibold uppercase tracking-tighter'>{project.name}</h1>
                </a>
                ))}
            </div>
        </div>
    )
}

export default ProjectSlider