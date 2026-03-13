import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create(".hero-title", {
        type: "chars",
        });

        const tl = gsap.timeline({
            delay: 1,
        });

        tl.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
        })
        .to(
            ".hero-text-scroll",
            {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
            },
            "-=0.5"
        )
        .from(
            titleSplit.chars,
            {
                yPercent: 200,
                stagger: 0.02,
                ease: "power2.out",
            },
            "-=0.5"
        );

        const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-container",
            start: "1% top",
            end: "bottom top",
            scrub: true,
        },
        });
        heroTl.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            yPercent: 30,
            ease: "power1.inOut",
        });
    });
    
  return (
    <section className="bg-main-bg ">
        <div className="hero-container relative bg-milk w-screen h-dvh overflow-hidden">            
            <div className="hero-content opacity-0 relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-24">
                <div className="overflow-hidden">
                    <h1 className="hero-title text-dark-brown 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0 mb-5">FULL STACK WEB DEVELOPER</h1>
                </div>
                <div
                style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                }}

                className="hero-text-scroll -rotate-3 mb-8 border-[.5vw] border-milk"
                >

                    <div className="hero-subtitle bg-mid-brown ">
                        <h1 className="uppercase 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold text-[#fce1cd] leading-[9vw] tracking-[-.35vw] 2xl:px-[1.2vw] px-3 2xl:pb-[1vw] pb-5 2xl:py-0 py-3">Deony Diras</h1>
                    </div>
                </div>

                <h2 className="font-paragraph text-dark-brown text-center md:max-w-lg max-w-sm px-5 md:text-lg leading-[115%] mt-3">
                    Specializes in building modern, dynamic, and high-performance web applications. I enjoy turning ideas into interactive digital experiences using technologies like JavaScript, ThreeJs, and modern frontend frameworks.
                </h2>

                <div className="hero-button md:mt-16 animate-bounce mt-10 text-dark-brown bg-light-brown uppercase font-bold text-lg rounded-full md:p-5 p-3 md:px-16 px-10">
                    <p>Scroll To Explore</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero