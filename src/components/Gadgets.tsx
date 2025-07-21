import { motion } from 'motion/react'

const Gadgets = () => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
      className="container mx-auto mt-[40px] lg:py-[34px] py-4 px-6 lg:px-[112px]">
        <h2 className="text-[30px] md:text-[40px] text-white max-w-3xl font-extralight leading-relaxed">
          <span className="text-gray-500">Technologies I</span> work with daily
        </h2>

        <div className="flex flex-wrap flex-col sm:flex-row justify-between gap-y-10 gap-x-8 mt-[25px] md:mt-[50px] border border-white/20 rounded-xl py-10 px-6 text-center text-3xl md:text-4xl font-light tracking-tight">
          <div className="text-white hover:text-blue-400 transition-colors duration-300">REACT</div>
          <div className="text-white hover:text-yellow-400 transition-colors duration-300">VITE</div>
          <div className="text-white hover:text-cyan-400 transition-colors duration-300">TAILWIND</div>
          <div className="text-white hover:text-purple-400 transition-colors duration-300">SHADCN</div>
        </div>
      </motion.div>

    </>
  )
}

export default Gadgets
