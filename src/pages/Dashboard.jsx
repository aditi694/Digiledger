import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import phone from "../assets/phone.png";
import sidephone from "../assets/sidephone.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import keyfeature1 from "../assets/keyfeature1.png";
import cta from "../assets/cta.png";
import cta_background from "../assets/cta_back.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import arrow3 from "../assets/arrow3.png";
import arrow4 from "../assets/arrow4.png";
import keyphone from "../assets/keyphone.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import MiniCard from "../components/MiniCard";
import GridCard from "../components/GridCard";

const Dashboard = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px"
  });

  const [darkMode, setDarkMode] = React.useState(false);

  const features = [
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo fg",
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo fg",
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo fg",
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolo fg",
    },
  ];

  const miniCards = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

  const gridCards = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setDarkMode(saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="w-full overflow-x-hidden bg-white-custom font-sans text-main transition-colors duration-300">

      {/* ================= NAVBAR ================= */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ================= HERO ================= */}
      <section className="flex justify-center pt-[32px] pb-[48px]">
        <div className="w-full xl:w-[1320px] px-4 xl:px-0 xl:h-[695px] flex flex-col xl:flex-row items-center justify-between gap-[60px]">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className=" w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] xl:max-w-[500px] mx-auto xl:mx-0 flex flex-col gap-[32px] sm:gap-[40px] xl:gap-[48px]" >
            <h1 className="w-full text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] leading-[36px] sm:leading-[40px] md:leading-[44px] xl:leading-[48px] font-semibold tracking-[-0.5px]">
              Lorem ipsum{" "}
              <span className="text-primary">
                dolor sit amet consectetur
              </span>. Sed Lorem malesuada pellentesque id
            </h1>

            <p className="w-full text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] xl:leading-[28px] text-muted">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi. </p>

            <div className="flex justify-start">
              <Button>Get in Touch</Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="w-full xl:w-[58%] flex justify-center">

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileInView={{ y: [0, -10, 0] }}
              viewport={{ once: false }}
              className="w-full max-w-[900px] xl:max-w-[820px] px-[20px] xl:px-[82px]"
            >
              <motion.img
                src={laptop1}
                className="w-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="container-custom">
          <div className="w-full xl:w-[1320px] bg-soft rounded-[30px] px-[20px] xl:px-[50px] py-[40px] xl:py-[50px] flex justify-center">
            {/* INNER WRAPPER (IMPORTANT) */}
            <div className="w-full xl:w-[1220px] flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-[30px] xl:gap-[70px] text-center xl:text-left">

              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className=" w-[220px] sm:w-[240px] xl:w-[261px] flex flex-col gap-[20px] xl:gap-[30px] items-center xl:items-start" >

                  <h2 className="text-primary text-[60px] xl:text-[80px] leading-[70px] xl:leading-[100px] font-semibold">
                    15+
                  </h2>

                  <p className="text-main text-[14px] xl:text-[16px] leading-[20px] xl:leading-[22px]">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ================= BIG CARD ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="container-custom">

          <div className="
      w-full xl:w-[1320px]
      bg-light rounded-[24px]
      flex flex-col items-center
      px-[20px] xl:px-[145px]
      py-[60px] xl:py-[72px]
    ">

            <h2 className="
        w-full max-w-[728px]
        text-[28px] xl:text-[40px]
        leading-[36px] xl:leading-[40px]
        font-semibold text-left xl:text-center
        mb-[20px] xl:mb-[24px]
      ">
              Lorem ipsum <span className="text-primary">Lorem ipsum</span> dolor <br />
              Lorem ipsum dolor
            </h2>

            <p className="
        w-full max-w-[845px]
        text-muted
        text-[16px] xl:text-[20px]
        leading-[24px] xl:leading-[28px]
        text-left xl:text-center
        mb-[40px] xl:mb-[57px]
      ">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.
            </p>

            {/*IMAGE*/}
            <motion.img
              src={laptop2}
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ x: [0, 20, 0] }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[1119px] mb-[40px] xl:mb-[57px]"
            />

            {/* CARDS */}
            <div className="
        w-full xl:w-[1138px]
        flex flex-wrap xl:flex-nowrap
        justify-center xl:justify-between
        gap-[20px] xl:gap-[50px]
      ">
              {features.map((item, i) => (
                <FeatureCard
                  key={i}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="container-custom">

          <div className="relative w-full xl:h-[789px] rounded-[24px] overflow-hidden">

            {/* BACKGROUND */}
            <img
              src={keyfeature1}
              className="absolute inset-0 w-full h-full object-cover dark:brightness-50 dark:contrast-125"
            />

            {/* PHONE*/}
            <motion.img
              src={keyphone}
              initial={{ opacity: 0, scale: 0.85, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                  absolute
                  xl:w-[730px]
                  xl:top-[154px]
                  xl:left-[262px]
                   z-20
              "
            />

            {/*  LEFT TOP */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden xl:block absolute top-[144px] left-[38px] w-[390px]"
            >
              <h3 className="text-[20px] font-medium text-heading mb-[8px]">
                Lorem ipsum
              </h3>
              <p className="text-[20px] leading-[30px] text-soft">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
              </p>
            </motion.div>

            {/*  RIGHT TOP */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden xl:block absolute top-[144px] right-[38px] w-[374px] text-right"
            >
              <h3 className="text-[20px] font-medium text-heading mb-[8px]">
                Lorem ipsum
              </h3>
              <p className="text-[20px] leading-[30px] text-soft">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
              </p>
            </motion.div>

            {/*  RIGHT BOTTOM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden xl:block absolute bottom-[120px] right-[38px] w-[390px] text-right"
            >
              <h3 className="text-[20px] font-medium text-heading mb-[8px]">
                Lorem ipsum
              </h3>
              <p className="text-[20px] leading-[30px] text-soft">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
              </p>
            </motion.div>

            {/*  LEFT BOTTOM  */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="hidden xl:block absolute bottom-[120px] left-[38px] w-[390px]"
            >
              <h3 className="text-[20px] font-medium text-heading mb-[8px]">
                Lorem ipsum
              </h3>
              <p className="text-[20px] leading-[30px] text-soft">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis.
              </p>
            </motion.div>

            {/*  ARROWS  */}
            <motion.img
              src={arrow1}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden xl:block absolute"
              style={{ top: "211.5px", left: "440.5px", width: "82px" }}
            />

            <motion.img
              src={arrow2}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden xl:block absolute"
              style={{ top: "308.7px", left: "962px", width: "157px" }}
            />

            <motion.img
              src={arrow3}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hidden xl:block absolute"
              style={{ top: "451px", left: "798px", width: "125px" }}
            />

            <motion.img
              src={arrow4}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden xl:block absolute"
              style={{ top: "393px", left: "229px", width: "110px" }}
            />

            {/*For Mobile view - only image*/}
            <div className="xl:hidden flex flex-col items-center gap-6 py-10">
              <img src={keyphone} className="w-[85%]" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SHOWCASE 1 ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="container-custom">

          {/* OUTER BOX */}
          <div className="
      bg-light rounded-[24px]
      xl:h-[642px]
      flex items-center justify-center
      px-[20px] xl:px-[36px]
      py-[60px] xl:py-[104px]
    ">

            {/* INNER CONTENT */}
            <div className="
        w-full xl:w-[1257px] xl:h-[434px]
        flex flex-col xl:flex-row
        items-center justify-between
        gap-[40px] xl:gap-[28px]
      ">

              {/* IMAGE */}
              <div className="w-full xl:w-[708px] xl:h-[434px] flex justify-center">
                <img
                  src={sidephone}
                  alt="Dashboard UI"
                  className="w-full max-w-[708px] xl:h-[434px] object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="w-full xl:w-[521px] xl:h-[417px] flex flex-col justify-between">

                <div>
                  <h2 className="
              w-full xl:w-[521px]
              text-[28px] xl:text-[40px]
              leading-[36px] xl:leading-[40px]
              font-medium mb-[16px]
            ">
                    Lorem ipsum{" "}
                    <span className="text-primary">Lorem ipsum</span> dolor Lorem ipsum dolor
                  </h2>

                  <p className="
              w-full xl:w-[512px]
              text-muted
              text-[16px] xl:text-[20px]
              leading-[24px] xl:leading-[30px]
              mb-[24px]
            ">
                    Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.Lorem ipsum dolor sit
                  </p>
                </div>

                {/* CARDS */}
                <div className="
            w-full xl:w-[496px] xl:h-[134px]
            flex flex-wrap xl:flex-nowrap
            justify-center xl:justify-start
            gap-[12px] xl:gap-[10.8px]
          ">
                  {miniCards.map((item, i) => (
                    <MiniCard key={i} title={item} />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHOWCASE 2 ================= */}
      <section className="flex justify-center mt-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" w-full xl:w-[1320px] px-[20px] xl:px-0 flex flex-col xl:flex-row items-center justify-between gap-[60px] xl:gap-[80px]">
          <div className="w-full xl:w-[701px] xl:h-[626px] flex flex-col justify-between">

            <div>
              <h2 className="w-full xl:w-[701px] text-[28px] xl:text-[40px] leading-[36px] xl:leading-[40px] font-medium mb-[16px]">
                Lorem ipsum <span className="text-primary">Lorem ipsum</span> dolor
              </h2>

              <p className=" w-full xl:w-[701px] text-muted text-[16px] xl:text-[20px] leading-[24px] xl:leading-[30px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            {/*  GRID */}
            <div className=" w-full xl:w-[582px] grid grid-cols-2 sm:grid-cols-3 gap-[16px] xl:gap-[27.28px] justify-items-center xl:justify-items-start">
              {gridCards.map((item, i) => (
                <GridCard key={i} title={item} />
              ))}
            </div>

          </div>

          {/* IMAGE */}
          <div className="w-full xl:w-[702px] xl:h-[787px] flex justify-center pr-[26px] sm:pr-[50px] xl:pr-0">
            <motion.img
              src={phone}
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ x: [0, -20, 0] }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              className="w-full max-w-[702px] xl:h-[787px] object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="container-custom">

          <div className="relative overflow-hidden w-full xl:w-[1320px] rounded-[24px] px-[20px] xl:px-[48px] py-[40px] xl:py-[48px] flex flex-col xl:flex-row items-center justify-between gap-[32px] xl:gap-[48px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">

            {/* GRID LEFT */}
            <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 w-[489px] h-[451px] z-0 opacity-100"
              style={{
                transform: "translateY(-50%) rotate(-110.63deg)",
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* GRID RIGHT */}
            <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[489px] h-[451px] z-0 opacity-100"
              style={{
                transform: "translateY(-50%) rotate(-69.37deg)",
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* CONTENT */}
            <div className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-between gap-[32px] xl:gap-[48px]">

              {/* IMAGE */}
              <div className="relative w-[150px] xl:w-[173px] h-[150px] xl:h-[173px] flex items-center justify-center">
                <img src={cta_background} className="absolute w-full h-full object-contain" />
                <img src={cta} className="relative w-[120px] xl:w-[143px] h-auto object-contain z-10" />
              </div>

              {/* TEXT */}
              <div className="w-full xl:w-[849px] text-center xl:text-left">
                <h3 className="
            text-white
            text-[24px] sm:text-[32px] xl:text-[40px]
            leading-[32px] sm:leading-[40px] xl:leading-[40px]
            font-medium
          ">
                  Get your application developed by our certified experts today!
                </h3>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center xl:justify-end w-full xl:w-auto">
                <button className=" w-[140px] xl:w-[152px] h-[48px] xl:h-[54px] rounded-[8px] bg-white text-[#323131] text-[14px] xl:text-[18px]font-medium flex items-center justify-center border border-white hover:scale-105 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div >
  );
};

export default Dashboard;