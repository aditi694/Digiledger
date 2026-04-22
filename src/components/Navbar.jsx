import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import Button from "../components/Button";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <> <nav className="w-full h-[95px] flex items-center justify-center sticky top-0 bg-white-custom transition-colors duration-300 z-50">
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

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-[20px]"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <img src={search} className="w-[19px] h-[19px]" />

                    <Button size="sm">
                        Get in Touch
                    </Button>

                    <div className="lg:hidden z-[1000] flex items-center justify-center w-[44px] h-[44px] rounded-[10px] bg-light hover:bg-gray-200 dark:bg-[#1F2937] dark:hover:bg-[#374151] transition-all duration-300 shadow-sm">
                        <Hamburger
                            toggled={isMenuOpen}
                            toggle={setIsMenuOpen}
                            size={20}
                            duration={0.4}
                            color={darkMode ? "#ffffff" : "#111827"}
                            rounded
                        />
                    </div>

                </div>
            </div>
        </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[999]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        exit={{ opacity: 0 }}
                    >

                        <motion.div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="absolute top-0 left-0 h-full w-[280px] bg-white-custom shadow-xl"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        >
                            <motion.div
                                className="flex flex-col gap-4 p-6"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.08 }
                                    }
                                }}
                            >

                                {["Dummy Text", "Dummy Text", "Dummy Text", "Dummy Text"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-[16px] text-main font-medium cursor-pointer 
                                        px-2 py-2 rounded-md hover:text-primary hover:bg-light transition-all duration-200"
                                        variants={{
                                            hidden: { opacity: 0, x: -10 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}

                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="mt-4 h-[42px] rounded-[8px] bg-primary text-white text-[14px] font-medium"
                                >
                                    Get in Touch
                                </button>

                            </motion.div>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
