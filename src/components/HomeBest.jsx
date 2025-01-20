import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد CSS الخاص بـ AOS

function HomeBest() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // تهيئة AOS
    }, []);

    return (
        <div className="image-Best relative">
            <div className="lay bg-slate-50 z-10 h-full text-white">

                <h5 className="text-white lg:text-5xl sm:text-base md:text-base text-center lg:pt-10 sm:pt-5 md:pt-5 pt-5 font-black" data-aos="fade-up">
                    افضل دكتور عيون وليزك في مصر
                </h5>
                <p className="text-white lg:text-sm mt-3 sm:text-sm md:text-sm text-center lg:pt-4 sm:pt-1 md:pt-1 pt-1 font-black" data-aos="fade-up">
                    تواصل الان واحجز ميعاد كشفك مع افضل طبيب عيون ف القاهره
                </p>
                <button className="mx-auto px-5 flex justify-center items-center p-3 bg-[#22424e] hover:bg-gray-900 rounded-md lg:my-7 sm:my-4 md:my-4 my-4 text-white font-bold " data-aos="fade-up">
                    اتصل الان
                    <i className="ms-4 fa-solid fa-phone"></i>
                </button>
                <div className="w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5">
                    {/* القسم الأول */}
                    <div className="rounded-lg bg-[#314c5b] text-center" data-aos="fade-up">
                        <div className="lg:p-6 md:p-2 sm:p-2 p-2">
                            <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-7 h-7 flex justify-center items-center text-center mx-auto border border-white rounded-full">
                                <i className="lg:text-2xl md:text-sm sm:text-sm text-xs flex justify-center items-center text-center mx-auto fa-regular fa-eye"></i>
                            </div>
                            <p className="font-black lg:text-2xl md:text-base sm:text-base text-base md:mt-2 sm:mt-2 mt-2">
                                جفاف العين
                            </p>
                            <p className="font-semibold lg:text-base leading-5 lg:mt-5 mt-2 tracking-wider md:text-base sm:text-xs text-xs">
                                الأبحاث العلمية بتقول
                                أن جفاف العين جفاف العين يصيب ما يقرب من ٥٠ إلى ٧٥%
                                من سكان العالم وهو من اقوى المؤثرات السلبية على العمل
                                و مستوى الإنتاجية وجودة الحياة بشكل عام، طيب يعني إيه جفاف
                                العين ببساطة هو حالة تحدث لما تكون العينان غير قادرة
                                على إفراز دموع بشكل كافي لترطيب العين بشكل صحيح،
                            </p>
                        </div>
                    </div>

                    {/* القسم الثاني */}
                    <div className="rounded-lg bg-[#314c5b] text-center" data-aos="fade-up">
                        <div className="lg:p-6 md:p-2 sm:p-2 p-2">
                            <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-7 h-7 flex justify-center items-center text-center mx-auto border border-white rounded-full">
                                <i className="lg:text-2xl md:text-sm sm:text-sm text-xs flex justify-center items-center text-center mx-auto fa-regular fa-eye"></i>
                            </div>
                            <p className="font-black lg:text-2xl md:text-base sm:text-base text-base md:mt-2 sm:mt-2 mt-2">
                                المياه البيضاء
                            </p>
                            <p className="font-semibold lg:text-base leading-5 lg:mt-5 mt-2 tracking-wider md:text-base sm:text-xs text-xs">
                                يشير مصطلح “المياه البيضاء
                                ” إلى تغيرات في العدسة الشفافة داخل العين، والتي تؤدي
                                إلى تشوهات في الرؤية وتحول العدسة من شفافة إلى متعكرة.
                                أعراض المياه البيضاء : 1- عدم وضوح الرؤية. 2-
                                الشعور بالضبابية أو الهالات حول الأضواء
                                . 3- تغير لون العين فى الحالات المتقدمة
                                . 4- الإصابة بعيوب الإبصار مثل قصر النظر.
                            </p>
                        </div>
                    </div>

                    {/* القسم الثالث */}
                    <div className="rounded-lg bg-[#314c5b] text-center" data-aos="fade-up">
                        <div className="lg:p-6 md:p-2 sm:p-2 p-2">
                            <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10  h-7 w-7 flex justify-center items-center text-center mx-auto border border-white rounded-full">
                                <i className="lg:text-2xl md:text-sm sm:text-sm text-xs flex justify-center items-center text-center mx-auto fa-regular fa-eye-slash"></i>
                            </div>
                            <p className="font-black lg:text-2xl md:text-base sm:text-base text-base md:mt-2 sm:mt-2 mt-2">
                                تصحيح الإبصار
                            </p>
                            <p className="font-semibold lg:text-base leading-5 lg:mt-5 mt-2 tracking-wider md:text-base sm:text-xs text-xs">
                                الليزك يعتبر من اشهر عمليات تصحيح الإبصار
                                بس فيه اكتر من ١٠ عمليات تصحيح ابصار اخرى ده غير زراعة
                                العدسات اللى بنلجألها فى حالات قصر او طول النظر الشديد
                                . يتم تحديد الخيار المناسب لتصحيح الإبصار
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBest;
