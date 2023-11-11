import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

export default function Category() {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img className="w-full h-[35rem] object-cover" src={slider1} alt="" />
          <h3 className="text-4xl text-white shadow-md font-medium text-center -mt-32">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[35rem] object-cover" src={slider2} alt="" />
          <h3 className="text-4xl text-white shadow-md font-medium text-center -mt-32">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[35rem] object-cover" src={slider3} alt="" />
          <h3 className="text-4xl text-white shadow-md font-medium text-center -mt-32">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[35rem] object-cover" src={slider4} alt="" />
          <h3 className="text-4xl text-white shadow-md font-medium text-center -mt-32">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[35rem] object-cover" src={slider5} alt="" />
          <h3 className="text-4xl text-white shadow-md font-medium text-center -mt-32">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
