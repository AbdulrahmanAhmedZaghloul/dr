import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS
import imageDr from "../assets/DSC_7960-copy_pp-1.jpg";

function AboutHome() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // تهيئة AOS لتطبيق الأنيميشن عند التمرير
    }, []);

    return (
        <div className="w-full py-16 flex flex-wrap justify-between items-center">
            {/* القسم الأول */}
            <div className="lg:w-1/2 md:w-[40%]" data-aos="fade-up">
                <div className="p-8 flex-col justify-between items-center">
                    <h3 className="lg:text-base md:text-2xl sm:text-xl text-xl font-extrabold text-gray-500 mb-5">
                        الدكتور عبدالرحمن شمس
                    </h3>
                    <p className="lg:text-[16px] text-gray-900 md:text-base sm:text-base text-base font-black mb-10">
                        يعد الدكتور عبد الرحمن شمس اكبر دكتور عيون فى مصر في علاج جفاف العين
                        والمياه البيضاء و تصحيح الابصار والافضل في عمليات الليزك وزرع العدسات في مصر وذلك لأنه يتمتع
                        بخبرة كبيرة في علاج حالات جفاف العين الشديدة حيث قام بالعلاج العديد
                        من الحالات الناجحة بإستخدام أحدث التقنيات بالإضافة إلى أنه حاصل على:
                    </p>
                </div>
            </div>

            {/* القسم الثاني */}
            <div className="lg:w-1/2 md:w-[40%]" data-aos="fade-up">
                <div className="p-2 flex-col items-center justify-between">
                    <div className="flex justify-end relative">
                        <div className="absolute right-10 top-1/2 z-40 rounded-[100%] shadow-xl bg-white lg:w-[17rem] lg:h-[17rem] md:w-[14rem] md:h-[14rem] sm:w-[11rem] sm:h-[11rem] w-[9rem] h-[9rem] flex justify-center items-center">
                            <div className="bg-[#f7f7f7] rounded-full w-[7.5rem] h-[7.5rem] lg:w-[14rem] lg:h-[14rem] md:w-[11rem] md:h-[11rem] ">
                                <p className="font-semibold text-center p-3 lg:text-8xl md:text-4xl sm:text-2xl text-3xl text-[#314c5b]">10+</p>
                                <p className="font-extrabold lg:text-[22px] md:text-[18px] sm:text-[15px] text-[15px] text-center text-slate-800 p-1">
                                    سنوات من الخبرة
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-[100%] shadow-xl bg-white w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[30rem] md:w-[20rem] md:h-[20rem] flex justify-center items-center">
                            <img src={imageDr} className="w-[12rem] h-[12rem] lg:w-[27rem] lg:h-[27rem] md:w-[17rem] md:h-[17rem] sm:w-[12rem] sm:h-[12rem] object-cover rounded-[100%]" alt="" />
                            <div className="absolute top-0 left-12 rounded-full bg-[#314c5b] w-12 h-12 flex justify-center items-center">
                                <i className="text-white lg:text-2xl fa-solid fa-stethoscope"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* القسم الثالث */}
            <div className="w-full pt-10 mt-10 flex flex-wrap justify-between items-center">
                <div className="lg:w-1/2" data-aos="fade-up">
                    <p className="text-gray-900 lg:text-[21px] md:text-[20px] sm:text-[18px] text-[18px] px-10 font-black">
                        يرجى التواصل معنا أو ارسال رسالة على واتساب على رقم
                        <br />
                        <span className="font-semibold">
                            01118886541
                        </span>
                    </p>
                </div>
                <div className="lg:w-1/2 p-8" data-aos="fade-up">
                    <p className="p-10 text-gray-800 lg:text-[14px] md:text-[20px] sm:text-[18px] text-[18px] font-black">
                        يشمل مركز دكتور عبدالرحمن شمس افضل دكتور عيون في السعودية ومصر احدث اجهزة
                        الفحص وغرف عمليات جراحية مجهزة بأحدث الميكروسكوبات الجراحية وافضل
                        الاجهزة في عمليات المياه البيضاء وزراعة العدسات و تصحيح الابصار وزراعة القرنية.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutHome;