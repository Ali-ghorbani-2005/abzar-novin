import Header from "@/components/header/header";
import PromoSlider from "@/components/promotions/promoSlider";

export default function Home() {
  return (
   <> 
   <div className="">
    <Header/> 
   </div> 

   <div className="mt-5">
    <PromoSlider/>
   </div>
   </>
  );
}
