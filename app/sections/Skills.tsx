import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

    const Skills = () => {

        const skillLists = [
            {
                name: 'javascript',
                svgPath: './svgs/javascript.svg'
            },
            {
                name: 'git',
                svgPath: './svgs/git.svg'
            },      
            {
                name: 'react',
                svgPath: './svgs/react.svg'
            },
            {
                name: 'threejs',
                svgPath: './svgs/threejs.svg'
            },
            {
                name: 'gsap',
                svgPath: './svgs/gsap.svg'
            },
            {
                name: 'mysql',
                svgPath: './svgs/mysql.svg'
            },
            {
                name: 'laravel',
                svgPath: './svgs/laravel.svg'
            },
            {
                name: 'livewire',
                svgPath: './svgs/livewire.svg'
            },
            {
                name: 'alpinejs',
                svgPath: './svgs/alpinejs.svg'
            },
            {
                name: 'nextjs',
                svgPath: './svgs/nextjs.svg'
            },
            {
                name: 'nodejs',
                svgPath: './svgs/nodejs.svg'
            },
            {
                name: 'tailwindcss',
                svgPath: './svgs/tailwindcss.svg'
            },
            {
                name: 'unity',
                svgPath: './svgs/unity.svg'
            },

        ];


    useGSAP(() => {
        const titleSplit = SplitText.create(".skill-title", {
        type: "chars",
        });
        const paragraphSplit = SplitText.create(".skill-section p", {
        type: "words, lines",
        linesClass: "paragraph-line",
        });

        const contentTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skill-section",
            start: "top center",
        },
        });
        contentTl
        .from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: "power2.out",
        })
        .from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
        });

        const titleTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skill-section",
            start: "top 80%",
        },
        });

        titleTl.to(".skill-text-scroll", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            ease: "power1.inOut",
        });
    });
  return (
    <section className="skill-section min-h-dvh 2xl:h-[120dvh] overflow-hidden relative">
      <img
        src="./images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />
    <span className='absolute flex justify-center items-center top-1/2 left-1/2 -translate-1/2 rounded-full overflow-hidden max-w-100 aspect-square'>
        <img src="./images/program.gif" className='object-center min-w-135 aspect-square'/>
    </span>
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="skill-title 2xl:max-w-4xl xl:max-w-2xl md:py-0 py-3 md:pb-5 pb-0 lg:pb-0 md:text-center text-[#513022]">Check out</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="skill-text-scroll place-self-start -rotate-3 border-[.5vw] border-milk-yellow text-nowrap opacity-0 md:-mt-32 -mt-24"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow">My Skills</h2>
              </div>
            </div>
          </div>
        </div>
  
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Great developers are not defined by what they know, but by how they solve problems.
            </p>
          </div>
        </div>

        <div className='absolute md:bottom-16 bottom-5 w-[90vw] md:px-0 px-5 left-1/2 -translate-x-1/2'>
            <div className='bg-[#fdebd2] rounded-4xl border-[.5vw] border-[#e8ddca] mx-auto max-w-7xl md:py-8 py-5 md:px-4 px-5 flex flex-wrap gap-2'>
                {
                    skillLists.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center lg:flex-1 gap-1 px-3'>
                            <img src={skill.svgPath} alt="" className='max-w-10 min-w-10 aspect-square'/>
                            <p>{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>

    </section>
  )
}

export default Skills