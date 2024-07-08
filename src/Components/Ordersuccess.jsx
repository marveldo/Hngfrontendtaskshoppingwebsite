import React from "react"
import { Navbar,Footer } from "./Home"
import random1 from "../DynamicImages/aa17d9064722a97f430fbb0738129ddb.png"
import random2 from "../DynamicImages/b0fa22f44712750078eae01a179f466a.png"
import random3 from "../DynamicImages/d9c087f46609867a686e5ba4e5f3341d.png"
import another_chair from "../DynamicImages/c72486c8bce99ba217bedda498c54fde.png"
import { Link } from "react-router-dom"


export const Orders = () =>{
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
  
    
]

const [data,setdata ] = React.useState(db)
    return(<div className="overflow-hidden">
         <Navbar/>
         <div className="px-28 respad">
            <div className="w-full pt-24  pb-10  p flex flex-col items-center text-center gap-y-5">
            <img src="StaticImages/Vectororder-confirmed.svg" alt="Check mark"/>
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
             { data.map((obj)=>{
              return(
                <div key={obj.id} className="w-full flex justify-between  py-2">
                <div className="flex gap-x-10 resgap">
                    <img src={obj.picture} className="w-[100px] h-[100px] rounded-[8px]" alt="chair image"/>
                    <div className="flex flex-col gap-y-2">
                        <h1 className="font-playdisplay text-[20px] font-[500] largecartfont">{obj.name}</h1>
                        <p className="font-playdisplay text-[14px] text-[#128E1E] smallcartfont">Qty : {obj.quantity}</p>

                    </div>
                </div>
                <div className="flex flex-col gap-y-4 font-playdisplay text-[20px]">
                    <p className="largecartfont">N{obj.price}</p>
                </div>
                
            </div>
              )
           })}
           </div>
           <div className="flex justify-end w-full mb-40 ">
            <div className="flex flex-col rescartdiv gap-y-5">
            <div className="flex gap-x-40 rescartdiv ordercartdiv">
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
            </div>
           
            
         </div>
         </div>
       <Footer/>
    </div>)
}