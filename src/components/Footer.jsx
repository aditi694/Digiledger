import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Footer = () => {
    return (
        <>
            {/* ================= FOOTER ================= */}
            <footer className="flex justify-center mt-[100px]">
                <div className="w-full xl:w-[1320px] px-[20px] xl:px-0 flex flex-col items-center">

                    <div className="w-full max-w-[828px] flex flex-col items-center gap-[32px] xl:gap-[56px]">

                        {/* TEXT */}
                        <div className="flex flex-col items-center gap-[8px] text-center">
                            <h2 className="
                text-[28px] xl:text-[40px]
                leading-[36px] xl:leading-[40px]
                font-semibold
              ">
                                Your <span className="text-primary">Perfect Experience</span>, Just a Tap Away!
                            </h2>

                            <p className="
                max-w-[658px]
                text-muted
                text-[16px] xl:text-[20px]
                leading-[22px] xl:leading-[26px]
              ">
                                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-center gap-[12px]">
                            <img src={playstore} className="w-[160px] xl:w-[173px] h-[48px] xl:h-[52px] object-contain" />
                            <img src={appstore} className="w-[160px] xl:w-[173px] h-[48px] xl:h-[52px] object-contain" />
                        </div>

                    </div>
                </div>
            </footer>

            {/* ================= BOTTOM ================= */}
            <div className="flex justify-center border-t border-[#FFDE8A] mt-[40px]">
                <div className="
          w-full xl:w-[1320px]
          px-[20px] xl:px-0
          flex flex-col sm:flex-row
          items-center justify-between
          py-[12px]
          text-[14px] text-muted
        ">

                    <div className="text-center sm:text-left">
                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                    </div>

                    <div className="flex gap-[22px] mt-[8px] sm:mt-0">
                        <span>f</span>
                        <span>𝕏</span>
                        <span>▶</span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
