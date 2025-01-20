import image1 from "../assets/WhatsApp-Image-2024-05-01-at-10.59.56_1c01e1b3.jpg";
import image2 from "../assets/WhatsApp-Image-2024-05-01-at-10.59.56_42388e41.jpg";
import image3 from "../assets/WhatsApp-Image-2024-05-01-at-10.59.56_b96becc6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS
import { useEffect } from "react";
function HomeOpinions() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // تهيئة AOS لتطبيق الأنيميشن عند التمرير
}, []);
  return (
    <>
      <div className="w-full image-map mx-auto rounded-lg bg-white mt-10">
        <div className="w-[90%] z-15 mx-auto relative">
          <h4 className="text-center text-gray-600 font-bold text-lg" data-aos="fade-up">
            اراء العملاء
          </h4>
          <h5 className="text-center text-gray-900 font-bold text-2xl my-6"data-aos="fade-up">
            ماذا قال عملاءنا
          </h5>

          <Swiper
            slidesPerView={3}
            spaceBetween={20} // تحديد المسافة بين الشرائح
            centeredSlides={true} // محاذاة الشرائح في المنتصف
            watchSlidesProgress={true}

            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}


            loop={true}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src={image1} className="w-full rounded-lg object-cover" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} className="w-full rounded-lg object-cover" alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} className="w-full rounded-lg object-cover" alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} className="w-full rounded-lg object-cover" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} className="w-full rounded-lg object-cover" alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} className="w-full rounded-lg object-cover" alt="Image 3" />
            </SwiperSlide>
          </Swiper>

          <div className="swiper-button-next custom-next1"></div>
          <div className="swiper-button-prev custom-prev1"></div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
      <div data-aos="fade-up" className=" bg-[#314c5b] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 p-7 text-white">
        <div className=""data-aos="fade-up">
          <p className="text-2xl font-extrabold">
            هل تريد حجز موعد وسنتواصل معك
          </p>
        </div>
        <div className="flex justify-start" data-aos="fade-up">
          <button className="rounded-lg border-2 border-white hover:bg-white hover:text-[#314c5b] px-6 py-1 text-base font-black">
            احجز الان
          </button>
        </div>
      </div>
    </>

  );
}

export default HomeOpinions;







