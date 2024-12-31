import MostSaleProducts from "./components/most-saleproducts";
import SaleProducts from "./components/sale-products";
import TotalOrders from "./components/total-orders";
import TotalSales from "./components/total-sales";
import TotalUsers from "./components/total-users";


function page(){

    return(
        <div>
            <div className="grid grid-cols-3 gap-4 pb-3">
                <TotalOrders />
                <TotalSales />
                <TotalUsers />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <MostSaleProducts />
                <SaleProducts />
            </div>
        </div>
    )
}
export default page;