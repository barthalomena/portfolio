import ResumeImg from '../assets/Resume-pana-2.png'
export default function Resume(){
const config={
    link:"https://pdfobject.com/pdf/sample.pdf"
}
return<section className='flex flex-col md:flex-row bg-secondary py-20 px-10' id='resume'>
    <div className='md:w-1/2 py-5 flex justify-center'>
        <img className='w-[300px]' src={ResumeImg}/>
    </div>
    <div className='md:w-1/2 flex-col flex justify-center'>
    <div className='flex flex-col justify-center text-black'>
        <h1 className='text-4xl  border-b-4  border-borderColor mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>You can review my resume  <a className='btn' href={config.link}> Download </a> </p>
         </div>
    </div>
</section>
}