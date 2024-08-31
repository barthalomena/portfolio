export default function Contact(){
const config={
    email:'barthalomena@gmail.com',
    phone:'9876543210'
}
return<section className='flex flex-col bg-primary px-5 py-32 text-white'id='contact'>
    
    <div className='flex-col flex items-center'>
        <h1 className='text-4xl  border-secondary border-b-4  border-borderColor mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='pb-5'> If you want to discuss more in detail,Please contact me   </p>
        <p className='py-2'><span className='font-bold'>Email: </span>{config.email}</p>
        <p className='py-2'><span className='font-bold'>Phone: </span>{config.phone}</p>

    </div>
</section>
}