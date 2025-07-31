import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center py-10'>
        <h1 className='mb-[4px] text-[45px] md:text-[56px] font-medium'><span className='text-gray-500 font-light'>Get</span> in Touch.</h1>
        <p className='mb-[60px] text-[18px] font-light text-white'>So that we can talk more about...</p>
        <div className='flex flex-row gap-[40px] mb-[30px] items-center'>
          <a target="_blank" href="https://t.me/shumelman666"><img width={40} src={assets.telegram} alt="telegram" /></a>
          <a target="_blank" href="https://vk.com/numbthepain666"><img width={40} src={assets.vk} alt="vk" /></a>
          <a target="_blank" href="https://github.com/halerazxc"><img width={40} src={assets.github} alt="github" /></a>
          <a target="_blank" href="mailto:babykinder666@bk.ru"><img width={40} src={assets.mail} alt="mail" /></a>
        </div>
        <p className="text-white text-md font-light text-[14px] md:text-[16px] ">Copyright {new Date().getFullYear()} © HaleraZXC. All Right Reserved.</p>
      </div>
    </>
  )
}

export default Footer
