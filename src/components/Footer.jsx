import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Footer = () => {
    return (
        <> < footer className="flex justify-center mt-[100px]" >
            <div className="w-full xl:w-[1320px] px-4 xl:px-0 text-center">

                <h2 className="text-[40px] leading-[48px] tracking-[-0.5px] font-semibold mb-[16px]">
                    Your <span className="text-primary">Perfect Experience</span>, Just a Tap Away!
                </h2>

                <p className="max-w-[658px] mx-auto text-muted text-[20px] leading-[28px] mb-[32px]">
                    Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
                </p>

                <div className="flex justify-center gap-[12px]">
                    <img src={playstore} className="w-[173px] h-[52px] object-contain" />
                    <img src={appstore} className="w-[173px] h-[52px] object-contain" />
                </div>
            </div>
        </footer >

            {/* ================= BOTTOM ================= */}
            < div className="flex justify-center border-t mt-[40px]" >
                <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex flex-col sm:flex-row justify-between h-[40px] items-center text-muted text-[14px]">

                    <div>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</div>
                    <div className="flex gap-[16px]">
                        <span>f</span>
                        <span>𝕏</span>
                        <span>▶</span>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Footer;
