import image from '../assets/images/image.png'

const Validate = () => {
  return (
    <div className='bg-[#06130e] py-8 flex flex-col items-center justify-center'>
        <button className='glow text-white satoshi'>Skill Validation?</button>
        <h1 className='mt-8 text-xl text-center md:text-2xl font-semibold text-white satoshi tracking-wider'>Skills Accepted for Validation <br/>Currently</h1>

        <div className='mt-8 flex items-center justify-center w-full'>
                    <div className='griddy clash'>
            <div className='grid-card flex flex-col overflow-hidden'>
                <img src={image} alt='image' />
                <div className='w-full p-4 bg-[#3a3a3a]'>
                    <h1 className='font-semibold text-3xl text-white tracking-wider'>Frontend <br/>  Developers</h1>
                    <button className='bg-transparent validate__btn text-primary-green text-2xl w-full mt-4 h-[40px]'>Validate Now</button>
                </div>
            </div>
            <div className='grid-card flex flex-col overflow-hidden'>
                <img src={image} alt='image' />
                <div className='w-full p-4 bg-[#3a3a3a]'>
                    <h1 className='font-semibold text-3xl text-white tracking-wider'>Frontend <br/>  Developers</h1>
                    <button className='bg-transparent validate__btn text-primary-green text-2xl w-full mt-4 h-[40px]'>Validate Now</button>
                </div>
            </div>
            <div className='grid-card flex flex-col overflow-hidden'>
                <img src={image} alt='image' />
                <div className='w-full p-4 bg-[#3a3a3a]'>
                    <h1 className='font-semibold text-3xl text-white tracking-wider'>Backend <br/>  Developers</h1>
                    <button className='bg-transparent validate__btn text-primary-green text-2xl w-full mt-4 h-[40px]'>Validate Now</button>
                </div>
            </div>
            <div className='grid-card flex flex-col overflow-hidden'>
                <img src={image} alt='image' />
                <div className='w-full p-4 bg-[#3a3a3a]'>
                    <h1 className='font-semibold text-3xl text-white tracking-wider'>Fullstack <br/>  Developers</h1>
                    <button className='bg-transparent validate__btn text-primary-green text-2xl w-full mt-4 h-[40px]'>Validate Now</button>
                </div>
            </div>
            <div className='grid-card flex flex-col overflow-hidden'>
                <img src={image} alt='image' />
                <div className='w-full p-4 bg-[#3a3a3a]'>
                    <h1 className='font-semibold text-3xl text-white tracking-wider'>Product <br/>  Designer</h1>
                    <button className='bg-transparent validate__btn text-primary-green text-2xl w-full mt-4 h-[40px]'>Validate Now</button>
                </div>
            </div>
            <div className='grid-card flex flex-col overflow-hidden'>
                <img src={image} alt='image' />
                <div className='w-full p-4 bg-[#3a3a3a]'>
                    <h1 className='font-semibold text-3xl text-white tracking-wider'>Frontend <br/>  Developers</h1>
                    <button className='bg-transparent validate__btn text-primary-green text-2xl w-full mt-4 h-[40px]'>Validate Now</button>
                </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Validate