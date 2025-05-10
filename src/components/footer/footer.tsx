"user client"

export default function Footer() {
    return (
        <>

            {/* <div className=""> 

        <div className="bg-gray-700"> 

            <div className="flex justify-center items-center ">
                <p className="text-white text-3xl mt-5 font-bold">ارتباط با ما </p>
            </div> 
             
            <div className="bg-gray-500 mt-5 w-80 flex justify-center ml-16 h-20 rounded-2xl "> 
                <div>
                <p className="text-2xl">شماره تماس </p> 
                <p className="mt-2" >021442320</p> 
                </div>
            </div> 

            <div className="bg-gray-500 mt-5 w-80 flex justify-center ml-16 h-20 rounded-2xl"> 
                <div>
                <p className="text-2xl ml-10">ایمیل</p> 
                <p className="mt-2">kifabzar@gmail.com</p>  
                </div>
            </div> 

            <div className="bg-gray-500 mt-5 w-80 flex justify-center ml-16 h-20 rounded-2xl"> 
                <div className="text-center">
                <p className="text-2xl" > آدرس </p> 
                <p>تهران-خیابان امام خمینی-نرسیده به ولیعصر-پاساژ فجر- طبقه منفی یک - پلاک 311</p> 
                </div>
            </div> 


            <div className="bg-gray-500 mt-5 w-80 flex justify-center ml-16 h-20 rounded-2xl"> 
                <div>
                <p className="text-2xl" > ساعات کاری </p> 
                <p className="mt-2 text-center"> 18-9 </p> 
                </div>
            </div> 


            <div className="bg-gray-500 mt-5 w-80 flex justify-center ml-16 h-40 rounded-2xl ">
                <img src="img/icons/namad.jpg" alt="" className="w-36 h-32 mt-4" />
            </div> 


            <div className="bg-gray-500 mt-5 w-80 flex justify-center ml-16 h-40 rounded-2xl">
                <img src="img/icons/etehadie.jpg" alt="" className="w-36 h-32 mt-4" />
            </div>  


            <div className="mt-10 text-center">
                <p className="text-4xl text-white font-semibold" >لینک های سایت </p> 
                <p className="text-gray-400 text-2xl font-semibold" >درباره ما </p> 
                <p className="text-gray-400 text-2xl font-semibold">قوانین و مقرات خرید</p> 
                <p className="text-gray-400 text-2xl font-semibold">ضمانت بازگشت کالا </p> 
                <p className="text-gray-400 text-2xl font-semibold">نحوه ارسال کالا </p> 
                <p className="text-gray-400 text-2xl font-semibold" >فروش اقساطی</p>
            </div> 

            <div className="mt-10 text-center">
                <p className="text-4xl text-white font-semibold">پیگیری سفارش</p>  
                <p className="text-gray-400 text-2xl font-semibold" >برای مشاهده وضعیت سفارش خود شماره سفارش خود را وارد کنید</p>
                <div className="flex mt-5"> 
                <button className="bg-red-500 w-52 text-white">دریافت وضعیت</button>
                    <input type="text" className="w-72 bg-gray-500 h-10"/> 
                </div>
            </div>

        </div>

    </div> */}



   
    
            <footer className="bg-gray-800 text-white py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center">ارتباط با ما</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-700 p-4 rounded-xl text-center">
                                <p className="text-xl">شماره تماس</p>
                                <p className="text-lg">021442320</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-xl text-center">
                                <p className="text-xl">ایمیل</p>
                                <p className="text-lg">kifabzar@gmail.com</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-xl text-center">
                                <p className="text-xl">آدرس</p>
                                <p className="text-lg">تهران-خیابان امام خمینی-نرسیده به ولیعصر-پاساژ فجر- طبقه منفی یک - پلاک 311</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-xl text-center">
                                <p className="text-xl">ساعات کاری</p>
                                <p className="text-lg">18-9</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <img src="img/icons/namad.jpg" alt="نماد" className="w-32 h-32" />
                        <img src="img/icons/etehadie.jpg" alt="اتحادیه" className="w-32 h-32" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center">لینک‌های سایت</h2>
                        <ul className="space-y-2 text-center">
                            <li>درباره ما</li>
                            <li>قوانین و مقررات خرید</li>
                            <li>ضمانت بازگشت کالا</li>
                            <li>نحوه ارسال کالا</li>
                            <li>فروش اقساطی</li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-6 text-center">پیگیری سفارش</h2>
                        <p className="text-gray-400 text-center">برای مشاهده وضعیت سفارش خود شماره سفارش خود را وارد کنید</p>
                        <div className="flex justify-center mt-4">
                            <input type="text" className="w-64 bg-gray-700 p-2 rounded-l-md focus:outline-none" placeholder="شماره سفارش" />
                            <button className="bg-red-500 px-4 text-white rounded-r-md">دریافت وضعیت</button>
                        </div>
                    </div>
                </div>
            </footer>
            


        </>
    )
}
