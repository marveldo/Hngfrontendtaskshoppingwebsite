import React from "react"
import { Navbar,Footer } from "./Home";
import chair from "../DynamicImages/Rectangle.jpg"
import chair_frame from "../DynamicImages/e8a04f955225b78fbd2a33603a783398.png"
import another_chair from "../DynamicImages/c72486c8bce99ba217bedda498c54fde.png"
import random1 from "../DynamicImages/aa17d9064722a97f430fbb0738129ddb.png"
import random2 from "../DynamicImages/b0fa22f44712750078eae01a179f466a.png"
import random3 from "../DynamicImages/d9c087f46609867a686e5ba4e5f3341d.png"
import random4 from "../DynamicImages/ec24b1e75d7137d76e8c59d72787e4ff.png"
import random5 from "../DynamicImages/f54ecf228a11f4957add002a249440ea.png"
import { Link } from "react-router-dom";


export const Checkout = () => {
    const db = [{
        id : 1,
        name : 'kilimanjaro',
        description : 'Wooden Living room chair',
        price : 85000,
        picture : another_chair,
        quantity : 3
    },
    {
        id : 2,
        name : 'kente',
        description : 'Deep seat arm chair',
        price : 65000,
        picture : random1,
        quantity : 2,
    },
    {
        id : 3,
        name : 'Tonga',
        description : 'Deep coated arm chair',
        price : 45000,
        picture : random2,
        quantity : 4,
    },
    {
        id : 4,
        name : 'Serengti',
        description : 'Deep warming chair',
        price : 55000,
        picture : random3,
        quantity : 1
    },
    
]

const [data,setdata ] = React.useState(db)
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
            <h1 className="pt-7 font-playdisplay text-[20px] font-[600]">Order Summary</h1>
           { data.map((obj)=>{
              return(
                <div key={obj.id} className="w-full flex justify-between border-b-[#CAC4D0] border-b-2 py-8">
                <div className="flex gap-x-10 resgap">
                    <img src={obj.picture} className="w-[100px] h-[100px] rounded-[8px]" alt="chair image"/>
                    <div className="flex flex-col gap-y-2">
                        <h1 className="font-playdisplay text-[20px] font-[500] largecartfont">{obj.name}</h1>
                        <p className="smallcartfont">{obj.description}</p>
                        <p className="font-playdisplay text-[14px] text-[#128E1E] smallcartfont">Qty : {obj.quantity}</p>

                    </div>
                </div>
                <div className="flex flex-col gap-y-4 font-playdisplay text-[20px]">
                    <p className="largecartfont">N{obj.price}</p>
                    <div className="flex justify-between">
                        <img src="/StaticImages/Dustbin.svg" alt="delete icon"/>
                        <p className="text-[14px]">Delete</p>
                    </div>

                </div>
                
            </div>
              )
           })}
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

        <div className="flex flex-col gap-y-8">
             <h1 className="font-playdisplay text-[20px] font-[600]">Billing details</h1>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Full name
                </p>
                <input type="text" className="bg-[#F5F5F5] w-full h-[40px] rounded-[8px]"/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Street Address
                </p>
                <input type="text" className="bg-[#F5F5F5] w-full h-[40px] rounded-[8px]"/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Town City
                </p>
                <input type="text" className="bg-[#F5F5F5] w-full h-[40px] rounded-[8px]"/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Country
                </p>
                <input type="text" className="bg-[#F5F5F5] w-full h-[40px] rounded-[8px]"/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Phone number
                </p>
                <input type="text" className="bg-[#F5F5F5] w-full h-[40px] rounded-[8px]"/>
             </div>
             <div className="w-full">
                <p className="text-[#8B8B8B] text-[16px] mb-1 font-playdisplay font-[400]">
                    Email address
                </p>
                <input type="text" className="bg-[#F5F5F5] w-full h-[40px] rounded-[8px]"/>
             </div>
             
         </div>
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
                       <p>N{data.reduce((acc, obj)=> acc + obj.price,0)}</p>
                        <p>N10000</p>
                        <p>N2500</p>
                        <p className="font-[700]">N262500</p>
                </div>

            </div>
            
            <button className="bg-primary py-3 rounded-[8px] text-white text-[16px] font-playdisplay ">Pay Now</button>
            </div>
           
            
         </div>


         </div>
         <Footer/>
       </div>
    )
}



