import React from 'react'
import guy from '../assets/images/guy.png'

const About = () => {
  return (
    <div className='flex flex-col items-center bg-[#06130e] pt-16 h-screen overflow-hidden pl-[3.8vw]'>
        <button className='glow text-white satoshi'>About Skillful</button>
        <h1 className='mt-8 text-2xl font-semibold text-white satoshi tracking-wider'>What is Skillful About?</h1>
        <div className='flex flex-row w-full mt-10 relative'>
            <div className='w-1/2 flex flex-col gap-8 text-[24px] mt-8 text-white satoshi'>
                <p>In today's competitive job market, proving your skills is more important than ever. </p>

                <p>Skillful provides a decentralized platform for developers, freelancers, and professionals to validate their expertise in a transparent, tamper-proof way. Powered by blockchain technology</p>

                <p>Skillful ensures that your achievements are authentic, secure, and fully owned by you. Whether you're looking to advance your career, land new opportunities, or gain credibility, Skillful empowers you to showcase your skills like never before.</p>
            </div>
            <img src={guy} alt='Laptop' className='absolute right-0 h-[600px]' />

        </div>
    </div>
  )
}

export default About