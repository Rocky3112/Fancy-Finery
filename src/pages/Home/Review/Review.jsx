import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import review from '../../../../public/review.json'

import RatingStar from "./RatingStar";

const Review = () => {
  var settings = {
      dots:true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
  };
  return (
      <div className="lg:px-6 md:px-6 sm:px-10 px-10 py-20">
          <div>
              <p className="text-sm font-semibold text-yellow-400">TESTIMONIAL</p>
              <div className="py-4 flex items-center justify-between">
                  <h2 className="lg:text-2xl font-bold lg:w-2/5 leading-10 team_head">PEOPLE SAY ABOUT OUR WORKS</h2>
              </div>
          </div>

          <div className="testimonal_arrow">
              <Slider {...settings}>
                  {
                      review.map((data,index) => <div key={index} className="">
                           <div className="mx-2 px-4 py-4 bg-yellow-40031">
                               <p className="text-gray-600">{data.text}</p>
                               <div className="py-4 flex items-center space-x-2">
                                  <div>
                                      <img className="w-20 h-20 rounded-full" src={data.img} alt="" />
                                  </div>

                                  <div>
                                       <h2 className="text-xl font-medium py-2">{data.name}</h2>
                                       
                                       <p className="text-yellow-400">
                                       <RatingStar rating={data.rating} ></RatingStar>
                                        </p>
                                  </div>
                               </div>
                           </div>
                      </div>)
                  }
              </Slider>
          </div>
      </div>
  );
};



export default Review