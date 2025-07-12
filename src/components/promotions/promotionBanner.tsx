

export default function PromotionBanner() {
    return (
        <>

            <div className="md:grid md:grid-cols-2 gap-3">
                <div className="flex justify-center items-center ">
                    <img src="img/banners/banner1.jpg" alt="banner1" className="w-96 md:w-[480px] h-36 md:h-40 rounded-xl " />
                </div>

                <div className="flex justify-center items-center mt-6 ">
                    <img src="img/banners/banner2.jpg" alt="banner1" className="w-96  h-36 md:w-[480px] md:h-40 rounded-xl " />
                </div>

                <div className="flex justify-center items-center mt-6">
                    <img src="img/banners/banner3.jpg" alt="banner1" className="w-96 h-36 md:w-[480px] md:h-40 rounded-xl " />
                </div>

                <div className="flex justify-center items-center mt-6">
                    <img src="img/banners/banner4.jpg" alt="banner1" className="w-96 h-36 md:w-[480px] md:h-40 rounded-xl " />
                </div>
            </div>


        </>
    )
}
