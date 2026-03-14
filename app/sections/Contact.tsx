import React from 'react'

const Contact = () => {
  return (
    <section className='2xl:min-h-dvh overflow-hidden relative bg-black'>
        <div className="container mx-auto pt-20">
            <div className="flex flex-col justify-center items-center text-milk">
                <h1 className='"pb-5 md:px-14 px-3 md:pt-0 pt-3 bg-[#7F3B2D] 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] text-milk'>Contact Me</h1>
                <div className='2xl:text-[2.5rem] md:text-2xl text-xl font-bold uppercase leading-[4vw] text-milk flex flex-col gap-2'>
                    <p >Mobile: 09513003072</p>
                    <p >Email: deony.diras1998@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact