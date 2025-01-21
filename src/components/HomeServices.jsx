import image1 from "../assets/عملية-الكاستم-ليزك.webp";
import image2 from "../assets/88.webp";
import image3 from "../assets/الفحص-الدوري.webp";
import image4 from "../assets/IMG-20240324-WA0042.jpg";
import image5 from "../assets/IMG-20240324-WA0041.jpg";
import image6 from "../assets/IMG-20240324-WA0038.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS
function HomeServices() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // تهيئة AOS لتطبيق الأنيميشن عند التمرير
    }, []);
    return (
        <div className="w-full mx-auto shadow-lg rounded-lg bg-white p-5 -mt-10"data-aos="fade-up">
            <h4 className=" text-gray-900 text-[37px] font-bold text-center" data-aos="fade-up">الخدمات</h4>
            <div className="p-5 mx-auto relative" data-aos="fade-up">
                <Swiper
                data-aos="fade-up"
                    style={{
                        margin: '0 auto',
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        padding:'20px',
                        paddingBottom:'40px'
                    }}
                    slidesPerView={3}
                    spaceBetween={0} // إزالة المسافات بين الشرائح
                    centeredSlides={true} // محاذاة الشرائح في المنتصف
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet custom-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    loop={true}
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div className="shadow-xl lg:p-5 p-0 bg-white rounded-xl">
                            <img src={image1} className="rounded-lg h-[15rem] object-contain" alt="Image 1" />
                            <p className="text-[17px] font-black text-center p-5">كونتورا ليزك</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-xl lg:p-5 p-0 bg-white rounded-xl">
                            <img src={image2} className="rounded-lg h-[15rem] object-contain" alt="Image 2" />
                            <p className="text-[17px] font-black text-center p-5">عملية الفيمتو سمايل</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-xl lg:p-5 p-0 bg-white rounded-xl">
                            <img src={image3} className="rounded-lg h-[15rem] object-contain" alt="Image 3" />
                            <p className="text-[17px] font-black text-center p-5">الفحص الدوري والحفاظ على سلامة العين</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-xl lg:p-5 p-0 bg-white rounded-xl">
                            <img src={image4} className="rounded-lg h-[15rem] object-contain" alt="Image 4" />
                            <p className="text-[17px] font-black text-center p-5">عملية الليزك</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-xl lg:p-5 p-0 bg-white rounded-xl">
                            <img src={image5} className="rounded-lg h-[15rem] object-contain" alt="Image 5" />
                            <p className="text-[17px] font-black text-center p-5">الفيمتو ليزك</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-xl lg:p-5 p-0 bg-white rounded-xl">
                            <img src={image6} className="rounded-lg h-[15rem] object-contain" alt="Image 6" />
                            <p className="text-[17px] font-black text-center p-5">كونتورا ليزك</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next custom-next"></div>
                <div className="swiper-button-prev custom-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}

export default HomeServices;
