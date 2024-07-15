import React from "react";
import { Navbar,Footer } from "./Home";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Addtocartproducts } from "../logic";

export const Productssection = () => {
const Products = useSelector(state => state.Products)
const [db, setdb] = React.useState(Products.data)
const [data,setdata ] = React.useState(Products.data.slice(0,9))
const [Showcard, setshowcard] = React.useState(false)
const [broughtoutdata, setbroughtoutdata] = React.useState(null)
const dispatch = useDispatch()
const navigate = useNavigate()

    
 const searchdata = (event) => {
    const value = event.target.value
    if(value === ''){
     setdata(Products.data.slice(0,10))
     setdb(Products.data)
    }
  else{
    const filteredata = db.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))
    setdb(filteredata)
    setdata(filteredata)

  }
    
    
 }
 const Cartfunction =()=> {
    dispatch(Addtocartproducts(broughtoutdata))
    navigate('/cart')
}

 const showdiv = (index) => {
       setbroughtoutdata(data[index])
       setshowcard(true)
 }

    return(<div className="overflow-hidden relative min-h-[100vh]">
          <div className={`fixed top-0 ${Showcard? '' : 'hidden'}  h-[100vh] flex popupmaindiv  z-[100] justify-center items-center w-[100vw] bg-another-rgba `} >
                <div className="popupnavdiv hidden m-0">
                <div className="w-[100vw] resnavbar bg-[#F5F5F5]  px-6 py-3 flex justify-between items-center z-40">
       <div className="font-kavoon text-primary min-[801px]:text-[40px] text-[24px] ">Pendo</div>
       <div className="flex min-[1250px]:gap-x-28 min-[900px]:gap-x-16 max-[800px]:hidden list-none text-center text-black font-playdisplay ps-3 ">
        
          <Link to="/" className="p-3">Home</Link>
          <Link href="/products" className="p-3">Shop</Link>
          <a href="#section-about" className="p-3">About</a>
          <a  href="#section-footer" className="p-3">Contact</a>
       </div>
       <div className="flex gap-x-3">
       
        <img src="./StaticImages/Vector.svg" className="p-2" alt="Searchlogo"/>
        <Link to="/cart"> <img src="./StaticImages/Vector(1).svg" className="p-2" alt="cart logo"/></Link> 
        <img src="./StaticImages/Vector(2).svg" className="p-2 max-[800px]:hidden" alt="Profile pic"/>
        <img src="./StaticImages/Navbar.svg" className="p-2 hidden Navicon" alt="Navicon"/>
        

       </div>
    </div>
                </div>
                <div className="bg-white p-5 flex rounded-[8px] popupdiv w-[800px] relative overflow-y-auto">
                <div className="hidden popupicon2 justify-end py-3 px-2" onClick={()=>{setshowcard(false)}}>
                <img src="./StaticImages/Vectorx-cancel.svg" className="w-[20px] h-[20px]  " />
                </div>
               
                    <div className="pe-12 flex justify-center items-center popupimgdiv w-[120%] relative">
                        <img src="./StaticImages/Addtowishlistredwishlist.svg" alt="wishlist" className="absolute top-3 right-3 hidden popupicon2"/>
                        <img src={broughtoutdata? `https://api.timbu.cloud/images/${broughtoutdata.photos[0].url}`: ''} className="w-[190px] h-[180px] popupimg rounded-[16px]" alt="chair"/>
                    </div>
                    <div className="border-s-2 border-s-[#8E8E93] ps-12 relative popupinfo">
                        
                        <div className="py-2 pe-4 flex flex-col gap-y-4 justify-start relative">
                            <img src="./StaticImages/Vectorx-cancel.svg" className="absolute top-7 right-7 w-[20px] h-[20px] popupicon1 " onClick={()=>{setshowcard(false)}}/>
                            <p className="text-[12px] font-playdisplay">SOFAS</p>
                            <h1 className="text-[20px] font-playdisplay font-[600]">{broughtoutdata? broughtoutdata.name: ''}</h1>
                            <div className="flex gap-x-1">
                                <img src="./StaticImages/Star5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="./StaticImages/Star5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="./StaticImages/Star5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="./StaticImages/Star5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="./StaticImages/Star5.svg" className="w-[24px] h-[24px]" alt="star"/>
                            </div>
                            <h1 className="text-[20px] font-playdisplay font-[600]">N{broughtoutdata? broughtoutdata.current_price[0].NGN : ''}</h1>
                            <p className="text-[12px] font-playdisplay">{broughtoutdata? broughtoutdata.description : ''} </p>
                            <div className="flex justify-start max-[690px]:justify-center max-[690px]:mt-4">
                            <button className="flex rounded-[8px] items-center gap-x-3 py-3 px-9 bg-primary resbutton  text-white " onClick={Cartfunction}>Add to cart <img src="StaticImages/PlusOutline.svg" className="ms-auto hidden popupicon2" alt="plus icon"/></button>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
         <Navbar change={searchdata}/>
         <div className="px-28 respad">
            <div className="flex gap-x-3 py-10 resgenpadding">
                <Link to="/" className="py-3 px-4 rounded-full bg-[#F5F5F5]">
                <img src="/StaticImages/Leftarrow.svg" alt="left arrow"/>
               </Link>

               <h1 className="font-playdisplay text-[24px]  font-[600]">Products</h1>
                 

            </div>
           <div className="w-full border-t-2 border-t-[#CAC4D0]">
           { data.map((obj,index)=>{
              return(
                <div key={obj.id} className="w-full flex justify-between border-b-[#CAC4D0] border-b-2 py-8" onClick={()=>{showdiv(index)}} >
                <div className="flex gap-x-10 resgap">
                    <img src={`https://api.timbu.cloud/images/${obj.photos[0].url}`} className="w-[100px] h-[100px] rounded-[8px]" alt="chair image"/>
                    <div className="flex flex-col gap-y-2 justify-end">
                        <h1 className="font-playdisplay text-[20px] font-[500] largecartfont">{obj.name}</h1>
                        <p className="smallcartfont">{obj.description.slice(0,50)}.....</p>

                    </div>
                </div>
                <div className="flex flex-col gap-y-4 font-playdisplay text-[20px] justify-end">
                    <p className="largecartfont">N{obj.current_price[0].NGN}</p>
                </div>
                
            </div>
              )
           })}
             </div>

             <div className="pt-24 pb-9 w-full flex justify-center">
               
                 <div className="flex gap-x-3">
                    <div className="py-2 px-4 text-white cursor-pointer bg-black rounded-[16px]" onClick={()=>{setdata(Products.data.slice(0,9))}}>1</div>
                    <div className={`py-2 ${db.length <= 10 ? 'hidden' : ''} px-4 text-white cursor-pointer bg-black rounded-[16px]`} onClick={()=> {setdata(Products.data.slice(10,20))}}>2</div>
                    <div className={`py-2 px-4 ${db.length <= 20 ? 'hidden' : ''}   text-white cursor-pointer bg-black rounded-[16px]`} onClick={()=> {setdata(Products.data.slice(21,30))}}>3</div>
                 </div>
          

             </div>
            
         </div>
         <Footer/>
    </div>
      
    )
}