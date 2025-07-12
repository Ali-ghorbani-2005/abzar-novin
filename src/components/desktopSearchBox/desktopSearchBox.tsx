"use client"
import { motion } from "framer-motion";
export default function DesktopSearchBox() {
    return (
        <>

            <div className="hidden md:block">
                <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                    <motion.input
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        type="text"
                        placeholder="نام ابزار مورد نظر را جست‌وجو کنید..."
                        className="w-4/5 md:w-[50%] p-3 rounded-xl shadow-xl border border-white focus:outline-none focus:ring-2 focus:ring-white text-right bg-white/80 placeholder-gray-600 backdrop-blur-md transition-all duration-300"
                    />
                </div>
            </div> 
            
        </>
    )
}
