import { assets } from '../assets/assets'

const WorkItem = ({
  title,
  description,
  type,
  img

}: {
  title: string
  description: string
  type: string
  img: string
}) => {

  return (
    <div onClick={() => window.open('https://project-bank-chi.vercel.app/', '_blank')} className='mt-[25px] md:mt-[50px] flex flex-wrap justify-center md:justify-start items-center md:items-center gap-[32px] 2xl:hover:bg-white/10 cursor-pointer transition-all rounded-2xl duration-150'>
      <div className=''>
        <img src={img} alt="Image" />
      </div>
      <div className='max-w-xl'>
        <h1 className='mb-[16px] font-semibold text-[16px]'>{title}</h1>
        <p className='mb-[24px] font-light text-[20px] md:text-[32px]'>{description}</p>
        <p className='mb-[32px] font-light text-[18px]'>{type}</p>
        <button className='flex items-center border border-gray-300 px-[16px] py-[8px] rounded-full font-[300] text-[16px]'>View work<img className='ml-2' width={20} src={assets.arrowRight} alt="arrowRight" /></button>
      </div>
    </div>
  )
}

const WorkContent = () => {
  return (
    <>
      <WorkItem
        title='Bank Project Website'
        description='A modern and secure interface for online banking with responsive layout, smooth animation and an emphasis on user experience.'
        type='Frontend website development'
        img={assets.bank} />
    </>
  )
}

export default WorkContent
