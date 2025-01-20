// import React from 'react';
// import './Header.css'; // تأكد من استيراد ملف CSS الخاص بالأنيميشن

import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS
import { useEffect } from "react";
function Header() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // تهيئة AOS لتطبيق الأنيميشن عند التمرير
    }, []);
    return (
        <>
            <div className="lg:mt-[7.8rem] md:mt-[7.8rem]  sm:mt-[8.8rem] mt-4 image w-full h-screen">
                <div className=" text-white flex lg:justify-end lg:items-center md:justify-start md:items-center p-5 md:pt-10 sm:justify-start sm:items-center sm:pt-10 pt-0 justify-start items-center h-full">
                    <div className="pe-9 -mt-20" >
                        <h1 data-aos="fade-right" data-aos-delay="100" className="lg:text-[36px] md:text-xl sm:md:text-lg text-sm lg:text-white md:text-white font-black mb-6">دكتورعبدالرحمن شمس</h1>
                        <p data-aos="fade-right" data-aos-delay="150" className="lg:text-base md:text-lg sm:text-lg text-xs lg:text-white md:text-white font-black mb-4">مدرس طب وجراحة العيون جامعة عين شمس</p>
                        <p data-aos="fade-right" data-aos-delay="200" className="lg:text-base md:text-lg sm:text-lg text-xs lg:text-white md:text-white font-black mb-4">دكتوراه طب وجراحة العيون جامعة عين شمس</p>
                        <p data-aos="fade-right" data-aos-delay="250" className="lg:text-base md:text-lg sm:text-lg text-xs lg:text-white md:text-white font-black mb-4">استشاري جراحات المياه البيضاء وتصحيح الابصار وعلاج جفاف العيون</p>
                        <button data-aos="fade-right" data-aos-delay="300" data-aos-offset="0" className="
                        mt-5 bg-[#d8eff5] text-slate-600 rounded-md lg:text-[18px] 
                        md:text-lg sm:md:text-lg text-base p-4 px-9 font-black">
                            اتصل بنا
                        </button>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="flex flex-wrap justify-start items-center gap-5 bg-white md:w-[95%] shadow-2xl rounded-lg p-10 mx-auto xl:-mt-36">
                <div data-aos="fade-up" className="lg:w-[30%]">
                    <h2 data-aos="fade-up" className="lg:text-2xl leading-10 tracking-wide  md:text-lg sm:text-xl text-xl mt-10 sm:text-center md:text-center lg:text-start text-center text-gray-900 font-black">
                        لماذا يعد دكتور عبدالرحمن شمس

                        افضل دكتور عيون في مصر

                    </h2>
                    <button data-aos="fade-up" className="bg-[#22424e] hover:bg-gray-900 md:mt-4 p-3 px-7 mt-4 lg:text-base md:text-lg sm:text-base text-sm rounded-lg flex items-center font-semibold text-white ">
                        <i data-aos="fade-up" className="me-5 flex items-center fa-solid fa-arrow-right"></i>
                        <span>
                            عن الدكتور
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" className="g:w-1/2">
                    <ul data-aos="fade-up" className="p-6 list-disc lg:text-[14px] md:text-base sm:text-base text-base font-extrabold text-slate-900">
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">مدرس طب وجراحة العيون بجامعة عين شمس.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">حاصل على دكتوراة طب و جراحة العيون من جامعة عين شمس.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">استشاري جراحات في المياه البيضاء، تصحيح الإبصار وعلاج جفاف العين.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">زميل المجلس الدولي لجراحات العيون بإنجلترا.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">عضو في كلية الجراحين الملكية بأدنبرة.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">عضو في الجمعية الأمريكية لجراحات المياه البيضاء و تصحيح الإبصار.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">عضو في الجمعية الأوروبية لجراحات المياه البيضاء و تصحيح الإبصار.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">عضو في الجمعية الدولية لجراحات تصحيح الإبصار.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">عضو في الجمعية الأمريكية في مجال طب و جراحة العيون.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">عضو في الجمعية المصرية لطب و جراحة العيون.</li>
                        <li data-aos="fade-up" className="my-2 animate-fadeInUp">قام بتأسيس وحدة جفاف العين بمركز المعادى التخصصى للعيون.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;