'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* ✅ بخش سمت چپ برای md به بالا - و پس‌زمینه قرمز برای موبایل */}
      <div className="relative w-full md:w-1/2 bg-gradient-to-b from-red-700 h-[950px] md:h-[640px] to-red-500 flex items-center justify-center p-8">

        {/* فقط در سایز md و بالاتر پیام خوش‌آمد و آیکون را نشان بده */}
        <div className="hidden md:flex flex-col text-white items-center space-y-4">
          <img src="/img/icons/wrench.png" alt="آچار" className="w-24" />
          <h2 className="text-3xl font-bold">ورود به حساب لازمه</h2>
          <p className="text-lg">خوش آمدید! اطلاعات خود را وارد کنید</p>
        </div>

        {/* فرم ورود - در موبایل داخل پس‌زمینه قرمز، در md سمت راست */}
        <motion.div 
          className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 md:hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            ورود به حساب کاربری
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="ایمیل"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full h-12 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition-all"
            >
              ورود
            </button>
          </form> 
          <div className="flex justify-center items-center mt-5">   
            <Link href='/singup'>
          <p className="border-b border-blue-800 text-blue-800 hover:text-blue-900">ثبت نام نکرده اید ؟ ثبت نام کنید</p>  
          </Link>
        </div>
        </motion.div>

      </div>

      {/* ✅ در md به بالا، فرم سمت راست سفید نمایش داده میشه */}
      <motion.div 
        className="hidden md:flex md:w-1/2 items-center justify-center bg-white p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-sm">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            ورود به حساب کاربری
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="ایمیل"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full h-12 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition-all"
            >
              ورود
            </button> 
            
          </form> 
          <div className="flex justify-center items-center mt-5">   
            <Link href='/singup'>
          <p className="border-b border-blue-800 text-blue-800 hover:text-blue-900">ثبت نام نکرده اید ؟ ثبت نام کنید</p>  
          </Link>
        </div>
        </div> 

       
      </motion.div>
      
    </div>
  );
}
