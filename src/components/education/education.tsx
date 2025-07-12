"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Education() {
    return (
        <>
            <div className='mr-5'>
                <p className='text-right text-3xl font-serif'>آخرین مطالب آموزشی</p>
            </div>

            <div className='border-b mt-3 border-gray-400'></div>

            <div className='mt-4'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {[
                        {
                            image: "img/education-images/education1.jpg",
                            title: "اره زنجیری بنزینی هیوندای مدل TURBO-260",
                            text: "اره‌های زنجیری از جمله ابزارهای بسیار ضروری و مهم در صنعت چوب هستند که به صورت گسترده برای قطع درختان و بُرش الوارهای چوبی بزرگ مورد استفاده قرار می‌گیرند..."
                        },
                        {
                            image: "img/education-images/education2.jpg",
                            title: "قیچی باغبانی شارژی هیوندای مدل HP3018",
                            text: "هرس‌کاری و حذف شاخه‌های زائد، یکی از نیازهای ضروری برای حفظ سلامت درختان، افزایش سرعت رشد و زیبایی گیاهان محسوب می‌شود..."
                        },
                        {
                            image: "img/education-images/education3.jpg",
                            title: "اره زنجیری اقتصادی و حرفه‌ای وی تولز",
                            text: "اره‌های زنجیری از جمله ابزارهای بسیار ضروری و مهم در صنعت چوب هستند و در حالت کلی به سه دسته بنزینی، برقی و شارژی طبقه‌بندی می‌شوند..."
                        },
                        {
                            image: "img/education-images/education4.jpg",
                            title: "باز کردن لوله با دریل؟ نکنید این کارو!",
                            text: "گرفتگی لوله‌های چاه و فاضلاب از جمله معضلات زندگی شهری است که به صورت غیرمنتظره اتفاق می‌افتد..."
                        },
                        {
                            image: "img/education-images/education5.jpg",
                            title: "فرق موتور زغالی و براشلس در ابزارهای برقی و شارژی",
                            text: "موتور مهم‌ترین بخش یک ابزار برقی محسوب می‌شود و ساختار آن تأثیر زیادی در عملکرد نهایی ابزار دارد..."
                        },
                        {
                            image: "img/education-images/education6.jpg",
                            title: "نکات مهم برای خرید و استفاده از متر لیزری",
                            text: "متر لیزری، یک ابزار اندازه‌گیری دقیق است که برای سنجش فاصله، مساحت، حجم و غیره کاربرد دارد..."
                        },
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* <div className='border border-gray-400 w-[410px] ml-2 h-[500px]'>
                <div className='flex justify-center items-center'>
                  <img src={item.image} alt={item.title} className='w-[400px] h-72 object-cover' />
                </div>
                <div className='mt-5'>
                  <p className='text-right text-2xl font-medium mr-2'>{item.title}</p>
                  <p className='text-lg text-right text-gray-500 mr-2'>
                    {item.text}
                  </p>
                </div>
                <div className='mt-1 ml-4'>
                  <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white'>
                    ادامه مطلب
                  </button>
                </div>
              </div> */}
                            <div className="w-[410px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="w-full h-72 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-t-2xl"
                                    />
                                </div>

                                <div className="p-4 flex flex-col justify-between h-[calc(100%-18rem)]">
                                    <div>
                                        <p className="text-right text-xl font-semibold mb-2 text-gray-800">{item.title}</p>
                                        <p className="text-sm text-right text-gray-600 leading-relaxed">
                                            {item.text.length > 160 ? item.text.slice(0, 160) + "..." : item.text}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-2 text-sm font-semibold rounded-xl">
                                            ادامه مطلب
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

