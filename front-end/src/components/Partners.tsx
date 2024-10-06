import solana from '../assets/images/solana.svg'
import st from '../assets/images/superteam.svg'
import colosseum from '../assets/images/colosseum.svg'

const Partners = () => {
  return (
    <div className='mt-16 text-white satoshi flex flex-col items-center justify-center w-full relative h-[30vh]'>
        <div className='ol' />

        <h1 className=' text-[32px]'>Our Amazing Partners</h1>
        <div className='w-full partners px-[4vw]'>
            <div className=' px-10 flex items-center justify-between mt-6 mb-10'>
            <div className='flex flex-row items-center gap-3'>
                <img src={st} alt='Superteam' className='h' />
                <h2 className='text-[24px] font-semibold'>SuperteamNG</h2>
            </div>
            <div className='flex flex-row items-center gap-3'>
            <img src={solana} alt='Superteam' className='h-[64px]' />
            <h2 className='text-[24px] font-semibold'>Solana</h2>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <img src={colosseum} alt='Colosseum' className='h-[64px]' />
                <h2 className='text-[24px] font-semibold'>Colosseum</h2>
            </div>
            <div className='flex flex-row items-center gap-6'>
                <h2 className='text-[24px] font-semibold'>Google</h2>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Partners