import "./index.css"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Cart } from "./Components/Cart"
import { Checkout } from "./Components/Checkout"
import { Orders } from "./Components/Ordersuccess"
import { Homeprotected, RouteProtected} from "./protectedRoutes/protectedroutes"
import { Productssection } from "./Components/products"

import "animate.css"




export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homeprotected/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/products" element={<RouteProtected><Productssection/></RouteProtected>}/>
             
            </Routes>
        </BrowserRouter>
    )
}


