import React from "react";
import { Navbar,Footer } from "./Home";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Setcartproducts , RemovefromProducts, Addtocartcart, Minusfromcartcart } from "../logic";


export const Cart = () => {
const Cartitems = useSelector(state => state.Cartitems)
const data = Cartitems.data
const dispatch = useDispatch()




let Cartobjects = ''
if(data !== null){
    if(data.length >= 1 ){
  Cartobjects =  data.map((obj,index)=>{
    return(
      <div key={obj.id} className="w-full flex justify-between border-b-[#CAC4D0] border-b-2 py-8">
      <div className="flex gap-x-10 resgap">
          <img src={`https://api.timbu.cloud/images/${obj.picture}`} className="w-[100px] h-[100px] rounded-[8px]" alt="chair image"/>
          <div className="flex flex-col gap-y-2">
              <h1 className="font-playdisplay text-[20px] font-[500] largecartfont">{obj.name}</h1>
              <p className="smallcartfont">{obj.description.slice(0,25)}.....</p>
              <div className="flex gap-x-3 items-center">
              <img src='/StaticImages/Vectoraddcartbutton.svg' className="cursor-pointer" alt="add" onClick={()=>{dispatch(Minusfromcartcart(obj))}}/>
              <p className="font-playdisplay text-[17px] text-[#128E1E] smallcartfont">{obj.quantity}</p>
              <img src="/StaticImages/Vectorminuscartbutton.svg" className="cursor-pointer" alt="minus"  onClick={()=> {dispatch(Addtocartcart(obj))}}/>
              </div>

          </div>
      </div>
      <div className="flex flex-col gap-y-4 font-playdisplay text-[20px]">
          <p className="largecartfont">N{parseInt(obj.price[0]) * obj.quantity}</p>
          <div className="flex justify-between cursor-pointer" onClick={()=>{dispatch(RemovefromProducts(obj.id))}}>
              <img src="/StaticImages/Dustbin.svg" alt="delete icon"/>
              <p className="text-[14px]">Delete</p>
          </div>

      </div>
      
  </div>
    )
 })
}
else{
    Cartobjects = <div className="h-[100vh] w-[100%] flex font-playdisplay pt-28">
    <div className="flex flex-col gap-y-3 text-center w-full">
        <h1 className="font-semibold text-[28px]">Your Cart is Empty</h1>
        <p className="font-normal text-[20px]">Looks like you haven't added anything to your cart yet. Start shopping now to see your selections here!</p>
    </div>
</div>
}
}

React.useEffect(()=>{
    dispatch(Setcartproducts())
},[])



    return(<div className="overflow-hidden min-h-[100vh]">
         <Navbar/>
         <div className="px-28 respad">
            <div className="flex gap-x-3 py-10 resgenpadding">
                <Link to="/" className="py-3 px-4 rounded-full bg-[#F5F5F5]">
                <img src="/StaticImages/Leftarrow.svg" alt="left arrow"/>
               </Link>

               <h1 className="font-playdisplay text-[24px]  font-[600]">Shopping cart</h1>
                 

            </div>
           <div className="w-full border-t-2 border-t-[#CAC4D0]">
              {Cartobjects}
             </div>

             <div className={`pt-24 pb-9 w-full ${data.length < 1 ? 'hidden':'flex'} resmaincartdiv justify-end mb-auto`}>
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
                    <p>N{data.reduce((acc, obj)=> acc + (parseInt(obj.price[0]) * obj.quantity),0)}</p>
                        <p>N10000</p>
                        <p>N2500</p>
                        <p className="font-[700]">N{data.reduce((acc, obj)=> acc + (parseInt(obj.price[0]) * obj.quantity),0) + 10000+2500}</p>
                        <Link to="/checkout" className="flex gap-x-4 p-4 spec-button bg-primary rounded-[8px] items-center ">
                           
                            <p className="text-[16px] text-white">Continue to payment</p>
                            <img src="./StaticImages/Vectorarrow.svg" alt="left arrow"/>
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
                            <img src="/StaticImages/Vectorarrow.svg" alt="left arrow"/>
                        </Link>
                        </div>
                </div>


             </div>
            
         </div>
         <Footer/>
    </div>
      
    )
} 
