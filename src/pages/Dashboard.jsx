import React, { useState, useEffect } from "react";
import image from "../assets/download.png";
// import { getStyles } from "../components/Dashboard.styles";

const Dashboard = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const check = () => setIsMobile(window.innerWidth < 768);
  //   check();
  //   window.addEventListener("resize", check);
  //   return () => window.removeEventListener("resize", check);
  // }, []);

  // const styles = getStyles(isMobile);

  // const layout = {
  //   section: {
  //     padding: isMobile ? "60px 20px" : "100px 20px",
  //   },
  //   container: {
  //     maxWidth: "1320px",
  //     margin: "0 auto",
  //     width: "100%",
  //   },
  // };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full h-[95px] flex items-center justify-center bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full max-w-[1320px] flex items-center justify-between px-5">

          {/* LOGO */}
          <h2 className="text-[#2F6FED] font-semibold text-[22px] tracking-wide">
            DigiLedger
          </h2>

          {/* MENU */}
          <ul className="hidden md:flex gap-[40px] text-[16px] text-gray-600">
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
            <li className="cursor-pointer">Dummy Text</li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[20px]">
            <span className="text-xl text-gray-500 cursor-pointer">🔍</span>

            <button className="w-[140px] h-[48px] bg-[#2F6FED] text-white rounded-[8px] text-[14px] font-medium">
              Get in Touch
            </button>
          </div>

        </div>
      </nav>
      {/* ================= HERO ================= */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1320px] flex flex-col md:flex-row items-center justify-between px-5 py-[80px] gap-[40px] md:gap-[100px]">

          {/* LEFT TEXT */}
          <div className="max-w-[500px] text-center md:text-left">
            <h1 className="text-[32px] md:text-[42px] leading-[1.3] mb-5">
              Lorem ipsum{" "}
              <span className="text-[#2F6FED]">
                dolor sit amet consectetur
              </span>
              . Sed Lorem malesuada pellentesque id
            </h1>

            <p className="text-gray-600 mb-5 text-[16px] md:text-[18px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et
              viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien
              vestibulum risus vitae donec blandit vel nisi.
            </p>

            <button className="w-[140px] h-[48px] bg-[#2F6FED] text-white rounded-[8px] text-[14px] font-medium">
              Get in Touch
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[820px] flex justify-center">
            <img
              src={image}
              alt="Hero"
              className="w-full max-w-[820px] h-auto"
            />
          </div>

        </div>
      </section>
      {/* ================= STATS ================= */}
      <section className="w-full flex justify-center mt-[60px]">
        <div className="w-full max-w-[1320px] px-5">

          {/* BLUE CARD */}
          <div className="bg-[#eaf1fb] rounded-[16px] py-[40px] px-[20px] md:px-[60px] flex flex-wrap md:flex-nowrap justify-between items-center gap-[30px] text-center">

            {/* ITEM */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex-1 min-w-[140px]">
                <h2 className="text-[#2F6FED] text-[28px] md:text-[36px] font-semibold">
                  15+
                </h2>
                <p className="text-[14px] md:text-[16px] text-gray-600 mt-1">
                  Lorem ipsum Lorem ipsum
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= BIG CARD SECTION ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-[1320px] px-5">

          {/* BIG CARD */}
          <div className="bg-[#f3f6f9] rounded-[20px] py-[60px] px-[20px] md:px-[40px] text-center">

            {/* TITLE */}
            <h2 className="text-[24px] md:text-[32px] font-semibold mb-[20px]">
              Lorem ipsum Lorem ipsum dolor <br />
              Lorem ipsum dolor
            </h2>

            {/* TEXT */}
            <p className="max-w-[845px] mx-auto text-gray-600 text-[15px] md:text-[16px] leading-[1.6] mb-[40px]">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et
              viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            {/* IMAGE */}
            <div className="flex justify-center mb-[40px]">
              <img
                src={image}
                alt="Big Feature"
                className="w-full max-w-[900px] md:max-w-[1119px] h-auto"
              />
            </div>

            {/* CARDS */}
            <div className="flex flex-wrap justify-center gap-[20px]">

              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-[16px] w-[220px] md:w-[247px] p-[20px] shadow-sm"
                >
                  {/* ICON */}
                  <div className="w-[45px] h-[45px] mx-auto mb-[12px] flex items-center justify-center bg-[#eaf1fb] rounded-[10px]">
                    <span className="material-symbols-outlined text-[#2F6FED] text-[22px]">
                      folder_supervised
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#2F6FED] text-[16px] font-medium mb-[6px]">
                    Lorem ipsum
                  </h3>

                  {/* TEXT */}
                  <p className="text-[13px] text-gray-600 leading-[1.4]">
                    viverra nulla Ut vivamus purus nunc integer quis.
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
      {/* ================= KEY FEATURES ================= */}
      <section className="w-full flex justify-center mt-[100px] mb-[100px]">
        <div className="w-full max-w-[1320px] px-5 text-center">

          {/* TITLE */}
          <h2 className="text-[24px] md:text-[32px] font-semibold mb-[40px]">
            Key Features
          </h2>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Key Features"
              className="w-full max-w-[350px] md:max-w-[420px] h-auto"
            />
          </div>

        </div>
      </section>

      {/* ================= SHOWCASE 1 ================= */}
      <section className="w-full flex justify-center bg-[#f3f6f9] mt-[100px]">
        <div className="w-full max-w-[1320px] px-5 py-[80px] flex flex-col md:flex-row items-center justify-between gap-[60px] md:gap-[100px]">

          {/* IMAGE LEFT */}
          <div className="w-full md:w-[708px] flex justify-center">
            <img
              src={image}
              alt="Dashboard UI"
              className="w-full max-w-[708px] h-auto"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="w-full md:max-w-[521px]">

            {/* TITLE */}
            <h2 className="text-[24px] md:text-[32px] font-semibold mb-[20px] leading-[1.3]">
              Lorem ipsum{" "}
              <span className="text-[#2F6FED]">Lorem ipsum</span> dolor Lorem ipsum dolor
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.6] mb-[30px]">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et
              viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien
              vestibulum risus vitae donec blandit vel nisi.
            </p>

            {/* CARDS (LEFT ALIGNED — IMPORTANT) */}
            <div className="flex gap-[20px] flex-wrap md:flex-nowrap">

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-[12px] w-[130px] p-[16px] text-center shadow-sm"
                >
                  {/* ICON */}
                  <div className="w-[40px] h-[40px] mx-auto mb-[10px] flex items-center justify-center bg-[#eaf1fb] rounded-[8px]">
                    <span className="material-symbols-outlined text-[#2F6FED] text-[20px]">
                      folder_supervised
                    </span>
                  </div>

                  {/* TEXT */}
                  <p className="text-[13px] text-gray-700">
                    Lorem ipsum
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= SHOWCASE 2 ================= */}
      <section className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-[1320px] px-5 py-[80px] flex flex-col md:flex-row items-center justify-between gap-[60px] md:gap-[100px]">

          {/* TEXT LEFT */}
          <div className="w-full md:max-w-[701px]">

            {/* TITLE */}
            <h2 className="text-[24px] md:text-[32px] font-semibold mb-[20px] leading-[1.3]">
              Lorem ipsum{" "}
              <span className="text-[#2F6FED]">Lorem ipsum</span> dolor
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.6] mb-[30px]">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et
              viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            {/* GRID (6 CARDS) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">

              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-[12px] p-[16px] text-center shadow-sm"
                >
                  {/* ICON */}
                  <div className="w-[40px] h-[40px] mx-auto mb-[10px] flex items-center justify-center bg-[#eaf1fb] rounded-[8px]">
                    <span className="material-symbols-outlined text-[#2F6FED] text-[20px]">
                      folder_supervised
                    </span>
                  </div>

                  {/* TEXT */}
                  <p className="text-[13px] text-gray-700">
                    Lorem ipsum
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* IMAGE RIGHT */}
          <div className="w-full md:w-[702px] flex justify-center">
            <img
              src={image}
              alt="Mobile UI"
              className="w-full max-w-[702px] h-auto"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full flex justify-center mt-[100px] mb-[100px]">
        <div className="w-full max-w-[1320px] px-5">

          {/* BLUE BOX */}
          <div className="bg-gradient-to-r from-[#2F6FED] to-[#4A8BFF] rounded-[20px] px-[20px] md:px-[40px] py-[30px] md:py-[40px] flex flex-col md:flex-row items-center justify-between gap-[30px]">

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={image}
                alt="CTA"
                className="w-[80px] md:w-[143px] h-auto"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white text-[18px] md:text-[24px] font-semibold leading-[1.4]">
                Get your application developed by our certified experts today!
              </h3>
            </div>

            {/* BUTTON */}
            <button className="w-[152px] h-[54px] bg-white text-[#2F6FED] rounded-[10px] text-[14px] font-medium">
              Schedule a Call
            </button>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-[1320px] px-5 text-center">

          {/* TITLE */}
          <h2 className="text-[24px] md:text-[32px] font-semibold mb-[10px]">
            Your <span className="text-[#2F6FED]">Perfect Experience</span>, Just a Tap Away!
          </h2>

          {/* TEXT */}
          <p className="max-w-[600px] mx-auto text-gray-600 text-[15px] md:text-[16px] mb-[30px] leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex justify-center gap-[20px] flex-wrap mb-[40px]">
            <img
              src={image}
              alt="Google Play"
              className="w-[140px] cursor-pointer"
            />
            <img
              src={image}
              alt="App Store"
              className="w-[140px] cursor-pointer"
            />
          </div>

        </div>
      </footer>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="w-full border-t border-gray-200 flex justify-center">
        <div className="w-full max-w-[1320px] px-5 py-[15px] flex flex-col md:flex-row items-center justify-between gap-[10px] text-[14px] text-gray-500">

          {/* LEFT TEXT */}
          <div>
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </div>

          {/* ICONS */}
          <div className="flex gap-[15px] text-[18px]">
            <span className="cursor-pointer">f</span>
            <span className="cursor-pointer">𝕏</span>
            <span className="cursor-pointer">▶</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;