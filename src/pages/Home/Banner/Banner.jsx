// import Modal1 from "../../../assets/Model/bannerImg2.jpg";
// import Modal3 from "../../../assets/Model/bannerImg3.webp";
// import Modal4 from "../../../assets/Model/bannerImg1.jpg";
import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import Slider from 'react-slick';
const Banner = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=''>

            <div className='banner_arrow '>
                <Slider {...settings}>
                    <div className='banner_bg01 lg:px-32 md:px-28 sm:px-18 px-12 py-36 text-[#fff] '>
                        <div className='z-10 relative '>
                            <p className='font-medium text-sm tracking-widest uppercase text-[#CDB30C]'>welcome</p>
                            <h2 className='lg:text-5xl md:text-3xl sm:text-4xl text-3xl font-bold lg:w-[70%] py-3 uppercase'>Professional & Creative Ornaments Design </h2>
                            <p className='py-2 lg:w-[50%]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                        </div>

                        <div className='z-10 relative flex items-center gap-4 flex-wrap mt-4'>
                            <button className='py-3 px-8 text-sm tracking-widest font-bold bg-[#CDB30C] text-white uppercase hover:bg-[#fff] hover:text-[#262626] duration-300 cursor-pointer rounded '>get started</button>
                            <button className='py-3 px-8 text-sm tracking-widest font-bold bg-[#fff] text-[#262626] uppercase hover:bg-[#CDB30C] hover:text-[#fff] duration-300 cursor-pointer rounded'>New Arrival</button>
                        </div>
                    </div>
                    <div className='banner_bg02 lg:px-32 md:px-28 sm:px-18 px-12 py-36 text-[#fff]'>
                        <div className='z-10 relative '>
                            <p className='font-medium text-sm tracking-widest uppercase text-[#CDB30C]'>welcome</p>
                            <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold lg:w-[60%] py-3 capitalize'>Digital Innovation Company that Creates Solution</h2>
                            <p className='py-2 lg:w-[50%]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                        </div>

                        <div className='z-10 relative flex items-center gap-4 flex-wrap mt-4'>
                            <button className='py-3 px-8 text-sm tracking-widest font-bold bg-[#CDB30C] text-white uppercase hover:bg-[#fff] hover:text-[#262626] duration-300 cursor-pointer rounded'>get started</button>
                            <button className='py-3 px-8 text-sm tracking-widest font-bold bg-[#fff] text-[#262626] uppercase hover:bg-[#CDB30C] hover:text-[#fff] duration-300 cursor-pointer rounded'>New Arrival</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;
