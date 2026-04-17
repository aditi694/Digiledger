import React from "react";
import image from "../assets/download.png";           // CTA person image
import keyfeature from "../assets/keyfeature.png";
import laptop1 from "../assets/laptop1.png";         // Hero laptop + phone
import laptop2 from "../assets/laptop2.png";         // Big card section laptop
import phone from "../assets/phone.png";             // Showcase 2 phone
import sidephone from "../assets/sidephone.png";     // Showcase 1 side phone
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const Dashboard = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white font-sans">
      {/* ================= NAVBAR ================= */}
      <nav className="w-full h-[95px] flex items-center justify-center bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-[1320px] flex items-center justify-between">

          {/* LOGO */}
          <h2 className="text-[#2F6FED] font-semibold text-[22px]">
            DigiLedger
          </h2>

          {/* MENU */}
          <ul className="flex gap-[48px] text-[16px] text-gray-600 font-normal">
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[20px]">
            <span className="text-[20px] text-gray-500 cursor-pointer">🔍</span>
            <button className="w-[129px] h-[35px] rounded-[6px] text-white text-[14px] font-medium flex items-center justify-center
        bg-[linear-gradient(90.52deg,#5A9BFF_0.32%,#438AF9_101.64%)]
        border border-transparent
      ">
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full flex justify-center pt-[32px] pb-[48px]">
        <div className="w-[1320px] h-[695px] flex items-center justify-between">

          {/* LEFT TEXT */}
          <div className="w-[500px] h-[360px] flex flex-col gap-[48px]">

            <h1 className="w-[657px] text-[40px] font-semibold leading-[1.2]">
              Lorem ipsum{" "}
              <span className="text-[#2F6FED]">
                dolor sit amet consectetur
              </span>. Sed Lorem malesuada pellentesque id
            </h1>

            <p className="w-[500px] text-[20px] text-gray-600 leading-[1.2]">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            <button className="w-[140px] h-[48px] rounded-[6px] text-white text-[15px] font-medium flex items-center justify-center
        bg-[linear-gradient(90.52deg,#1D61E7_0.32%,#3F7DF6_101.64%)]
        border border-transparent
      ">
              Get in Touch
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[820px] h-[687px] pt-[21px] pr-[82px] pb-[21px] pl-[82px] flex items-center justify-center">
            <img
              src={laptop1}
              alt="Hero Dashboard"
              className="w-[820px] h-[631px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-[1320px] h-[239px] bg-[rgba(69,140,250,0.1)] rounded-[30px] px-[50px] flex items-center">
          <div className="w-[1220px] h-[139px] flex gap-[70px]">

            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-[261px] h-[137px] flex flex-col items-start justify-center gap-[30px]"
              >
                <h2 className="text-[#1D61E7] text-[80px] leading-[100px] font-semibold">
                  15+
                </h2>

                <p className="text-black text-[16px] leading-[22px]">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BIG CARD SECTION ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-[1320px] h-[1396px] bg-[#f3f6f9] rounded-[24px] pt-[72px] pb-[72px] px-[145px] flex flex-col items-center">

          {/* TITLE */}
          <h2 className="w-[728px] text-[40px] font-semibold leading-[1] text-center mb-[24px]">
            Lorem ipsum Lorem ipsum dolor <br /> Lorem ipsum dolor
          </h2>

          {/* DESCRIPTION */}
          <p className="w-[845px] text-[20px] text-gray-600 leading-[1.4] text-center mb-[57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
          </p>

          {/* IMAGE */}
          <div className="mb-[57px]">
            <img
              src={laptop2}
              className="w-[1119px] h-[706px] object-contain"
            />
          </div>

          {/* CARDS */}
          <div className="w-[1138px] h-[183px] flex justify-between">

            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-[247px] h-[183px] bg-white rounded-[18px] p-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] flex flex-col items-center text-center"
              >
                <div className="w-[44px] h-[44px] bg-[#eaf1fb] rounded-[10px] flex items-center justify-center mb-[12px]">
                  <span className="material-symbols-outlined text-[#2F6FED] text-[24px]">
                    folder_supervised
                  </span>
                </div>
                <h3 className="text-[#2F6FED] font-medium text-[16px] mb-[6px]">
                  Lorem ipsum
                </h3>
                <p className="text-[13px] text-gray-600 leading-[1.4]">
                  viverra nulla Ut vivamus purus nunc integer quis.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-[1320px] h-[789px] flex flex-col items-center justify-center">
          <img
            src={keyfeature}
            className="w-[1320px] h-auto object-contain"
          />
        </div>
      </section>

      {/* ================= SHOWCASE 1 ================= */}
      <section className="w-full flex justify-center py-[100px]">
        <div className="w-[1320px] h-[642px] bg-[#f3f6f9] flex items-center justify-center">
          <div className="w-[1257px] h-[434px] flex items-center justify-between">

            {/* IMAGE */}
            <div className="w-[708px] h-[434px] flex justify-center">
              <img
                src={sidephone}
                alt="Dashboard UI"
                className="w-[708px] h-[434px] object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="w-[521px] h-[417px] flex flex-col justify-between">

              <div>
                <h2 className="w-[521px] text-[32px] leading-[1.3] font-semibold mb-[16px]">
                  Lorem ipsum <span className="text-[#2F6FED]">Lorem ipsum</span> dolor Lorem ipsum dolor
                </h2>

                <p className="w-[512px] text-gray-600 text-[16px] leading-relaxed mb-[24px]">
                  Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.
                </p>
              </div>

              {/* CARDS */}
              <div className="w-[496px] h-[134px] flex gap-[20px]">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-[130px] h-[134px] bg-white rounded-[12px] p-[16px] text-center shadow-sm"
                  >
                    <div className="w-[40px] h-[40px] mx-auto mb-[12px] bg-[#eaf1fb] rounded-[8px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#2F6FED]">
                        folder_supervised
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-700">Lorem ipsum</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SHOWCASE 2 ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-[1320px] h-[787px] flex items-center justify-between">

          {/* TEXT LEFT */}
          <div className="w-[701px] h-[626px] flex flex-col justify-between">

            <div className="w-[701px] h-[536px]">

              {/* TITLE */}
              <h2 className="w-[701px] text-[32px] font-semibold leading-[1.3] mb-[16px]">
                Lorem ipsum <span className="text-[#2F6FED]">Lorem ipsum</span> dolor
              </h2>

              {/* PARA */}
              <p className="w-[701px] text-gray-600 text-[16px] leading-[1.8] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
              </p>

              {/* CARDS */}
              <div className="w-[582px] h-[324px] grid grid-cols-3 gap-[20px]">

                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <div
                    key={i}
                    className="w-[175px] h-[148px] bg-white rounded-[12px] flex flex-col items-center justify-center shadow-sm"
                  >
                    <div className="w-[54px] h-[54px] mb-[12px] bg-[#eaf1fb] rounded-[8px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#2F6FED]">
                        folder_supervised
                      </span>
                    </div>

                    <p className="w-[151px] text-[13px] text-gray-700 text-center">
                      Lorem ipsum
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* IMAGE RIGHT */}
          <div className="w-[702px] h-[787px] flex justify-center">
            <img
              src={phone}
              alt="Mobile App"
              className="w-[702px] h-[787px] object-contain"
            />
          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-[1320px] h-[261px] flex items-center">
          <div className="w-[1320px] h-[261px] bg-gradient-to-r from-[#2F6FED] to-[#4A8BFF] rounded-[24px] px-[48px] flex items-center justify-between">

            {/* IMAGE */}
            <div className="w-[143px] h-[165px] flex items-center justify-center">
              <img
                src={image}
                alt="Expert"
                className="w-[143px] h-[165px] object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 mx-[48px]">
              <h3 className="text-white text-[40px] font-medium leading-[1]">
                Get your application developed by our certified experts today!
              </h3>
            </div>

            {/* BUTTON */}
            <button className="w-[152px] h-[54px] bg-white text-[#2F6FED] rounded-[8px] text-[14px] font-medium flex items-center justify-center">
              Schedule a Call
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full flex justify-center mt-[120px]">
        <div className="w-[1320px] h-[367px] flex flex-col items-center justify-center gap-[111px]">

          {/* TEXT BLOCK */}
          <div className="w-[828px] h-[216px] flex flex-col items-center gap-[56px] text-center">

            {/* TITLE + PARA */}
            <div className="w-[828px] h-[108px] flex flex-col gap-[8px]">
              <h2 className="text-[40px] font-semibold leading-[1]">
                Your <span className="text-[#2F6FED]">Perfect Experience</span>, Just a Tap Away!
              </h2>

              <p className="w-[658px] mx-auto text-[20px] leading-[26px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
              </p>
            </div>

            {/* STORE BUTTONS */}
            <div className="w-[360px] h-[52px] flex justify-center gap-[12px]">

              <img
                src={playstore}
                alt="Google Play"
                className="w-[173px] h-[52px] object-contain cursor-pointer"
              />

              <img
                src={appstore}
                alt="App Store"
                className="w-[173px] h-[52px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="w-full flex justify-center border-t border-gray-200">
        <div className="w-[1320px] h-[40px] flex items-center justify-between text-[14px] text-gray-500">
          <div className="w-[358px] leading-[20px]">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </div>
          <div className="w-[95px] flex justify-between items-center">
            <span className="w-[16px] h-[16px] cursor-pointer">f</span>
            <span className="w-[16px] h-[16px] cursor-pointer">𝕏</span>
            <span className="w-[16px] h-[16px] cursor-pointer">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;