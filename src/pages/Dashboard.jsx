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
      <nav className="w-full h-[95px] flex items-center justify-center bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="w-full max-w-[1320px] px-5 md:px-0 flex items-center justify-between">
          {/* LOGO */}
          <h2 className="text-[#2F6FED] font-semibold text-[22px] tracking-wide">
            DigiLedger
          </h2>

          {/* MENU */}
          <ul className="hidden md:flex gap-[40px] text-[16px] text-gray-600 font-medium">
            <li className="cursor-pointer hover:text-gray-900 transition">Dummy Text</li>
            <li className="cursor-pointer hover:text-gray-900 transition">Dummy Text</li>
            <li className="cursor-pointer hover:text-gray-900 transition">Dummy Text</li>
            <li className="cursor-pointer hover:text-gray-900 transition">Dummy Text</li>
            <li className="cursor-pointer hover:text-gray-900 transition">Dummy Text</li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            <span className="text-2xl text-gray-500 cursor-pointer">🔍</span>
            <button className="w-[140px] h-[48px] bg-[#2F6FED] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#2563eb] transition">
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full flex justify-center pt-8 pb-12">
        <div className="w-full max-w-[1320px] h-[695px] flex items-center justify-between gap-[100px] px-5 md:px-0">
          {/* LEFT TEXT */}
          <div className="w-full max-w-[500px]">
            <h1 className="text-[48px] leading-[60px] font-semibold mb-6">
              Lorem ipsum{" "}
              <span className="text-[#2F6FED]">dolor sit amet consectetur</span>. Sed Lorem malesuada pellentesque id
            </h1>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
            </p>
            <button className="w-[140px] h-[48px] bg-[#2F6FED] text-white rounded-[8px] text-[15px] font-medium hover:bg-[#2563eb] transition">
              Get in Touch
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={laptop1}
              alt="Hero Dashboard"
              className="w-full max-w-[820px] h-[687px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1320px] px-5 md:px-0">
          <div className="bg-[#eaf1fb] rounded-[16px] h-[239px] flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 px-8 md:px-[60px]">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="text-center flex-1 min-w-[140px]">
                <h2 className="text-[#2F6FED] text-[48px] font-semibold">15+</h2>
                <p className="text-gray-600 text-[15px] mt-1 leading-tight">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BIG CARD SECTION ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-[1320px] px-5 md:px-0">
          <div className="bg-[#f3f6f9] rounded-[20px] py-[60px] px-6 md:px-[40px] text-center">
            <h2 className="text-[32px] font-semibold mb-6 leading-tight">
              Lorem ipsum Lorem ipsum dolor <br /> Lorem ipsum dolor
            </h2>
            <p className="max-w-[845px] mx-auto text-gray-600 text-[16px] leading-relaxed mb-12">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            <div className="flex justify-center mb-12">
              <img
                src={laptop2}
                alt="Big Feature"
                className="w-full max-w-[1119px] h-auto object-contain"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[16px] w-full sm:w-[247px] h-[183px] p-6 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="w-11 h-11 bg-[#eaf1fb] rounded-[10px] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[#2F6FED] text-2xl">folder_supervised</span>
                  </div>
                  <h3 className="text-[#2F6FED] font-medium text-[16px] mb-2">Lorem ipsum</h3>
                  <p className="text-[13px] text-gray-600 leading-tight">
                    viverra nulla Ut vivamus purus nunc integer quis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
<section className="w-full flex justify-center mt-[100px]">
  <div className="w-[1320px] h-[789px] flex flex-col items-center justify-center relative">

    {/* IMAGE */}
    <img
      src={keyfeature}
      className="w-[1119px] h-[706px] object-contain"
    />

  </div>
</section>

      {/* ================= SHOWCASE 1 ================= */}
      <section className="w-full flex justify-center bg-[#f3f6f9] py-[100px]">
        <div className="w-full max-w-[1320px] px-5 md:px-0 flex flex-col md:flex-row items-center gap-[60px] md:gap-[100px]">
          {/* IMAGE */}
          <div className="flex justify-center md:w-[708px]">
            <img
              src={sidephone}
              alt="Dashboard UI"
              className="w-full max-w-[708px] h-auto object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:max-w-[521px]">
            <h2 className="text-[32px] leading-[1.3] font-semibold mb-6">
              Lorem ipsum <span className="text-[#2F6FED]">Lorem ipsum</span> dolor Lorem ipsum dolor
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.
            </p>

            <div className="flex flex-wrap gap-5">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[12px] w-[130px] p-4 text-center shadow-sm"
                >
                  <div className="w-10 h-10 mx-auto mb-3 bg-[#eaf1fb] rounded-[8px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#2F6FED]">folder_supervised</span>
                  </div>
                  <p className="text-[13px] text-gray-700">Lorem ipsum</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHOWCASE 2 ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-[1320px] px-5 md:px-0 py-[80px] flex flex-col md:flex-row items-center gap-[60px] md:gap-[100px]">
          {/* TEXT LEFT */}
          <div className="w-full md:max-w-[701px]">
            <h2 className="text-[32px] font-semibold mb-6 leading-tight">
              Lorem ipsum <span className="text-[#2F6FED]">Lorem ipsum</span> dolor
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-10">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[12px] h-[148px] flex flex-col items-center justify-center shadow-sm"
                >
                  <div className="w-10 h-10 mb-3 bg-[#eaf1fb] rounded-[8px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#2F6FED]">folder_supervised</span>
                  </div>
                  <p className="text-[13px] text-gray-700">Lorem ipsum</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE RIGHT */}
          <div className="flex justify-center md:w-[702px]">
            <img
              src={phone}
              alt="Mobile App"
              className="w-full max-w-[702px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-[1320px] px-5 md:px-0">
          <div className="bg-gradient-to-r from-[#2F6FED] to-[#4A8BFF] rounded-[20px] px-8 md:px-10 py-10 md:py-0 md:h-[261px] flex flex-col md:flex-row items-center justify-between gap-8">
            <img
              src={image}
              alt="Expert"
              className="w-[120px] md:w-[143px] h-auto"
            />

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white text-[24px] font-semibold leading-tight">
                Get your application developed by our certified experts today!
              </h3>
            </div>

            <button className="w-[152px] h-[54px] bg-white text-[#2F6FED] rounded-[8px] text-sm font-medium hover:bg-gray-100 transition whitespace-nowrap">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full flex justify-center mt-[120px]">
        <div className="w-full max-w-[1320px] px-5 md:px-0 text-center">
          <h2 className="text-[28px] leading-[36px] font-semibold mb-3">
            Your <span className="text-[#2F6FED]">Perfect Experience</span>, Just a Tap Away!
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-600 text-[16px] mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <img src={playstore} alt="Google Play" className="h-12 cursor-pointer" />
            <img src={appstore} alt="App Store" className="h-12 cursor-pointer" />
          </div>
        </div>
      </footer>

      {/* Bottom Strip */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</div>
          <div className="flex gap-6 text-xl mt-3 md:mt-0">
            <span className="cursor-pointer hover:text-gray-800">f</span>
            <span className="cursor-pointer hover:text-gray-800">𝕏</span>
            <span className="cursor-pointer hover:text-gray-800">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;