import React from "react"
import { Navbar,Footer } from "./Home";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart } from "../logic";
import { useNavigate } from "react-router-dom";


export const Checkout = () => {
    const Cartitems = useSelector(state => state.Cartitems)
    const data = Cartitems.data
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const Formsubmit = (e) => {
        e.preventDefault();
        ClearCart()
        navigate('/orders')
    }

  
    return(
       <div className="overflow-hidden">
         <Navbar/>
         <div className="px-28 respad">
         <div className="flex gap-x-3 py-10 resgenpadding">
                <Link to="/cart" className="py-3 px-4 rounded-full bg-[#F5F5F5]">
                <img src="/StaticImages/Leftarrow.svg" alt="left arrow"/>
               </Link>

               <h1 className="font-playdisplay text-[24px]  font-[600]">Check Out</h1>
                 

            </div>
           <div className="w-full border-t-2 border-t-[#CAC4D0]">
            
             </div>
             <div className="py-24 w-full flex justify-between">
                <div className="flex flex-col gap-y-8">
                    <h1 className="font-playdisplay text-[20px] font-[600]">Payment Method</h1>
                    <div className="flex gap-x-6 ps-3">
                        <input type="radio" className="accent-primary w-4"/>
                        <p className="font-playdisplay  text-[16px]">Credit card</p>
                    </div>
                    <div className="flex gap-x-6 ps-3">
                        <input type="radio" className="accent-primary w-4"/>
                        <p className="font-playdisplay  text-[16px]">Cash on delivery</p>
                    </div>
                </div>
                <div className="flex gap-x-2 items-center">
                    <img src="/StaticImages/mastercard.svg" alt="master card logo"/>
                    <img src="/StaticImages/Visa.svg" alt="visa logo"/>

                </div>



             </div>
             <form className="flex flex-col gap-y-8" onSubmit={Formsubmit}>
           
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                Card holder’s name
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                Card number
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px]  mb-1 font-playdisplay font-[400]">
                Expiration date
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                CVC number 
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
            

             <div>
                <button className="py-2 px-6 border-black border-2 bg-white text-black hover:bg-black rounded-[8px] hover:text-white">Submit</button>
             </div>
             
         </form>

        <form className="flex flex-col gap-y-8 mt-20" onSubmit={Formsubmit}>
             <h1 className="font-playdisplay text-[20px] font-[600]">Billing details</h1>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Full name
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Street Address
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Town City
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Country
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Phone number
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Email address
                </p>
                <input type="text" className="bg-[#F5F5F5] p-3 w-full h-[40px] rounded-[8px]" required/>
             </div>

             <div>
                <button className="py-2 px-6 border-black border-2 bg-white text-black hover:bg-black rounded-[8px] hover:text-white">Submit</button>
             </div>

             
             
         </form>
         <div className="flex gap-x-7 py-16">
            <input type="checkbox" className="w-5 accent-primary"/>
            <p className="font-playdisplay text-[16px]">Save this information for future checkouts</p>
         </div>

         <div className="flex justify-end w-full mb-40 ">
            <div className="flex flex-col rescartdiv gap-y-5">
            <div className="flex gap-x-40 rescartdiv">
                <div className="flex flex-col gap-y-7 font-playdisplay text-[16px]">
                <p>Subtotal</p>
                        <p>Tax</p>
                        <p>Shipping</p>
                        <p className="font-[700]">Total</p> 
                </div>
                <div className="flex flex-col gap-y-7 font-playdisplay text-[16px]">
                       <p>N{data.reduce((acc, obj)=> acc + (parseInt(obj.price[0]) * obj.quantity),0)}</p>
                        <p>N10000</p>
                        <p>N2500</p>
                        <p className="font-[700]">N{data.reduce((acc, obj)=> acc + (parseInt(obj.price[0]) * obj.quantity),0) + 10000 + 2500}</p>
                </div>

            </div>
            
            <Link to="/orders" className="bg-primary py-3 flex justify-center rounded-[8px] text-white text-[16px] font-playdisplay ">Pay Now</Link>
            </div>
           
            
         </div>


         </div>
         <Footer/>
       </div>
    )
}



