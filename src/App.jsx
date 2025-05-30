import "./index.css"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Cart } from "./Components/Cart"
import { Checkout } from "./Components/Checkout"
import { Orders } from "./Components/Ordersuccess"
import { Homeprotected, RouteProtected , LoginProtected, NotLoggedInProtected} from "./protectedRoutes/protectedroutes"
import { Productssection } from "./Components/products"
import { useDispatch } from "react-redux"
import { LoginUser } from "./logic"
import { LoginPage } from "./Components/Adminlogin"
import { CreateProductComponent } from "./Components/CreateProduct"

import "animate.css"




export const App = () => {
    const userlocal = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    const dispatch = useDispatch()
    if (userlocal){
       dispatch(LoginUser(userlocal))
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homeprotected/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/products" element={<RouteProtected><Productssection/></RouteProtected>}/>
                <Route path="/admin-login" element={<LoginProtected><LoginPage/></LoginProtected>}/>
                <Route path="/create-product" element={<NotLoggedInProtected><CreateProductComponent/></NotLoggedInProtected>}/>
             
            </Routes>
        </BrowserRouter>
    )
}


