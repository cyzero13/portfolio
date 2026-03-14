import React from 'react'

type Props = {
  title: string
  company: string
  skills: string[]
  years: number
  color?: string
  bg?: string
  bgSkill?: string 
  skillColor: string
  className?: string
  borderColor?: string
}
const ExperienceCard = ({ title, years, company, skills, color, bg, bgSkill, skillColor, className, borderColor}: Props) => {
  return (
    <div className="2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw]">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{
            backgroundColor: bg,
          }}
        >
        <p style={{
              color: skillColor,
            }} 
            className={`2xl:text-[4.5rem] md:text-4xl text-2xl -tracking-wide`}>{years} years at {company} as</p>

          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>

          <div className='2xl:text-[1.5rem] md:text-xl text-lg -tracking-wide flex gap-1'>
            {
                skills.map((skill, key) =>(
                    <span key={key}      
                    style={{
                        backgroundColor: bgSkill,
                    }}
                    className={`rounded-full ${bgSkill} px-4`} >{skill}</span>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard