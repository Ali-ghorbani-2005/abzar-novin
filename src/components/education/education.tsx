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

            <div className='border-b mt-3 border-gray-400 '></div>

            <div className='mt-4'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className='border border-gray-400 w-[410px] ml-2 h-[550px]'>
                            <div className='flex justify-center items-center'>
                                <img src="img/education-images/education1.jpg" alt="education1" className='w-[400px] h-72' />
                            </div>
                            <div className='mt-5'>
                                <p className='text-right text-2xl font-medium mr-2'> TURBO-260 اره زنجیری بنزینی هیوندای مدل </p>
                                <p className='text-lg text-right text-gray-500 mr-2'>
                                    اره‌های زنجیری از جمله ابزارهای بسیار ضروری و مهم در صنعت چوب هستند که به صورت گسترده برای قطع درختان و بُرش الوارهای چوبی بزرگ مورد استفاده قرار می‌گیرند و در حالت کلی به سه دسته بنزینی، برقی و شارژی طبقه‌بندی شده که از میان آنها، نمونه‌های بنزینی به عنوان قوی‌ترین محصولات این خانواده محسوب می‌شوند.
                                </p>
                            </div>

                            <div className='mt-1 ml-4'>
                                <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white '>ادامه مطلب </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='border border-gray-400 w-[410px] ml-2 h-[550px]'>
                            <div className='flex justify-center items-center'>
                                <img src="img/education-images/education2.jpg" alt="education1" className='w-[400px] h-72' />
                            </div>
                            <div className='mt-5'>
                                <p className='text-right text-2xl font-medium mr-2'> HP3018  قیچی باغبانی شارژی هیوندای مدل </p>
                                <p className='text-lg text-right text-gray-500 mr-2'>
                                    هرس‌کاری و حذف شاخه‌های زائد، یکی از نیازهای ضروری برای حفظ سلامت درختان، افزایش سرعت رشد و زیبایی گیاهان محسوب می‌شود و همه افرادی که در منزل‌های ویلایی یا محیطهای باغی زندگی می‌کنند، کم و بیش با اهمیت این موضوع آشنا هستند و گاها به صورت شخصی، انجام این فرآیند را بر عهده می‌گیرند.
                                </p>
                            </div>

                            <div className='mt-1 ml-4'>
                                <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white '>ادامه مطلب </button>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border border-gray-400 w-[410px] ml-2 h-[550px]'>
                            <div className='flex justify-center items-center'>
                                <img src="img/education-images/education3.jpg" alt="education1" className='w-[400px] h-72' />
                            </div>
                            <div className='mt-5'>
                                <p className='text-right text-2xl font-medium mr-2'> اره زنجیری اقتصادی و حرفه‌ای وی تولز </p>
                                <p className='text-lg text-right text-gray-500 mr-2'>
                                    اره‌های زنجیری از جمله ابزارهای بسیار ضروری و مهم در صنعت چوب هستند که به صورت گسترده برای قطع درختان و بُرش الوارهای چوبی بزرگ مورد استفاده قرار می‌گیرند و در حالت کلی به سه دسته بنزینی، برقی و شارژی طبقه‌بندی شده که از میان آنها، نمونه‌های بنزینی به عنوان قوی‌ترین محصولات این خانواده محسوب می‌شوند.
                                </p>
                            </div>

                            <div className='mt-1 ml-4'>
                                <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white '>ادامه مطلب </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-gray-400 w-[410px] ml-2 h-[550px]'>
                            <div className='flex justify-center items-center'>
                                <img src="img/education-images/education4.jpg" alt="education1" className='w-[400px] h-72' />
                            </div>
                            <div className='mt-5'>
                                <p className='text-right text-2xl font-medium mr-2'> باز کردن لوله با دریل؟ نکنید این کارو!</p>
                                <p className='text-lg text-right text-gray-500 mr-2'>
                                    گرفتگی لوله‌های چاه و فاضلاب از جمله معضلات زندگی شهری است که به صورت غیرمنتظره، گریبان‌گیر اتصالات زیربنایی خانه‌ها می‌شود و معمولا افراد به صورت شخصی اقدامات به رفع این مشکل می‌کنند؛ اما در برخی از موارد استفاده از روش‌های سنتی کارساز نبوده و نیازمند انجام اقدامات جدی خواهد بود.
                                </p>
                            </div>

                            <div className='mt-1 ml-4'>
                                <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white '>ادامه مطلب </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border border-gray-400 w-[410px] ml-2 h-[550px]'>
                            <div className='flex justify-center items-center'>
                                <img src="img/education-images/education5.jpg" alt="education1" className='w-[400px] h-72' />
                            </div>
                            <div className='mt-5'>
                                <p className='text-right text-2xl font-medium mr-2'>فرق موتور زغالی و براشلس در ابزارهای برقی و شارژی</p>
                                <p className='text-lg text-right text-gray-500 mr-2'>
                                    موتور، مهمترین بخش یک ابزار برقی و شارژی محسوب می‌شود که با حرکت چرخشی خود، امکان دستیابی به عملکردهای مختلف را در اختیار کاربران قرار می‌دهد. اما ساختار داخلی موتورها به دلیل قرارگیری در بدنه محصول، معمولا از نگاه افراد مبتدی دور مانده و اطلاعات خاصی را در اختیار آنها قرار نمی‌دهد.
                                </p>
                            </div>

                            <div className='mt-1 ml-4'>
                                <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white '>ادامه مطلب </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='border border-gray-400 w-[410px] ml-2 h-[550px]'>
                            <div className='flex justify-center items-center'>
                                <img src="img/education-images/education6.jpg" alt="education1" className='w-[400px] h-72' />
                            </div>
                            <div className='mt-5'>
                                <p className='text-right text-2xl font-medium mr-2'> نکات مهم برای خرید و استفاده از متر لیزری</p>
                                <p className='text-lg text-right text-gray-500 mr-2'>
                                    متر لیزری، یک ابزار اندازه‌گیری دقیق است که به شکل ویژه برای اندازه‌گیری واحدهای وابسته به طول نظیر فاصله، مساحت، حجم و غیره کاربرد دارد و برای انجام این محاسبات از پرتوهای لیزری استفاده می‌کند. اما جدای از موضوع ساختار داخلی و نحوه عملکرد متر لیزری، باید توجه داشت که این محصول در انواع و نمونه‌های متنوعی تولیدشده
                                </p>
                            </div>

                            <div className='mt-1 ml-4'>
                                <button className='bg-red-600 w-40 h-9 text-xl rounded-xl text-white '>ادامه مطلب </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>

    )
}
