
import image2 from '../assets/DSC_8188-copy_pp-1.jpg';
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS
import { useEffect } from 'react';
function HomeBook() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // تهيئة AOS لتطبيق الأنيميشن عند التمرير
    }, []);
    return (
        <div className=' py-28'>
            <div className="bg-[#f7f7f7] flex flex-wrap justify-between items-center">
                <div className="md:w-1/2 mx-auto lg:text-start text-center"data-aos="fade-up">
                    <div className='p-20'>
                        <h4 className='text-3xl font-black text-slate-900 mb-4'>احجز الان كشفك اون لاين
                        </h4>
                        <p className='leading-10 font-black text-xl text-slate-900'>
                            تقدر تحجز كشفك اون لاين مع الدكتور عبدالرحمن املي كل
                            البيانات وهيتم التواصل معاك لتاكيد ميعاد الحجز
                        </p>

                        <button className="p-2 bg-[#22424e] hover:bg-gray-900 px-6 rounded-md my-8 text-white font-bold ">
                            احجز الان
                        </button>
                    </div>

                </div>
                <div className="md:w-1/2 mx-auto text-center relative"data-aos="fade-up">
                    <img src={image2} className='w-[50%] mx-auto  lg:absolute left-1/3  lg:-translate-y-1/2' alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeBook