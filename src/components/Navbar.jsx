import { useEffect, useState } from "react";
import dr from "../assets/abd-el-rahman-web-01.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // غير الرقم حسب حاجتك
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [isOpen, setIsOpen] = useState(false); // فتح القائمة الجانبية للموبايل
    const [dropdownOpen, setDropdownOpen] = useState(false); // فتح القائمة الفرعية في الخدمات
    const [dropdownOpen1, setDropdownOpen1] = useState(false); // فتح القائمة الفرعية في الخدمات
    const [dropdownOpen2, setDropdownOpen2] = useState(false); // فتح القائمة الفرعية في الخدمات
    const [dropdownOpen3, setDropdownOpen3] = useState(false); // فتح القائمة الفرعية في الخدمات
    const [dropdownOpen4, setDropdownOpen4] = useState(false); // فتح القائمة الفرعية في الخدمات
    const [dropdownOpen5, setDropdownOpen5] = useState(false); // فتح القائمة الفرعية في الخدمات

    return (
        <>
            <nav className=" md:pb-4 sm:pb-4 lg:p-0 p-0 fixed bg-white left-0 right-0 top-0 z-50  lg:text-[14px] md:text-sm sm:text-base text-base font-black shadow-md">
                <div className={` hidden lg:flex mx-auto bg-[rgb(49,76,91)] py-2 transition-all duration-300  ${isHidden ? 'hidden' : 'flex'}`}>
                    <div className="flex container mx-auto text-white justify-evenly">
                        <div className="text-sm">
                            <i className="fa-brands mx-3 fa-facebook" />
                            <i className="fa-brands mx-3 fa-youtube" />
                            <i className="fa-brands mx-3 fa-instagram" />
                            <i className="fa-brands mx-3 fa-twitter" />
                        </div>
                        <div className="text-sm">
                            <i className="mx-3 fa-solid fa-phone text-sm fa-rotate-270"></i>
                            <span className="tracking-widest font-bold">01118886541</span>
                        </div>
                        <div className="text-sm">
                            <i className="mx-3 fa-brands fa-whatsapp text-lg"></i>
                            <span className="tracking-widest font-bold">01118886541</span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-4 py-3 flex items-center justify-start">
                    {/* الشعار */}
                    <div className="md:w-[50%] sm:w-[50%] lg:w-[24%] w-[50%]">
                        <img src={dr} className="md:w-[60%] sm:w-[100%] lg:w-[60%] w-[100%]" alt="logo" />
                    </div>
                    {/* قائمة الروابط */}
                    <div className="hidden lg:flex">
                        <Link to="/" className="hover:text-gray-400 font-black transition duration-200">
                            الرئيسية
                        </Link>
                        <Link to="/" className="hover:text-gray-400 font-black mx-5 transition duration-200">
                            عن الدكتور
                        </Link>
                        {/* الخدمات */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="hover:text-gray-400 font-black mx-5 transition duration-200 flex items-center">
                                الخدمات
                                <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute top-3/4 bg-white rounded-xl mt-2 -left-20  text-sm shadow-lg">
                                    <div className=" w-72 pt-4">
                                        <div className="gro lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold px-7 p-3 cursor-pointer">
                                            زراعه العدسات
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-270"></i>

                                            <div className="bg-white cursor-pointer hidden group-hover w-80 transition-opacity b p-3 shadow-lg rounded-lg absolute -left-[100%] top-2">
                                                <Link className="block py-2" to="/">
                                                    زراعة عدسات ICL
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    زراعة عدسات Toric
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    زراعة عدسات Toric ICL
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="gro lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold px-7 p-3 cursor-pointer">
                                            تجميل الجفون
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-270"></i>
                                            <div className="hidden group-hover w-80  z-10 transition-opacity bg-white p-3 shadow-lg rounded-lg absolute -left-[100%] top-[15%]">
                                                <Link className="block py-2" to="/">
                                                    حقن الفيلر والبوتكس للجفون
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    عملية تجميل الجفون
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="gro lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold px-7 p-3 cursor-pointer">
                                            جفاف العين
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-270"></i>
                                            <div className="hidden group-hover w-80 z-10 transition-opacity bg-white p-3 shadow-lg rounded-lg absolute -left-[100%] top-1/4">
                                                <Link className="block py-2" to="/">
                                                    جفاف العين
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    جلسات جفاف العين
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="gro lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold px-7 p-3 cursor-pointer">
                                            المياه البيضاء
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-270"></i>
                                            <div className="hidden group-hover w-80 transition-opacity bg-white p-3 shadow-lg rounded-lg absolute -left-[100%] top-1/4">
                                                <Link className="block py-2" to="/">
                                                    زراعة عدسات Toric
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    زراعة عدسات احادية البؤرة
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    زراعة عدسات متعددة البؤر
                                                </Link>
                                                <Link className="block py-2" to="/">
                                                    عملية المياه البيضاء
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="gro lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold px-7 p-3 cursor-pointer">
                                            عمليات تصحيح الابصار
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-270"></i>
                                            <div className="hidden group-hover w-80 z-0 transition-opacity bg-white p-3 shadow-lg rounded-lg absolute -left-[100%] top-1/4">
                                                <Link className="block py-4" to="/">
                                                    الفيمتو ليزك
                                                </Link>
                                                <Link className="block py-4" to="/">
                                                    الليزر السطحي PRK
                                                </Link>
                                                <Link className="block py-4" to="/">
                                                    عملية الكاستم ليزك
                                                </Link>
                                                <Link className="block py-4" to="/">
                                                    عملية الليزك
                                                </Link>
                                                <Link className="block py-4" to="/">
                                                    كونتورا ليزك
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="lg:text-[14px] md:text-base sm:text-base text-bas  font-extrabold px-7 p-3   cursor-pointer">
                                            الفحص الدوري
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/" className="hover:text-gray-400 font-black mx-5 transition duration-200">
                            فيديوهات
                        </Link>
                        <Link to="/" className="hover:text-gray-400 font-black mx-5 transition duration-200">
                            المقالات
                        </Link>
                        <Link to="/" className="hover:text-gray-400 font-black mx-5 transition duration-200">
                            اتصل بنا
                        </Link>
                        <Link to="/" className="hover:text-gray-400 font-black mx-5 transition duration-200">
                            احجز الآن
                        </Link>
                    </div>

                    {/* زر القائمة للهواتف */}
                    <button
                        className="ms-auto mx-10 lg:hidden text-xl focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* القائمة الجانبية للهواتف */}
                {isOpen && (
                    <div className="lg:hidden bg-white overflow-y-auto h-screen">
                        <Link
                            to="/"
                            className="block px-4 py-2 text-[14px] bg-white transition duration-200">
                            الرئيسية
                        </Link>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-[14px] bg-white transition duration-200">
                            عن الدكتور
                        </Link>

                        {/* الخدمات */}
                        <div className="group">
                            <div
                                className="block px-4 py-2 text-[14px] bg-white transition duration-200 cursor-pointer"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                الخدمات
                                <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>

                            </div>
                            {dropdownOpen && (
                                <div className=" bg-white rounded-xl mt-2 -left-20 text-sm shadow-lg">
                                    <div className="group w-72">
                                        <div
                                            onClick={() => setDropdownOpen1(!dropdownOpen1)}
                                            className="px-4 lg:text-[14px] md:text-base 
                                            sm:text-base text-bas font-extrabold py-2 p-6
                                            cursor-pointer">
                                            زراعه العدسات
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>
                                            {dropdownOpen1 && (
                                                <div className="bg-white cursor-pointer p-3">
                                                    <Link className="block py-1" to="/">
                                                        زراعة عدسات ICL
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        زراعة عدسات Toric
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        زراعة عدسات Toric ICL
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            onClick={() => setDropdownOpen2(!dropdownOpen2)}
                                            className="px-4 lg:text-[14px] md:text-base 
                                            sm:text-base text-bas font-extrabold py-2 p-6  
                                             cursor-pointer">
                                            تجميل الجفون
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>

                                            {dropdownOpen2 && (
                                                <div className="cursor-pointer bg-white p-3">
                                                    <Link className="block py-1" to="/">
                                                        حقن الفيلر والبوتكس للجفون
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        عملية تجميل الجفون
                                                    </Link>
                                                </div>
                                            )}

                                        </div>
                                        <div
                                            onClick={() => setDropdownOpen3(!dropdownOpen3)}
                                            className="px-4 lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold py-2 p-6   cursor-pointer">
                                            جفاف العين
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>
                                            {dropdownOpen3 && (
                                                <div className=" bg-white p-3 cursor-pointer">
                                                    <Link className="block py-1" to="/">
                                                        جفاف العين
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        جلسات جفاف العين
                                                    </Link>
                                                </div>
                                            )}

                                        </div>
                                        <div
                                            onClick={() => setDropdownOpen4(!dropdownOpen4)}
                                            className="px-4 lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold py-2 p-6   cursor-pointer">
                                            المياه البيضاء
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>
                                            {dropdownOpen4 && (
                                                <div className="bg-white p-3 cursor-pointer">
                                                    <Link className="block py-1" to="/">
                                                        زراعة عدسات Toric
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        زراعة عدسات احادية البؤرة
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        زراعة عدسات متعددة البؤر
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        عملية المياه البيضاء
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            onClick={() => setDropdownOpen5(!dropdownOpen5)}
                                            className="px-4 lg:text-[14px] md:text-base 
                                         sm:text-base text-bas font-extrabold py-2 p-6  
                                          cursor-pointer">
                                            عمليات تصحيح الابصار
                                            <i className="fa-solid mx-4 fa-caret-up fa-rotate-180"></i>
                                            {dropdownOpen5 && (
                                                <div className="bg-white p-3 cursor-pointer">
                                                    <Link className="block py-1" to="/">
                                                        الفيمتو ليزك
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        الليزر السطحي PRK
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        عملية الكاستم ليزك
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        عملية الليزك
                                                    </Link>
                                                    <Link className="block py-1" to="/">
                                                        كونتورا ليزك
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="px-4 lg:text-[14px] md:text-base sm:text-base text-bas font-extrabold py-2 p-6   cursor-pointer">
                                            الفحص الدوري
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/"
                            className="block px-4 py-2 text-[14px] bg-white transition duration-200"
                        >
                            فيديوهات
                        </Link>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-[14px] bg-white transition duration-200"
                        >
                            المقالات
                        </Link>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-[14px] bg-white transition duration-200"
                        >
                            اتصل بنا
                        </Link>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-[14px] bg-white transition duration-200"
                        >
                            احجز الآن
                        </Link>
                    </div>
                )}
            </nav>
        </>

    );
};

export default Navbar;          