import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Projects = () => {
    
    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-message", {
        type: "words",
        });
        const secMsgSplit = SplitText.create(".second-message", {
        type: "words",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "20% center",
                scrub: true,
            },
        });

        gsap.to(secMsgSplit.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
            trigger: ".second-message",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        });
    });


    return (
    <section className='message-content bg-red-brown text-milk min-h-dvh overflow-hidden flex justify-center items-center relative z-20'>
        <div className='container mx-auto flex justify-center items-center py-28 relative'>
            <div className='w-full h-full'>
                <div className='message-container 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-14'>
                    <h1 className='first-message 2xl:max-w-4xl md:max-w-2xl max-w-xs text-center  text-[#faeade10]'>Built with my passion in</h1>
                    <div className='rotate-3 2xl:translate-y-5 -translate-y-5 absolute z-10 border-[.5vw] border-red-brown'>
                        <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                            <h2 className="text-red-brown">PROJECTS</h2>
                        </div>
                    </div>
                    <h1 className='second-message 2xl:max-w-7xl md:max-w-4xl max-w-xs text-center text-[#faeade10]'>Creating modern web development</h1>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects