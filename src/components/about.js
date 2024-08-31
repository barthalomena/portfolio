import AboutImg from '../assets/Organizing projects-amico.png'
export default function About(){

return<section className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2 py-5'>
        <img src={AboutImg}></img>
    </div>
    <div className='md:w-1/2 flex-col flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4  border-borderColor mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hello! I'm Barthalomena</p>
        <p className='pb-5'>Welcome to my corner of the digital world! </p>
        <p className='pb-5'>I'm a dedicated software tester with a passion for ensuring quality and excellence in every product I touch. With 2 years of experience in the industry, I specialize in identifying and resolving issues to deliver seamless, user-friendly experiences.</p>
    </div>
    </div>
</section>
}