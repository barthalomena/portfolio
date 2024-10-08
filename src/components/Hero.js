import HeroImg from '../assets/Online resume-bro.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
export default function Hero(){
    const config={
        desingnation:"I am a Developer"}
   return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='hero'>
       <div className='md:w-1/2 flex flex-col'>
    <h1 className='text-white text-6xl font-hero-font'>
        Hi, <br/> I am <span className='text-cool'> Barthalomena </span> <p className='text-2xl'>{config.desingnation}</p>
    </h1>
    
    <div className='flex py-10 text-green'>
        <a href='#' className='pr-5 hover:text-white'>
            <AiOutlineTwitter size={40}/>
        </a>
        <a href='#' className='pr-5 hover:text-white'>
            <AiOutlineFacebook size={40}/>
        </a>
        <a href='#' className='pr-5 hover:text-white'>
            <AiOutlineLinkedin size={40}/>
        </a>
        <a href='#' className='hover:text-white'>
            <AiOutlineGithub size={40}/>
        </a>
    </div>
</div>
<img className='md:w-1/3' src={HeroImg} alt='Hero' />

    </section>
}
