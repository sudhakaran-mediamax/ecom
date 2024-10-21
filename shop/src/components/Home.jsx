import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";
function Home() {
  return (
    <>
      <div className="">
        <Swiper
          modules={[EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          speed={2000}
          effect="fade"
        >
          <SwiperSlide>
            <div className="">
              <div className="">
                <p>Summer Clothing Collection</p>
                <Button variant="circle">Explore All</Button>
              </div>
              <div className="">
                <img src="" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="">
                <p>Winter Clothing Collection</p>
                <Button variant="circle">Explore All</Button>
              </div>
              <div className="">
                <img src="" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
