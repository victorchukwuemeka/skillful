import '../App.css'
import Nav from './Nav'
import underline from '../assets/images/underline.svg'
import arrow1 from '../assets/images/Arrow 2.svg'
import arrow2 from '../assets/images/Arrow 3.svg'
import Partners from './Partners'

const Hero = () => {
  return (
    <div className="w-full hero pt-[3.8vh]  concentric-circles-bg">
      <Nav />  
      <div className='mt-[13.76vh] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gerbil text-white text-[64px]'>
            <h1><span className='relative'>
                Prove
                <img src={underline} alt='underline' className='absolute top-[70px]' />
                </span> Your 
                <span className='ml-4 px-3  round bg-[#e635ab]'>Skills,</span>
                </h1>
            <h1>Own Your</h1>
            <h1><span className='bg-[#4d7557] px-8 round'>Achievements</span></h1>
        </div>
        <p className='pt-[31px] text-base satoshi tracking-wide text-white text-center font-extralight'>Skillful leverages blockchain technology to provide a transparent, <br /> decentralized way to validate your expertise.</p>
        <div className='flex flex-row items-center justify-between w-[30%] bg-primary-black h-[6vh] round-2 mt-[3.5vw] combobox satoshi pl-4 relative'>
            <input className='text-white satoshi bg-transparent' placeholder='Enter Your E-mail'/>
            <button className='bg-primary-green text-primary-black font-semibold round-2 h-full px-4'>Request Demo</button>
            <img src={arrow1} className='absolute right-[-70px] top-[-20px]' />
            <img src={arrow2} className='absolute right-[-70px] top-[-10px]' />

        </div>
        <p className='mt-6 satoshi text-center text-white font-thin'>Includes 7-days free trial</p>
      </div>
      <Partners />

    </div>
  )
}

export default Hero