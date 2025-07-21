import { motion } from "motion/react";
import { useState } from "react";
import React from 'react'

const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27af5eec-88d8-4735-aedd-71cf26b40e33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='container mx-auto mt-[40px] lg:py-[34px] py-4 px-6 lg:px-[112px]'>
        <h1 id="Contacts" className='text-[30px] md:text-[40px] text-white max-w-xl font-extralight leading-relaxed'><span className='text-gray-500'>Contacts</span> Us</h1>
        <form onSubmit={onSubmit} className="w-full max-w-2xl mt-[25px] md:mt-[50px] text-white">
          {/* Верхняя строка с двумя input'ами */}
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="name" className="mb-2 font-semibold">Your Name</label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Enter your name"
                className="border border-gray-600 bg-black/80 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="email" className="mb-2 font-semibold">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="border border-gray-600 bg-black/80 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Сообщение */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Write your message here"
              className="border border-gray-600 bg-black/80 shadow-md rounded-lg px-4 py-3 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="mt-6 self-start border border-gray-400 hover:border-white text-white px-6 py-3 rounded-xl font-light text-sm hover:bg-white/10 transition duration-200"
          >
            Submit {result}
          </button>
        </form>
      </motion.div >
    </>
  )
}

export default Contacts
