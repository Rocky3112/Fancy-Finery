import './PerfectCreation.css'
import { GiJewelCrown } from "react-icons/gi";
import { SiAdobecreativecloud, SiMarketo, SiPurescript } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoCopilot } from "react-icons/go";
import { SiAltiumdesigner } from "react-icons/si";

const PerfectCreation = () => {
    return (
        <div className="lg:px-20 md:px-28 sm:px-18 px-12 py-20 solution_bg">
            <div className='grid lg:grid-cols-2 gap-4'>

                <div className='text-[#CDB30C] text-center lg:text-start'>
                    <h2 className='lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold title_line_height uppercase'>WE SHAPE THE PERFECT Creations</h2>
                    <p className='leading-relaxed text-lg py-4 text-[#6c6868]'>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                </div>

                <div className='lg:grid lg:grid-cols-2 gap-4 hidden  cursor-pointer'>
                    <div className='bg-[#262626] group hover:bg-[#CDB30C] duration-300 shadow-2xl flex items-center justify-center flex-1 relative'>
                        <p className='text-4xl text-[#CDB30C] group-hover:text-[#262626] duration-300 absolute right-12 top-12'><GiJewelCrown /></p>
                        <h2 className='text-2xl group-hover:text-[#262626] duration-300 font-bold text-white absolute left-12 bottom-12 uppercase'>Best <br></br>PRODUCTS</h2>
                        <div className='bottom-[-16px] right-32 opacity-0 group-hover:opacity-100 group-hover:right-16 duration-300 absolute'>
                            <p className='text-2xl py-1 duration-300  px-1 border-2 border-[#CDB30C] rounded-full bg-[#262626] text-[#CDB30C]'><MdKeyboardArrowRight /></p>
                        </div>
                    </div>

                    <div className='bg-[#262626] group hover:bg-[#CDB30C] duration-300 shadow-2xl flex items-center justify-center flex-1 relative'>
                        <p className='text-4xl text-[#CDB30C] group-hover:text-[#262626] duration-300  absolute right-12 top-12'><SiAdobecreativecloud /></p>
                        <h2 className='text-2xl group-hover:text-[#262626] duration-300 font-bold text-white absolute left-12 bottom-12 uppercase'>Innovative <br></br>Design</h2>
                        <div className='bottom-[-16px] right-32 opacity-0 group-hover:opacity-100 group-hover:right-16 duration-300 absolute'>
                            <p className='text-2xl py-1 duration-300  px-1 border-2 border-[#CDB30C] rounded-full bg-[#262626] text-[#CDB30C]'><MdKeyboardArrowRight /></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-[5vh]'>
                <div className='px-4 py-28 group bg-[#CDB30C] duration-300 shadow-2xl flex items-center justify-center flex-1 relative'>
                    <p className='text-4xl text-[#262626] duration-300 absolute right-12 top-12'><SiPurescript /></p>
                    <h2 className='text-2xl text-[#262626] duration-300 font-bold  absolute left-12 bottom-12 uppercase'>The Nobility <br></br>DESIGN</h2>
                    <div className='bottom-[-16px] right-32 opacity-0 group-hover:opacity-100 group-hover:right-16 duration-300 absolute'>
                        <p className='text-2xl py-1 duration-300  px-1 border-2 border-[#CDB30C] rounded-full bg-[#262626] text-[#CDB30C]'><MdKeyboardArrowRight /></p>
                    </div>
                </div>

                <div className='bg-[#262626] px-4 py-28 group hover:bg-[#CDB30C] duration-300 shadow-2xl flex items-center justify-center flex-1 relative'>
                    <p className='text-4xl text-[#CDB30C] group-hover:text-[#262626] duration-300 absolute right-12 top-12'><GoCopilot /></p>
                    <h2 className='text-2xl group-hover:text-[#262626] duration-300 font-bold text-white absolute left-12 bottom-12 uppercase'>Quality <br></br>DEVELOPMENT</h2>
                    <div className='bottom-[-16px] right-32 opacity-0 group-hover:opacity-100 group-hover:right-16 duration-300 absolute'>
                        <p className='text-2xl py-1 duration-300  px-1 border-2 border-[#CDB30C] rounded-full bg-[#262626] text-[#CDB30C]'><MdKeyboardArrowRight /></p>
                    </div>
                </div>

                <div className='bg-[#262626] group hover:bg-[#CDB30C] duration-300 shadow-2xl flex items-center justify-center flex-1 relative'>
                        <p className='text-4xl text-[#CDB30C] group-hover:text-[#262626] duration-300  absolute right-12 top-12'><SiMarketo /></p>
                        <h2 className='text-2xl group-hover:text-[#262626] duration-300 font-bold text-white absolute left-12 bottom-12'>ONLINE <br></br>MARKETING</h2>
                        <div className='bottom-[-16px] right-32 opacity-0 group-hover:opacity-100 group-hover:right-16 duration-300 absolute'>
                            <p className='text-2xl py-1 duration-300  px-1 border-2 border-[#CDB30C] rounded-full bg-[#262626] text-[#CDB30C]'><MdKeyboardArrowRight /></p>
                        </div>
                    </div>

                <div className='bg-[#262626] px-4 py-28 group hover:bg-[#CDB30C] duration-300 shadow-2xl flex items-center justify-center flex-1 relative'>
                    <p className='text-4xl text-[#CDB30C] group-hover:text-[#262626] duration-300 absolute right-12 top-12'><SiAltiumdesigner /></p>
                    <h2 className='text-2xl group-hover:text-[#262626] duration-300 font-bold text-white absolute left-12 bottom-12 uppercase'>Creative <br></br>DESIGNER</h2>
                    <div className='bottom-[-16px] right-32 opacity-0 group-hover:opacity-100 group-hover:right-16 duration-300 absolute'>
                        <p className='text-2xl py-1 duration-300  px-1 border-2 border-[#CDB30C] rounded-full bg-[#262626] text-[#CDB30C]'><MdKeyboardArrowRight /></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PerfectCreation;