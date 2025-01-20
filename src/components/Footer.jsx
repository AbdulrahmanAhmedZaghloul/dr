import logo from '../assets/abd-el-rahman-web-01.png'
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS
import { useEffect } from 'react';
function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // تهيئة AOS لتطبيق الأنيميشن عند التمرير
    }, []);
    return (
        <>
            <div data-aos="fade-up" className='p-14 bg-[#f7f7f7] '>
                <div data-aos="fade-up" className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-7'>
                    <div  data-aos="fade-up" className="">
                        <img src={logo} alt="" />
                        <ul>
                            <li className="text-sm my-5 lg:text-start text-center text-black font-black">
                                مدرس طب وجراحة العيون جامعة عين شمس
                            </li>
                            <li className="text-sm my-5 lg:text-start text-center text-black font-black">
                                دكتوراه طب وجراحة العيون جامعة عين شمس
                            </li>
                            <li className="text-sm my-5 lg:text-start text-center text-black font-black">
                                استشاري جراحات المياه البيضاء وتصحيح الابصار وعلاج جفاف العيون
                            </li>
                        </ul>
                    </div>
                    <ul data-aos="fade-up">
                        <li className="text-xl text-center text-black font-black">
                            روابط هامة
                        </li>
                        <li className="text-base mt-3 ms-4 text-center text-gray-800 hover:text-gray-600 font-black">
                            الرئيسية
                        </li>
                        <li className="text-base mt-3 ms-4 text-center text-gray-800 hover:text-gray-600 font-black">
                            اتصل بنا
                        </li>
                        <li className="text-base mt-3 ms-4 text-center text-gray-800 hover:text-gray-600 font-black">
                            احجز الان
                        </li>
                        <li className="text-base mt-3 ms-4 text-center text-gray-800 hover:text-gray-600 font-black">
                            فيديوهات
                        </li>
                        <li className="text-base mt-3 ms-4 text-center text-gray-800 hover:text-gray-600 font-black">
                            عن الدكتور
                        </li>
                    </ul>
                    <ul data-aos="fade-up">
                        <li className="text-xl text-black font-black">
                            الخدمات
                        </li>
                        <li className="text-base mt-3 ms-4 text-gray-800 hover:text-gray-600 font-black">
                            الفحص الدوري
                        </li>
                        <li className="text-base mt-3 ms-4 text-gray-800 hover:text-gray-600 font-black">
                            عملية الفيمتو سمايل
                        </li>
                        <li className="text-base mt-3 ms-4 text-gray-800 hover:text-gray-600 font-black">
                            عملية الليزك

                        </li>
                        <li className="text-base mt-3 ms-4 text-gray-800 hover:text-gray-600 font-black">
                            زراعة عدسات Toric

                        </li>
                        <li className="text-base mt-3 ms-4 text-gray-800 hover:text-gray-600 font-black">
                            عملية المياه البيضاء

                        </li>
                        <li className="text-base mt-3 ms-4 text-gray-800 hover:text-gray-600 font-black">
                            جفاف العين

                        </li>
                    </ul>
                    <ul data-aos="fade-up">
                        <li className="text-xl text-black font-black">
                            تواصل معنا الان
                        </li>
                        <li className="text-base mt-5 text-gray-600 font-bold">
                            <i className="me-3 text-2xl fa-solid fa-phone-volume"></i>

                            01118886541
                        </li>
                        <li className="text-base mt-5 text-gray-600 font-bold">
                            <i className="me-3 text-2xl fa-brands fa-whatsapp"></i>
                            01118886541
                        </li>
                        <li className="text-base mt-5 text-gray-600 font-bold">
                            <i className="me-3 text-2xl fa-solid fa-location-dot"></i>
                            العنوان 99 شارع النصر، المعادي الجديدة
                        </li>
                        <li className=" text-gray-600 mt-6">
                            <i className="fa-brands  fa-facebook" />
                            <i className="fa-brands mx-5 fa-youtube" />
                            <i className="fa-brands mx-5 fa-instagram" />
                            <i className="fa-brands  fa-twitter" />
                        </li>
                    </ul>
                </div>


            </div>
            <div className='p-8 bg-[#f7f7f7] border border-t border-b-0 border-s-0 border-e-0 text-center w-full'>
                <span className='text-xs font-black'
                >جميع الحقوق محفوظة © 2024 لصالح الدكتور عبدالرحمن شمس
                </span>
            </div>
        </>


    )
}

export default Footer