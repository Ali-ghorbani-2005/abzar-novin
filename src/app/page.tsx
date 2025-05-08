import Education from "@/components/education/education";
import Header from "@/components/header/header";
import PromoSlider from "@/components/promotions/promoSlider";
import PromotionBanner from "@/components/promotions/promotionBanner";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
      </div>

      <div className="mt-5">
        <PromoSlider />
      </div>

      <div className="mt-10">
        <PromotionBanner />
      </div> 

      <div className="mt-10">
        <Education/>
      </div>
    </>
  );
}
