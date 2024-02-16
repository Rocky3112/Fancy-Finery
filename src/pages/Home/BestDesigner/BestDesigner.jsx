import { IoIosArrowForward } from "react-icons/io";
import team from '../../../../public/team.json';
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const BestDesigner = () => {
  return (
   
      <div className="lg:px-20 md:px-28 sm:px-18 px-12 py-12">
            <div>
                <p className="text-sm font-semibold text-[#CDB30C]">MEET THE TEAM</p>
                <div className="py-4 flex items-center justify-between">
                    <h2 className="lg:text-4xl font-bold lg:w-[40%] leading-10 team_head">PROFESSIONAL CREATIVE TEAM MEMBERS</h2>
                    <p className="flex items-center space-x-1 bg-[#CDB30C] text-[#fff] text-sm font-medium py-3 px-6 cursor-pointer hover:bg-[#262626] duration-300"><span>VIEW ALL MEMBERS </span> <span><IoIosArrowForward /></span></p>
                </div>
            </div>

            <div className="py-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {team.map((data,index) => (
                    <div key={index} className="relative overflow-hidden">
                        <div className="h-[60vh] relative group">
                            <img className="object-cover h-full w-full" src={data.img} alt="" />
                            <div className="absolute inset-0 bg-[#cdb30c93] opacity-0 group-hover:opacity-50 transition duration-500"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
                                <h2 className="text-xl font-semibold">{data.name}</h2>
                                <p className="text-sm font-medium py-1">{data.title}</p>
                                <div className="flex items-center space-x-2 py-2">
                                    <p className="py-2 px-2 border rounded-full hover:bg-[#262626] duration-300 cursor-pointer"><TiSocialFacebook /></p>
                                    <p className="py-2 px-2 border rounded-full hover:bg-[#262626] duration-300 cursor-pointer"><FaInstagram /></p>
                                    <p className="py-2 px-2 border rounded-full hover:bg-[#262626] duration-300 cursor-pointer"><FaTwitter /></p>
                                    <p className="py-2 px-2 border rounded-full hover:bg-[#262626] duration-300 cursor-pointer"><FaLinkedinIn /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

  

export default BestDesigner