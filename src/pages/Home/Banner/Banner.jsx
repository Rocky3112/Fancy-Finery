import Modal1 from "../../../assets/Model/Model-1.jpg";
import Modal3 from "../../../assets/Model/Model-3.jpg";
import Modal4 from "../../../assets/Model/Model-4.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[400px] md:h-[700px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Modal1} className="w-full" />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center rounded-xl w-1/2">
          <div className="text-white space-y-4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-6xl font-bold mx-4">
              Discover the Joy of Beauty
            </h2>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn bg-inherit btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn bg-inherit btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Modal3} className="w-full" />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center rounded-xl w-1/2">
          <div className="text-white space-y-4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-6xl font-bold mx-4">
              Sunshine of your life
            </h2>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn bg-inherit btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn bg-inherit btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Modal4} className="w-full" />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center rounded-xl w-1/2">
          <div className="text-white space-y-4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-6xl font-bold mx-4">
              Wear your brand
            </h2>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn bg-inherit btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-inherit btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
