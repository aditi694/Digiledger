import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import keyfeature from "../assets/keyfeature.png";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import phone from "../assets/phone.png";
import sidephone from "../assets/sidephone.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import phone1 from "../assets/phone1.png";
import keyfeature1 from "../assets/keyfeature1.png";
import cta from "../assets/cta.png";
import cta_background from "../assets/cta_back.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";

const Dashboard = () => {
  const [showFeature, setShowFeature] = React.useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  const [darkMode, setDarkMode] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFeature(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white-custom font-sans text-main transition-colors duration-300">

      {/* ================= NAVBAR ================= */}
      <nav className="w-full h-[95px] flex items-center justify-center border-b border-light sticky top-0 bg-white-custom transition-colors duration-300 z-50">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex items-center justify-between">

          <img src={logo} className="w-[105px] h-[29px]" />

          <ul className="hidden lg:flex gap-[48px] text-[16px] text-muted">
            <li>Dummy Text</li>
            <li>Dummy Text</li>
            <li>Dummy Text</li>
            <li>Dummy Text</li>
            <li>Dummy Text</li>
          </ul>

          <div className="flex items-center gap-[16px]">

            {/*DARK MODE */}
            <button onClick={() => setDarkMode(!darkMode)} className="text-[20px]">
              {darkMode ? "☀️" : "🌙"}
            </button>

            <img src={search} className="w-[19px] h-[19px]" />

            <button className="hidden lg:flex h-[35px] px-[16px] rounded-[6px] text-white text-[14px] bg-primary items-center">
              Get in Touch
            </button>

            {/* HAMBURGER */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white-custom shadow-md flex flex-col items-center gap-6 py-6 text-muted transition-colors duration-300">
          <span>Dummy Text</span>
          <span>Dummy Text</span>
          <span>Dummy Text</span>
          <span>Dummy Text</span>

          <button className="h-[40px] px-[20px] rounded-[6px] bg-primary text-white">
            Get in Touch
          </button>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="flex justify-center pt-[32px] pb-[48px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 xl:h-[695px] flex flex-col xl:flex-row items-center justify-between gap-[60px]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="w-full xl:w-[500px] flex flex-col gap-[48px]"
          >
            <h1 className="w-full xl:w-[510px] text-[40px] leading-[48px] tracking-[-0.5px] font-semibold">
              Lorem ipsum{" "}
              <span className="text-primary">
                dolor sit amet consectetur
              </span>. Sed Lorem malesuada pellentesque id
            </h1>

            <p className="xl:w-[500px] text-[20px] leading-[28px] text-muted">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
            </p>

            <button className="h-[48px] w-[140px] rounded-[8px] bg-primary text-white text-[15px] font-medium">
              Get in Touch
            </button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="w-full xl:w-[820px] flex justify-center"
          >
            <img src={laptop1} className="w-full max-w-[820px] object-contain" />
          </motion.div>

        </div>
      </section >

      {/* ================= STATS ================= */}
      < section className="flex justify-center mt-[120px]" >
        <div className="w-full xl:w-[1320px] px-4 xl:px-0">
          <div className="bg-soft rounded-[30px] xl:h-[239px] flex flex-wrap xl:flex-nowrap items-center justify-between px-[50px] py-[30px] gap-[40px] xl:gap-[70px]">

            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="xl:w-[261px] flex flex-col gap-[30px]">
                <h2 className="text-primary text-[80px] leading-[100px] font-semibold">
                  15+
                </h2>
                <p className="text-main text-[16px] leading-[22px]">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
              </div>
            ))}

          </div>
        </div>
      </section >

      {/* ================= BIG CARD ================= */}
      < section className="flex justify-center mt-[120px]" >
        <div className="w-full xl:w-[1320px] px-4 xl:px-[145px] bg-light rounded-[24px] py-[72px] flex flex-col items-center">

          <h2 className="xl:w-[728px] text-[40px] leading-[48px] tracking-[-0.5px] font-semibold text-center mb-[24px]">
            Lorem ipsum <span className="text-primary">Lorem ipsum</span> dolor <br /> Lorem ipsum dolor
          </h2>

          <p className="xl:w-[845px] text-muted text-[20px] leading-[28px] text-center mb-[57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.
          </p>

          <motion.img
            src={laptop2}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[1119px] mb-[57px]"
          />

          <div className="w-full xl:w-[1138px] flex flex-wrap xl:flex-nowrap justify-center gap-[20px]">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-[247px] h-[182.75px] bg-white-custom rounded-[18px] p-[16px] flex flex-col items-center text-center gap-[16.8px]"
                style={{
                  boxShadow: "0px 4px 30px rgba(0,0,0,0.1)"
                }}
              >

                {/* ICON */}
                <div className="w-[42.08px] h-[42.08px] bg-[#1D61E71A] rounded-[10px] flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-[#1D61E7]"
                    style={{
                      fontSize: "30px",
                      lineHeight: "30px"
                    }}
                  >
                    folder_supervised
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="w-[180px] text-[20px] font-semibold leading-[32px] text-primary">
                  Lorem ipsum dolor
                </h3>

                {/* TEXT */}
                <p className="w-[215px] text-[14px] leading-[20px] text-muted">
                  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo fg
                </p>

              </div>
            ))}

          </div>
        </div>
      </section >

      {/* ================= KEY FEATURES ================= */}
      < section className="flex justify-center mt-[120px]" >
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 flex justify-center">
          <motion.img
            src={showFeature ? keyfeature : keyfeature1}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeOut"
            }}
            className="w-full xl:w-[1320px]"
          />
        </div>
      </section >

      {/* ================= SHOWCASE 1 ================= */}
      < section className="flex justify-center mt-[120px]" >
        <div className="w-full xl:w-[1320px] px-4 xl:px-0">

          <div className="bg-light rounded-[24px] xl:h-[642px] flex items-center justify-center">

            <div className="w-full xl:w-[1257px] xl:h-[434px] flex flex-col xl:flex-row items-center justify-between gap-[60px]">

              <div className="w-full xl:w-[708px] xl:h-[434px] flex justify-center">
                <img
                  src={sidephone}
                  alt="Dashboard UI"
                  className="w-full max-w-[708px] xl:h-[434px] object-contain"
                />
              </div>

              <div className="w-full xl:w-[521px] xl:h-[417px] flex flex-col justify-between">

                <div>
                  <h2 className="xl:w-[521px] text-[32px] leading-[40px] font-semibold mb-[16px]">
                    Lorem ipsum{" "}
                    <span className="text-primary">Lorem ipsum</span> dolor Lorem ipsum dolor
                  </h2>

                  <p className="xl:w-[512px] text-muted text-[16px] leading-[24px] mb-[24px]">
                    Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.
                  </p>
                </div>

                <div className="w-full xl:w-[496px] xl:h-[134px] flex gap-[20px] justify-center xl:justify-start">

                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="w-[158px] h-[134px] bg-white-custom rounded-[11.7px] p-[9px] flex flex-col items-center justify-center gap-[10.9px]"
                      style={{
                        boxShadow: "0px 3.6px 27px rgba(0,0,0,0.1)"
                      }}
                    >
                      <div className="w-[48.6px] h-[48.6px] bg-[#1D61E71A] rounded-[10px] flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-[#1D61E7]"
                          style={{
                            fontSize: "34px",
                            lineHeight: "34px"
                          }}
                        >
                          folder_supervised
                        </span>
                      </div>

                      <p className="text-[13px] text-muted text-center leading-[18px]">
                        Lorem ipsum
                      </p>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ================= SHOWCASE 2 ================= */}
      <section ref={sectionRef} className="flex justify-center mt-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full xl:w-[1320px] px-4 xl:px-0 flex flex-col xl:flex-row items-center justify-between gap-[80px]"
        >
          <div className="w-full xl:w-[701px] xl:h-[626px] flex flex-col justify-between">
            <div className="w-full xl:w-[701px] xl:h-[536px]">
              <h2 className="xl:w-[701px] text-[32px] leading-[40px] font-semibold mb-[16px]">
                Lorem ipsum <span className="text-primary">Lorem ipsum</span> dolor
              </h2>

              <p className="xl:w-[601px] text-muted text-[16px] leading-[26px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.Lorem ipsum dolor sit amet consectetur.
              </p>

              <div className="w-full max-w-[582px] xl:w-[582px] grid grid-cols-2 sm:grid-cols-3 gap-[20px]">

                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <div
                    key={i}
                    className="w-[176px] h-[149px] bg-white-custom rounded-[13px] flex flex-col items-center justify-center gap-[12px] p-[12px]"
                    style={{
                      boxShadow: "0px 4px 30px rgba(0,0,0,0.1)"
                    }}
                  >
                    <div className="w-[54px] h-[54px] bg-[#1D61E71A] rounded-[12px] flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-[#1D61E7]"
                        style={{
                          fontSize: "29px",
                          lineHeight: "29px"
                        }}
                      >
                        folder_supervised
                      </span>
                    </div>

                    <p className="w-[151px] text-[13px] text-muted text-center leading-[18px]">
                      Lorem ipsum
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="w-full xl:w-[702px] xl:h-[787px] flex justify-center">

            <motion.img
              key={isInView ? "phone" : "phone1"}
              src={isInView ? phone : phone1}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[702px] xl:h-[787px] object-contain"
            />

          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0">
          <div className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-[24px] xl:h-[261px] flex flex-col xl:flex-row items-center justify-between px-[48px] py-[32px]">

            {/* LEFT GRID */}
            <div
              className="absolute left-[-180px] top-1/2 -translate-y-1/2 w-[489px] h-[451px] opacity-100 z-0"
              style={{
                transform: "translateY(-50%) rotate(-110.63deg)",
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* RIGHT GRID */}
            <div
              className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[489px] h-[451px] opacity-100 z-0"
              style={{
                transform: "translateY(-50%) rotate(-69.37deg)",
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-between gap-[40px]">

              <div className="relative w-[173px] h-[173px] flex items-center justify-center">
                <img
                  src={cta_background}
                  className="absolute w-[171px] h-[173px] object-contain"
                />
                <img
                  src={cta}
                  className="relative w-[143px] h-[165px] object-contain z-10"
                />
              </div>

              <h3 className="w-full xl:max-w-[849px] text-white text-[40px] leading-[48px] font-medium text-center xl:text-left">
                Get your application developed by our certified experts today!
              </h3>

              <button className="h-[54px] px-[28px] rounded-[8px] bg-white-custom text-primary font-medium relative z-10">
                Schedule a Call
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      < footer className="flex justify-center mt-[100px]" >
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

    </div >
  );
};

export default Dashboard;