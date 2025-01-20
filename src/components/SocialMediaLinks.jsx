import React from "react";
import tik from "../assets/tik-tok-e1715858720319.png";
import instagram from "../assets/instagram-svgrepo-com.svg";
import youtube from "../assets/youtube-svgrepo-com.svg";
import facebook from "../assets/facebook-svgrepo-com.svg";

function SocialMediaLinks() {

    return (
        <React.Fragment>
            <div className="fixed top-[85%] left-10 z-50">
                <div className="absolute bottom-0 -left-5  flex flex-col items-center">



                    <img src={facebook} className=" shadow-md my-1 w-36 rounded-full" alt="facebook" />
                    <img src={youtube} className=" shadow-md my-1 w-14 rounded-full" alt="youtube" />
                    <img src={instagram} className=" shadow-md my-1 w-14 rounded-full" alt="instagram" />

                    <span
                        rel="noopener noreferrer"
                        className="my-1  relative w-14 h-14 bg-white rounded-full shadow-md flex justify-center items-center "
                    >
                        <img src={tik} className="w-8" alt="tik-tok" />
                    </span>
                    <span
                        rel="noopener noreferrer"
                        className=" my-1 relative w-14 h-14 bg-white rounded-full shadow-md flex justify-center items-center "
                    >
                        <i className="fa-brands fa-whatsapp text-green-700 text-3xl z-10"></i>
                    </span>
                </div>
            </div>
            <div className="fixed bottom-10 right-[12rem] z-50">
                <div className="absolute -top-10 -left-[30px] flex items-center group">
                    {/* الزر الأخضر */}
                    <span
                        rel="noopener noreferrer"
                        className="relative w-14 h-14 bg-green-500 
                         rounded-full shadow-md flex justify-center items-center">
                        <i className="fa-brands fa-whatsapp text-white text-3xl z-10"></i>
                    </span>

                    {/* النص المتغير */}
                    <span className="relative shadow-lg bg-white px-3 p-2 rounded-xl mx-3 w-[7rem] text-center transition-all duration-300">
                        <span className="aft group-hover:hidden">
                            Contact us
                        </span>
                        <span className="aft hidden group-hover:inline-block">
                            WhatsApp
                        </span>
                    </span>
                </div>
            </div>

        </React.Fragment>
    );
}

export default SocialMediaLinks;




{/* <span
                            // href="https://www.instagram.com/cench.in/?igsh=dmY4OWFyMGIzZ2Jk"
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-10 h-10 bg-pink-500 rounded-full shadow-md flex justify-center items-center hover:bg-pink-600"
                        >
                                 <i className="fa-brands fa-instagram text-white text-lg z-10"></i>
                        </span> */}

{/* <a
                            href="http://www.tiktok.com/@cench.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-10 h-10 bg-black rounded-full shadow-md flex justify-center items-center hover:bg-pink-600"
                        >
                            <i className="fa-brands fa-tiktok text-white text-lg z-10"></i>
                        </a> */}