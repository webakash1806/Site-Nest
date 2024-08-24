import React from 'react'
import CTAbg from '../assets/CTA.png'

const CTAsection = ({ text, msg }) => {
  return (
    <div className="w-fit mt-10  mx-auto container">
      <div
        className="bg-cover bg-no-repeat py-10 pt-10 md:py-16 md:mx-10 mx-4 rounded-[1.4rem] sm:px-20 px-10 h-auto w-fit"
        style={{ backgroundImage: `url(${CTAbg})` }}
      >
        <div className="flex flex-wrap items-start  gap-6">
          <div className="text-white max-w-[35rem]">
            <h2 className="text-4xl md:text-[2.7rem] font-semibold mb-4 sora-500 md:sora-600">Let’s work together</h2>
            <p className=" sora-400 leading-7 text-[#f1f3fa]">{text}</p>
          </div>
          <button className='bg-white sora-500 p-3 px-10 rounded'>
            Start a project
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTAsection
