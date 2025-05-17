import DrillProductsSlider from "@/components/categoryProducts/drillProductsSlider";
import Education from "@/components/education/education";
import Footer from "@/components/footer/footer";
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

      <div>
        <DrillProductsSlider />
      </div>

      <div className="mt-10">
        <PromotionBanner />
      </div>

      <div className="mt-10">
        <Education />
      </div>


      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
