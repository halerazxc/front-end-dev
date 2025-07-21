import WorkContent from './WorkContent'
import WorkContentReverse from './WorkContentReverse'
import { motion } from 'motion/react'

const Works = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4}}
        className='container mx-auto mt-[40px] lg:py-[34px] py-4 px-6 lg:px-[112px]'>
        <h1 id='MyWorks' className='text-[30px] md:text-[40px] text-white font-extralight '><span className='text-gray-500'>Selected</span> Works</h1>
        <WorkContent />
        <WorkContentReverse />
      </motion.div >
    </>
  )
}

export default Works
