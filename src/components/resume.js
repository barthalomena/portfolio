import ResumeImg from '../assets/Resume folder-amico.png'
export default function Resume(){

return<section className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2 py-5 flex justify-center'>
        <img className='w-[300px]' src={ResumeImg}/>
    </div>
    <div className='md:w-1/2 flex-col flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4  border-borderColor mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>You can review my resume  <a className='btn hover' href='#'> Download </a> </p>
         </div>
    </div>
</section>
}