import illustration1 from '../assets/illustration1.svg'
import illustration2 from '../assets/illustration2.svg'
import illustration3 from '../assets/illustration3.svg'
import line from '../assets/line.png'


const WorkingProcess = () => {
    const phoneNumber = "916207234759"; // Replace with your phone number
    const message = "Hello! I would like to start a project.";
    return (
        <div className="container relative px-4 py-8 mx-auto mt-10 overflow-x-hidden">
            {/* Section Title */}
            <div className="text-center flex flex-col items-center justify-center mb-12 mx-auto max-w-[28rem] sora-700">
                <h2 className="text-3xl text-[#040D43]">Our working process on how to grow your business</h2>
            </div>

            {/* Process Steps */}
            <div className="container flex flex-col mx-auto w-fit lg:justify-around lg:gap-20 lg:flex-row">
                {/* Step 1 */}
                <div className="px-4 mb-8 " data-aos="fade-up" data-aos-duration="600">
                    <div className="flex flex-col items-center ">

                        <div className="w-[15rem] h-[15rem] flex-shrink-0">

                            <img src={illustration1} alt="Initiation & Planning" className="object-contain w-full h-full" />
                        </div>
                        <div className='flex items-center text-center max-w-[20rem] justify-center flex-col'>
                            <span className="text-xl font-bold bg-[#2B4DFF] text-white p-[9.5px] size-12 rounded-full">01</span>
                            <h2 className="mt-2 text-xl font-semibold">Initiation & Planning</h2>
                            <p className="mt-2 text-gray-700 sora-400 text-[0.95rem]">We are architects innovation trailblazers of technological advancement</p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="px-4 mb-8 " data-aos="fade-up" data-aos-duration="800">
                    <div className="flex flex-col items-center ">
                        <div className="w-[15rem] h-[15rem] flex-shrink-0">

                            <img src={illustration2} alt="Execution & Development" className="object-contain w-full h-full" />
                        </div>
                        <div className='flex items-center text-center justify-center flex-col max-w-[20rem]'>
                            <span className="text-xl font-bold bg-[#2B4DFF] text-white p-[9.5px] size-12 rounded-full">02</span>

                            <h2 className="mt-2 text-xl font-semibold">Execution & Development</h2>
                            <p className="mt-2  text-gray-700 sora-400 text-[0.95rem]">We are architects innovation trailblazers of technological advancement</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="px-4 mb-8 " data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex flex-col items-center ">

                        <div className="w-[15rem] h-[15rem] flex-shrink-0">
                            <img src={illustration3} alt="Testing & Maintenance" className="object-contain w-full h-full" />
                        </div>
                        <div className='flex items-center text-center max-w-[20rem] justify-center flex-col'>
                            <span className="text-xl font-bold bg-[#2B4DFF] text-white p-[9.5px] size-12 rounded-full">03</span>

                            <h2 className="mt-2 text-xl font-semibold">Testing & Maintenance</h2>
                            <p className="mt-2 text-gray-700 sora-400 text-[0.95rem]">We are architects innovation trailblazers of technological advancement</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Line Image */}
            <div className="flex absolute w-full items-center top-[24rem] z-[-1] justify-center mt-8">
                <img src={line} alt="Line" className="hidden w-fit lg:block" />
            </div>
        </div>
    )
}

export default WorkingProcess


