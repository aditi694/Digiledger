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
            className="w-full xl:w-[500px] flex flex-col gap-[48px]"
          >
            <h1 className="w-full xl:w-[510px] text-[40px] leading-[48px] tracking-[-0.5px] font-semibold">
              Lorem ipsum{" "}
              <span className="text-primary">
                dolor sit amet consectetur
              </span>. Sed Lorem malesuada pellentesque id
            </h1>

            <p className="xl:w-[500px] text-[20px] leading-[28px] text-muted">
              Lorem ipsum dolor sit amet consectetur. Morbi mauris id quis hac et viverra nulla Ut vivamus purus nunc integer quis. Habitant elit sapien vestibulum risus vitae donec blandit vel nisi.             </p>

            <div className="flex justify-start">
              <Button>Get in Touch</Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="w-full xl:w-[820px] flex justify-center">
            <motion.img
              src={laptop1}
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              whileHover={{ scale: 1.04 }}
              className="w-full max-w-[820px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      < section className="flex justify-center mt-[120px]" >
        <div className="container-custom">
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
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[1119px] mb-[57px]"
          />

          <div className="w-full xl:w-[1138px] flex flex-wrap xl:flex-nowrap justify-center gap-[20px]">
            {features.map((item, i) => (
              <FeatureCard
                key={i}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section >
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

            {/* ================= LEFT TOP ================= */}
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

            {/* ================= RIGHT TOP ================= */}
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

            {/* ================= RIGHT BOTTOM ================= */}
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

            {/* ================= LEFT BOTTOM ================= */}
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

            {/* ================= ARROWS ================= */}
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
      < section className="flex justify-center mt-[120px]" >
        <div className="container-custom">

          <div className="bg-light rounded-[24px] min-h-[620px] md:min-h-[700px] xl:h-[642px] flex items-center justify-center py-[40px]">
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
                  {miniCards.map((item, i) => (
                    <MiniCard key={i} title={item} />
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
                {gridCards.map((item, i) => (
                  <GridCard key={i} title={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[702px] xl:h-[787px] flex justify-center">

            <motion.img
              src={phone}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileInView={{ y: [0, -20, 0], scale: [1, 1.03, 1] }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[702px] xl:h-[787px] object-contain"
            />

          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="flex justify-center mt-[120px]">
        <div className="container-custom">
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

              <Button variant="secondary" size="lg">
                Schedule a Call
              </Button>

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