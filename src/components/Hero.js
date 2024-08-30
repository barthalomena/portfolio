import HeroImg from '../assets/Blowing a dandelion-amico.png'
export default function Hero(){
    return <section className='flex px-5 py-32 bg-secondary justify-center'>
        <h1 className='w-1/2 text-white text-4xl '>Hi, <br/> I am Barthalomena 
        <p className='text-2xl'>I am a Tester</p>
         </h1>
         <img className='w-1/3' src={HeroImg}/>
    </section>
}
