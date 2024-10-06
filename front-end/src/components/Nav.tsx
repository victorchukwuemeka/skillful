import logo from '../assets/images/skillful.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Nav = () => {
  return (
    <nav className='flex flex-row items-center justify-between w-full px-[3.8vw]'>
        <div className='flex flex-row items-center gap-4'>
            <img src={logo} alt='Skllful' />
            <h2 className='text-white text-[22px] tracking-wide font-extrabold'>SKILLFUL</h2>
        </div>
        <div className='flex flex-row items-center gap-12 text-white'>
            <span className='cursor-pointer text-base'>Home</span>
            <span className='cursor-pointer text-base'>About</span>
            <span className='cursor-pointer text-base'>Pricing</span>
            <span className='cursor-pointer text-base'>FAQ</span>

        </div>
        <div className='bg-primary-green text-primary-black px-4 h-[48px] flex items-center justify-center cursor-pointer cb'>
        <ConnectButton chainStatus='none' showBalance={false}/>

        </div>

    </nav>
  )
}

export default Nav