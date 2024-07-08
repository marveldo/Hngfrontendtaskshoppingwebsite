import React from "react";
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

export const Cart = () => {
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

    return(<div className="overflow-hidden">
         <Navbar/>
         <div className="px-28 respad">
            <div className="flex gap-x-3 py-10 resgenpadding">
                <Link to="/" className="py-3 px-4 rounded-full bg-[#F5F5F5]">
                <img src="/StaticImages/Leftarrow.svg" alt="left arrow"/>
               </Link>

               <h1 className="font-playdisplay text-[24px]  font-[600]">Shopping cart</h1>
                 

            </div>
           <div className="w-full border-t-2 border-t-[#CAC4D0]">
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

             <div className="pt-24 pb-9 w-full flex resmaincartdiv justify-end mb-40">
                <div className="flex gap-x-4 rescartdiv ">
                    <div className="flex gap-y-7 flex-col font-playdisplay text-[16px]">
                        <p>Subtotal</p>
                        <p>Tax</p>
                        <p>Shipping</p>
                        <p className="font-[700]">Total</p>
                        <Link to="/" className="flex gap-x-4 p-4 spec-button rounded-[8px] items-center border-black border-2">
                            <img src="/StaticImages/Leftarrow.svg" alt="left arrow"/>
                            <p className="text-[16px]">Continue shopping</p>
                        </Link>
                    </div>
                    <div className="flex gap-y-7 flex-col items-end font-playdisplay text-[16px]">
                    <p>N{data.reduce((acc, obj)=> acc + obj.price,0)}</p>
                        <p>N10000</p>
                        <p>N2500</p>
                        <p className="font-[700]">N262500</p>
                        <Link to="/checkout" className="flex gap-x-4 p-4 spec-button bg-primary rounded-[8px] items-center ">
                           
                            <p className="text-[16px] text-white">Continue to payment</p>
                            <img src="/StaticImages/Vector arrow.svg" alt="left arrow"/>
                        </Link>
                    </div>

                </div>
                <div className="w-full items-center resbuttons pt-14">
                    <div>
                        <Link to="/" className="flex gap-x-4 p-4 mb-5 rounded-[8px] items-center border-black border-2">
                            <img src="/StaticImages/Leftarrow.svg" alt="left arrow"/>
                            <p className="text-[16px]">Continue shopping</p>
                        </Link>
                        <Link to="/checkout" className="flex gap-x-4 p-4  bg-primary rounded-[8px] items-center ">
                           
                            <p className="text-[16px] text-white">Continue to payment</p>
                            <img src="/StaticImages/Vector arrow.svg" alt="left arrow"/>
                        </Link>
                        </div>
                </div>


             </div>
            
         </div>
         <Footer/>
    </div>
      
    )
} 
