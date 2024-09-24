// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const images = [
  {
    link: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    link: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    link: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    link: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
];

function SingleProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Initialize to null
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Update the active slide index
  };

  return (
    <div className="container mx-auto my-14 px-5">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full h-full">
        {/* images */}
        <div className="w-full lg:w-[50%] h-[55vh] xl:h-[700px] flex gap-3 justify-between overflow-hidden">
          <div className="relative w-[20%] md:w-[15%] h-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              navigation={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper w-full h-full relative"
              onSlideChange={(e) => handleSlideChange(e)}
            >
              {images.map((img, index) => {
                return (
                  <SwiperSlide
                    before=""
                    className={`${
                      activeIndex === index ? "before:bg-black/40" : ""
                    } w-full !h-fit relative before:absolute before:top-0 before:left-0 before:w-full before:h-full hover:before:bg-black/40 transition-all duration-300`}
                    key={index}
                  >
                    <img src={img.link} alt="Nature" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-[80%] md:w-[85%] h-full">
            <Swiper
              spaceBetween={10}
              //   navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              speed={1500}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 w-full h-full"
              onSlideChange={handleSlideChange}
            >
              {images.map((img, index) => {
                return (
                  <SwiperSlide key={index} className="w-full h-full ">
                    <img
                      src={img.link}
                      alt="Nature 1"
                      className="w-full h-full"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* content */}
        <div className="w-full lg:w-[45%] px-16 flex flex-col gap-6 lg:gap-8">
          <h3 className="capitalize font-medium text-2xl xl:text-3xl ">
            Abra - Canvas Sneakers
          </h3>
          <p className="text-sm leading-relaxed text-black/70">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
            <span className="block "></span>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="flex flex-col gap-4 ">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              variant="number" // Specify the variant
              value={value}
              onChange={setValue}
              id="quantity"
              min={0}
              max={30}
              className="w-[10%] lg:w-[20%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
