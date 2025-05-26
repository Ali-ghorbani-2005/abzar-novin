import DrillProductsSlider from "@/components/categoryProducts/drillProductsSlider";
import HandToolsProductSlider from "@/components/categoryProducts/handToolsProductSlider";
import Education from "@/components/education/education";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import PromoSlider from "@/components/promotions/promoSlider";
import PromotionBanner from "@/components/promotions/promotionBanner";

export default function Home() {
  return (
    <>
      

      <div className="mt-5">
        <PromoSlider />
      </div>

      <div>
        <DrillProductsSlider />
      </div>

      <div className="mt-10">
        <PromotionBanner />
      </div> 

      <div>
        <HandToolsProductSlider/>
      </div>

      <div className="mt-10">
        <Education />
      </div>


    
    </>
  );
}
