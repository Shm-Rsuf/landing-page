// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination,Parallax} from "swiper/modules";
import { data } from "./data";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="h-[70vh] w-full">
      {/* SWIPER SLIDE */}
      <Swiper
        parallax={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination,Parallax]}
        className="mySwiper w-full h-full"
      >

        {
          data && data.map((value)=>(

            <SwiperSlide key={value.id}>
              <div className="w-full h-full relative">
                <img src={value.src} alt={value.alt} className="w-full h-full object-cover"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-white space-y-5">
                <h1
                  data-swiper-parallax="-300%"
                  className="md:text-6xl text-4xl font-semibold "
                >
                  {value.headline}
                </h1>
                <p data-swiper-parallax="-500%" className="md:text-2xl text-xl">
                  {value.paragraph}
                </p>
                <div data-swiper-parallax="-600%">
                  <Link href="/" className="bg-rose-400 px-4 py-2 rounded-md">
                    {value.cta}
                  </Link>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))
        }




   
      </Swiper>
    </section>
  )
}

export default Hero