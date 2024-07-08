import "./index.css"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Cart } from "./Components/Cart"
import { Checkout } from "./Components/Checkout"
import { Orders } from "./Components/Ordersuccess"



export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/orders" element={<Orders/>}/>
             
            </Routes>
        </BrowserRouter>
    )
}


