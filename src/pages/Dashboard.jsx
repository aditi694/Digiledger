import React from "react";
import image from "../assets/download.png";
import keyfeature from "../assets/keyfeature.png";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import phone from "../assets/phone.png";
import sidephone from "../assets/sidephone.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const Dashboard = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white font-sans text-[#08060D]">

      {/* ================= NAVBAR ================= */}
      <nav className="w-full h-[95px] flex items-center justify-center border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex items-center justify-between">

          <h2 className="text-[#2F6FED] font-semibold text-[22px]">
            DigiLedger
          </h2>

          <ul className="hidden lg:flex gap-[48px] text-[16px] text-[#6B6375]">
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
          </ul>

          <div className="flex items-center gap-[20px]">
            <span className="text-[20px] text-[#6B6375] cursor-pointer">🔍</span>
            <button className="h-[35px] px-[16px] rounded-[6px] text-white text-[14px] font-medium flex items-center justify-center bg-[#2F6FED]">
              Get in Touch
            </button>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="flex justify-center pt-[32px] pb-[48px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 xl:h-[695px] flex flex-col xl:flex-row items-center justify-between gap-[60px]">

          <div className="w-full xl:w-[500px] flex flex-col gap-[48px]">

            <h1 className="w-full xl:w-[657px] text-[40px] leading-[48px] tracking-[-0.5px] font-semibold">
              Lorem ipsum{" "}
              <span className="text-[#2F6FED]">
                dolor sit amet consectetur
              </span>. Sed Lorem malesuada pellentesque id
            </h1>

            <p className="xl:w-[500px] text-[20px] leading-[28px] text-[#6B6375]">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            <button className="h-[48px] w-[140px] rounded-[8px] bg-[#2F6FED] text-white text-[15px] font-medium">
              Get in Touch
            </button>

          </div>

          <div className="w-full xl:w-[820px] flex justify-center">
            <img src={laptop1} className="w-full max-w-[820px] object-contain" />
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0">
          <div className="bg-[rgba(69,140,250,0.1)] rounded-[30px] xl:h-[239px] flex flex-wrap xl:flex-nowrap items-center justify-between px-[50px] py-[30px] gap-[40px] xl:gap-[70px]">

            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="xl:w-[261px] flex flex-col gap-[30px]">
                <h2 className="text-[#2F6FED] text-[80px] leading-[100px] font-semibold">
                  15+
                </h2>
                <p className="text-[#08060D] text-[16px] leading-[22px]">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BIG CARD ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-[145px] bg-[#F3F6F9] rounded-[24px] py-[72px] flex flex-col items-center">

          <h2 className="xl:w-[728px] text-[40px] leading-[48px] tracking-[-0.5px] font-semibold text-center mb-[24px]">
            Lorem ipsum Lorem ipsum dolor <br /> Lorem ipsum dolor
          </h2>

          <p className="xl:w-[845px] text-[#6B6375] text-[20px] leading-[28px] text-center mb-[57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
          </p>

          <img src={laptop2} className="w-full max-w-[1119px] mb-[57px]" />

          <div className="w-full xl:w-[1138px] flex flex-wrap xl:flex-nowrap justify-center gap-[20px]">

            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-[247px] min-h-[182px] bg-white rounded-[18px] p-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
              >
                <div className="w-[44px] h-[44px] bg-[#eaf1fb] rounded-[10px] flex items-center justify-center mb-[12px]">
                  <span className="material-symbols-outlined text-[#2F6FED] text-[22px]">
                    folder_supervised
                  </span>
                </div>
                <h3 className="text-[#2F6FED] text-[16px] mb-[6px]">
                  Lorem ipsum
                </h3>
                <p className="text-[13px] text-[#6B6375]">
                  viverra nulla Ut vivamus purus nunc integer quis.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex justify-center">
          <img src={keyfeature} className="w-full xl:w-[1320px]" />
        </div>
      </section>

      {/* ================= SHOWCASE 1 ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0">

          {/* OUTER BOX */}
          <div className="bg-[#F3F6F9] rounded-[24px] xl:h-[642px] flex items-center justify-center">

            {/* INNER CONTENT (IMPORTANT - restores Figma layout) */}
            <div className="w-full xl:w-[1257px] xl:h-[434px] flex flex-col xl:flex-row items-center justify-between gap-[60px]">

              {/* IMAGE */}
              <div className="w-full xl:w-[708px] xl:h-[434px] flex justify-center">
                <img
                  src={sidephone}
                  alt="Dashboard UI"
                  className="w-full max-w-[708px] xl:h-[434px] object-contain"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="w-full xl:w-[521px] xl:h-[417px] flex flex-col justify-between">

                {/* TEXT */}
                <div>
                  <h2 className="xl:w-[521px] text-[32px] leading-[40px] font-semibold mb-[16px]">
                    Lorem ipsum{" "}
                    <span className="text-[#2F6FED]">Lorem ipsum</span> dolor Lorem ipsum dolor
                  </h2>

                  <p className="xl:w-[512px] text-[#6B6375] text-[16px] leading-[24px] mb-[24px]">
                    Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.
                  </p>
                </div>

                {/* CARDS */}
                <div className="w-full xl:w-[496px] xl:h-[134px] flex gap-[20px] justify-center xl:justify-start">

                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="w-[130px] h-[134px] bg-white rounded-[12px] p-[16px] flex flex-col items-center justify-center 
                shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)]"
                    >
                      {/* ICON */}
                      <div className="w-[40px] h-[40px] mb-[12px] bg-[#eaf1fb] rounded-[8px] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#2F6FED] text-[20px]">
                          folder_supervised
                        </span>
                      </div>

                      {/* TEXT */}
                      <p className="text-[13px] text-[#6B6375] text-center leading-[18px]">
                        Lorem ipsum
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SHOWCASE 2 ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex flex-col xl:flex-row items-center justify-between gap-[80px]">

          {/* TEXT SIDE */}
          <div className="w-full xl:w-[701px] xl:h-[626px] flex flex-col justify-between">

            <div className="w-full xl:w-[701px] xl:h-[536px]">

              {/* TITLE */}
              <h2 className="xl:w-[701px] text-[32px] leading-[40px] font-semibold mb-[16px]">
                Lorem ipsum <span className="text-[#2F6FED]">Lorem ipsum</span> dolor
              </h2>

              {/* PARA */}
              <p className="xl:w-[701px] text-[#6B6375] text-[16px] leading-[26px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et
                viverra nulla Ut vivamus purus nunc integer quis.
              </p>

              {/* GRID */}
              <div className="w-full max-w-[582px] xl:w-[582px] grid grid-cols-2 sm:grid-cols-3 gap-[20px]">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <div
                    key={i}
                    className="w-full xl:w-[175px] h-[148px] bg-white rounded-[12px] flex flex-col items-center justify-center 
              shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)]"
                  >
                    {/* ICON */}
                    <div className="w-[54px] h-[54px] mb-[12px] bg-[#eaf1fb] rounded-[8px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#2F6FED] text-[22px]">
                        folder_supervised
                      </span>
                    </div>

                    {/* TEXT */}
                    <p className="w-[151px] text-[13px] text-[#6B6375] text-center leading-[18px]">
                      Lorem ipsum
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* IMAGE SIDE */}
          <div className="w-full xl:w-[702px] xl:h-[787px] flex justify-center">
            <img
              src={phone}
              alt="Mobile App"
              className="w-full max-w-[702px] xl:h-[787px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0">
          <div className="bg-gradient-to-r from-[#2F6FED] to-[#4A8BFF] rounded-[24px] xl:h-[261px] flex flex-col xl:flex-row items-center justify-between px-[48px] py-[32px]">

            <img src={image} className="w-[143px] h-[165px] object-contain" />
            <h3 className="w-full xl:w-[849px] text-white text-[40px] leading-[48px] font-medium">
              Get your application developed by our certified experts today!
            </h3>

            <button className="h-[54px] px-[28px] rounded-[8px] bg-white text-[#2F6FED] font-medium">
              Schedule a Call
            </button>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="flex justify-center mt-[100px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 text-center">

          <h2 className="text-[40px] leading-[48px] tracking-[-0.5px] font-semibold mb-[16px]">
            Your <span className="text-[#2F6FED]">Perfect Experience</span>, Just a Tap Away!
          </h2>

          <p className="max-w-[658px] mx-auto text-[#6B6375] text-[20px] leading-[28px] mb-[32px]">
            Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
          </p>

          <div className="flex justify-center gap-[12px]">
            <img src={playstore} className="w-[173px] h-[52px] object-contain" />
            <img src={appstore} className="w-[173px] h-[52px] object-contain" />
          </div>

        </div>
      </footer>

      {/* ================= BOTTOM ================= */}
      <div className="flex justify-center border-t mt-[40px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex flex-col sm:flex-row justify-between h-[40px] items-center text-[#6B6375] text-[14px]">

          <div>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</div>

          <div className="flex gap-[16px]">
            <span>f</span>
            <span>𝕏</span>
            <span>▶</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;