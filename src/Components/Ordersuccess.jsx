import React from "react"
import { Navbar,Footer } from "./Home"
import { useSelector } from "react-redux"



export const Orders = () =>{
    const Cartitems = useSelector(state => state.Cartitems)
    const data = Cartitems.data
    return(<div className="overflow-hidden  flex flex-col justify-between min-h-[100vh]">
         <Navbar/>
         <div className="px-28 respad">
            <div className="w-full pt-24  pb-10  p flex flex-col items-center text-center gap-y-5">
            <img src="StaticImages/Vectororder-confirmed.svg" className="min-[800px]:w-[120px] min-[800px]:h-[120px]" alt="Check mark"/>
            <h1 className="font-playdisplay text-[40px] largresfont">We've got your order</h1>
            <p className="font-playdisplay text-[20px] largecartfont">We’ll let your know when it ships and headed your way</p>
            <button className="py-3 border-black border-2 text-[16px] largecartfont hover:text-white hover:bg-black px-6 font-playdisplay font-[500] rounded-[8px]">Track your order here</button>

             </div>

             <div className="border-y-[#CAC4D0] flex flex-col gap-y-8  border-y-2 py-12">
                <h1 className="font-playdisplay font-[500] text-[20px]">Billed and shipped to:</h1>
                <div className="font-playdisplay font-[400] text-[20px]">
                <p>12, James, Avenue,</p>
                <p>lagos, nigeria</p>
                <p>@sarahkelechi@gmail.com</p>
                </div>
             </div>
             <div className="pt-16">
           </div>
           <div className="flex justify-end w-full mb-40">
            <div className="flex flex-col rescartdiv gap-y-5">
            <div className="flex gap-x-40 rescartdiv ordercartdiv">
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
            </div>
           
            
         </div>
         </div>
       <Footer/>
    </div>)
}