import BrandName from "./brandName";
import CartButton from "./cartButton";
import SearchBox from "./searchBox";
import Sidebar from "./sidebar";


export default function Header() {
    return (
        <>
            <div className="flex shadow shadow-gray-400"> 

                <div>
                    <CartButton/>
                </div>

             <div>
             <SearchBox/>
             </div>  


             <div>
                <Sidebar/>
             </div>  

             <div>
                <BrandName/>
             </div>

            </div>



        </>
    )
}
