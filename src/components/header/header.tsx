import BrandName from "./brandName";
import CartButton from "./cartButton";
import SearchBox from "./searchBox";
import Sidebar from "./sidebar";


export default function Header() {
    return (
        <>
            <div className="flex shadow shadow-gray-400 h-20"> 

                <div>
                    <CartButton/>
                </div>

             <div>
             <SearchBox/>
             </div>  
  

             <div>
                <BrandName/>
             </div> 

             <div>
                <Sidebar/>
             </div>

            </div>



        </>
    )
}
