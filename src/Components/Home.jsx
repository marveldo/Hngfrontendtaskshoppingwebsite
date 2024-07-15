import React from "react";


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Addtocartproducts } from "../logic";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export const Navbar = (props) => {
    const location = useLocation()
    const [resnav, setresnav] = React.useState(false)
    const Currentpath = location.pathname
    return (<>
    <div className="w-[100vw] resnavbar bg-[#F5F5F5]   px-3 py-3 flex fixed top-0 justify-between items-center z-40">
       <div className="font-kavoon text-primary min-[801px]:text-[40px] text-[24px] pe-20">Pendo</div>
       <div className="grid min-[1250px]:gap-x-24 grid-cols-4  min-[900px]:gap-x-10 max-[870px]:hidden list-none text-center text-black font-playdisplay  ">
        
          <Link to="/" className={`p-3 hover:text-primary ${Currentpath === "/" ? 'text-primary' : ''} `}>Home</Link>
          <Link to="/products" className={`p-3 hover:text-primary ${Currentpath === "/products" ? 'text-primary' : '' }`}>Shop</Link>
          <a href="#section-about" className="p-3 hover:text-primary">About</a>
          <a href="#section-footer" className="p-3 hover:text-primary">Contact</a>
       </div>
       <div className="flex gap-x-[16px] items-center">
       <div className="relative Searchicon2">
        <input type="text" className="px-3 py-2 rounded-[8px]  bg-[#E3E3E3]" placeholder="Search" onChange={props.change}/>
        <img src="/StaticImages/Vector.svg" className=" absolute right-0 top-0 p-2" alt="Searchlogo"/>
        </div>
        <img src="/StaticImages/Vector.svg" className="p-2 hidden Searchicon" alt="Searchlogo"/>
        <Link to="/cart"> <img src="/StaticImages/Vector(1).svg" className="p-2" alt="cart logo"/></Link> 
        <img src="/StaticImages/Vector(2).svg" className="p-2 max-[800px]:hidden" alt="Profile pic"/>
        <img src="/StaticImages/Navbar.svg" className="p-2 min-[880px]:hidden Navicon cursor-pointer" alt="Navicon" onClick={()=>{setresnav(true)}}/>

       </div>
    </div>

    <div className={`fixed top-0 bg-[#F5F5F5] animate__animated animate__slideInRight ${resnav? 'flex': 'hidden'} min-[870px]:hidden w-[100%] h-[100vh] z-[120] px-4 pt-6  justify-between`}>
        <div className="flex flex-col gap-y-12 text-black font-playdisplay">
            <h1 className="text-[23px]">Menu</h1>
            <div className="flex flex-col gap-y-7 text-black font-playdisplay list-none">
                <Link to="/" className={`hover:text-primary ${Currentpath === "/" ? 'text-primary' : ''} `} onClick={()=>{setresnav(false)}}>Home</Link>
                <Link to="/products" className={`hover:text-primary ${Currentpath === "/products" ? 'text-primary' : '' }`} onClick={()=>{setresnav(false)}}>Shop</Link>
                <a href="#section-about" className="hover:text-primary" onClick={()=>{setresnav(false)}}>About</a>
                <a href="#section-footer" className="hover:text-primary" onClick={()=>{setresnav(false)}}>Contact</a>
                <Link to="/cart"  className="hover:text-primary" onClick={()=>{setresnav(false)}}><img src="/StaticImages/Vector(1).svg" className="p-2" alt="cart logo"/></Link>
                <li>SignUp</li>
            </div>
        </div>
        <div className="flex pt-1">
        <img src="./StaticImages/Vectorx-cancel.svg" className="w-[20px] h-[20px]  " onClick={()=>{setresnav(false)}} />
        </div>

    </div>



    <div className="w-[100vw] px-6 py-3 flex opacity-0 justify-between items-center">
       <div className="font-kavoon text-primary text-[40px]">Pendo</div>
       <div className="flex gap-x-28 list-none text-center text-black font-playdisplay ps-3 ">
        
          <li className="p-3">Home</li>
          <li className="p-3">Shop</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
       </div>
       <div className="flex gap-x-3">
        <img src="/StaticImages/Vector.svg" className="p-2" alt="Searchlogo"/>
        <img src="/StaticImages/Vector (1).svg" className="p-2" alt="cart logo"/>
        <img src="/StaticImages/Vector (2).svg" className="p-2" alt="Profile pic"/>
        <img/>

       </div>
    </div>
    </>)
}

export const Footer = () => {
      return(
        <div id="section-footer" className="flex flex-col bg-primary mt-auto">
        <div className="sm:p-28 p-10 bg-primary flex resfooter flex-row  justify-between  w-full relative">
            <div className="flex flex-col gap-y-6 w-[33%] mb-7 resmaindiv">
                <h1 className="font-kavoon text-white text-[40px]">Pendo</h1>
                <p className="text-white text-[16px] font-playdisplay font-normal  ">At Pendo, we blend the rich heritage of African craftsmanship with modern comfort, creating furniture that tells a story. Each piece is thoughtfully designed to bring the warmth and beauty of Africa into your home, prioritizing both elegance and sustainability.</p>
                <div className="flex flex-row gap-x-2 list-none">
                        <li><img src="/StaticImages/Instagram.svg" alt="Instagram"/></li>
                        <li><img src="/StaticImages/Pinterest.svg" alt="Pinterst"/></li>
                        <li><img src="/StaticImages/Facebook.svg" alt="Facebook"/></li>
                        <li><img src="/StaticImages/X.svg" alt="X"/></li>
              
                       </div>
            </div>

            <div className="flex flex-col  font-playdisplay text-white text-[14px] items-center resfooterdiv  list-none w-[33%]">
                <div className="flex flex-col gap-y-5">
                <li className="text-[16px] font-[500]">Shop</li>
                        <li>Bestsellers</li>
                        <li>Catalog</li>
                        <li>Cart</li>
                        <li>Armless chairs</li>
                        <li>Sofas</li>
                        <li>Slipper chairs</li>
                </div>
                        
                      </div>

             <div className="flex flex-col  font-playdisplay text-white text-[14px]  items-center resfooterdiv list-none w-[33%] ">

                <div className="flex flex-col gap-y-5">
                        <li className="text-[16px] font-[500]">Company</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Location</li>
                 </div>
                      </div>
        <div className="flex flex-col  font-playdisplay text-white text-[14px]  items-center  resfooterdiv list-none w-[33%] ">
                    <div className="flex flex-col gap-y-5">
                        <li className="text-[16px] font-[500]">Support</li>
                        <li>Privacy</li>
                        <li>Terms and Condition</li>
                        <li>FAQs</li>
                        <li>Login</li>
                    </div>
     </div>
           
       
        </div>
            <div className="mt-auto text-[14px] text-white py-5 flex justify-center font-playdisplay w-full text-cnter">
           <p>@2024 Pendo Furniture. All Rights Reserved</p>
           </div>
             
        </div>
      )
}

export const Home = (props) => {
const [data,setdata ] = React.useState(props.data ? props.data.slice(0,11) : [])
const [randomdata, setrandomdata] = React.useState(props.data ? props.data[0]: null)
const [Showcard, setshowcard] = React.useState(false)
const [reanimate, setreanimate] = React.useState(true)
const [broughtoutdata, setbroughtoutdata] = React.useState(null)
const Products = useSelector(state => state.Products)
const navigate = useNavigate()
const dispatch = useDispatch()
// console.log(randomdata)


const showcard = (index) => {
  setbroughtoutdata(data[index])
  setshowcard(true)
}

const mainbuttonclick = () =>{
    setbroughtoutdata(randomdata)
    setshowcard(true)
}

const searchdata = (event) => {
   const value = event.target.value
   if(value === ''){
    setdata(Products.data)
   }
 else{
   const filteredata = data.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))
   setdata(filteredata)
 }
   
   
}

const Cartfunction =()=> {
    dispatch(Addtocartproducts(broughtoutdata))
    navigate('/cart')
}
let productsdata = ''

if (data){
    productsdata =  data.map((obj,index)=> {
        return( <div key={obj.id} className="flex flex-col  gap-y-2 p-4 rounded-[8px] cursor-pointer bg-white  shadow-another-rgba shadow-sm" onClick={()=>{showcard(index)}}>
            <div className="w-full relative">
            <img src={`https://api.timbu.cloud/images/${obj.photos[0].url}`} className="w-full   rounded-[8px]" alt="chair"/>
          
            </div>
            
            <h1 className="font-playdisplay text-black text-[18px]">{obj.name}</h1>
            <div className="flex gap-x-1">
                <img src="/StaticImages/Star5.svg" alt="star"/>
                <img src="/StaticImages/Star5.svg" alt="star"/>
                <img src="/StaticImages/Star5.svg" alt="star"/>
                <img src="/StaticImages/Star5.svg" alt="star"/>
                <img src="/StaticImages/Star5.svg" alt="star"/>
            </div>
            <p className="text-black font-playdisplay text-[14px]">{obj.description.slice(0,20)}...........</p>
            <p className="font-playdisplay text-[16px] ">N{obj.current_price[0].NGN }</p>
        </div>)
       })
}
else{
    productsdata = ''
}


 React.useEffect(()=>{
    setreanimate(true)
    const intervalid = setInterval(()=>{
        
        if(props.data.length === 0){
        setrandomdata(null)
    }
    else{
        setrandomdata(props.data[Math.floor(Math.random() * props.data.length)]);
        setreanimate(false)
    }
    }, 5000)
    
    return () =>  clearInterval(intervalid)
},[randomdata])







    return(
        <div className={`overflow-x-hidden relative ${Showcard? 'overflow-hidden': ''} z-[50] min-h-[100vh]`}>
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
        <div id="section-home" className="px-28 respad z-10">
            <div className=" gap-x-60 py-10 flex resnav overflow-y-hidden  justify-center items-center ">
                <div className={`flex flex-col  ${reanimate? 'animate__animated animate__fadeInUp' : ''} resdiv respad gap-y-16 font-playdisplay w-[50%]`}>
                    <div>
                    <h1 className="min-[1250px]:text-[48px] min-[900px]:text-[32px] resfont  mb-6">
                     {randomdata? randomdata.name: ''}
                     </h1>
                     <p className="min-[1250px]:text-[16px] min-[900px]:text-[13px] resfontp">
                   {randomdata? randomdata.description : ''}
                     </p>
                    </div>
                   
                   <div>
                     <button className="py-3 px-6 rounded-[8px] text-white flex items-center gap-x-7 bg-primary" onClick={mainbuttonclick}>
                        <p>Buy Now </p>
                        <img src="/StaticImages/Vectorarrow.svg" alt="Arrow" />
                     </button>
                     </div>
                </div>

                <div className="w-[50%] resdiv p-3">
                    <img src={randomdata?`https://api.timbu.cloud/images/${randomdata.photos[0].url}`: ''} className="w-full" alt="chair_img"/>
                </div>
            </div>
           
        </div>
       
       <div id="section-about" className="px-2">
          <div className="px-28 respad  flex justify-between items-center py-4">
            
           <div className="min-[1250px]:text-[32px] min-[1010px]:text-[23px] font-playdisplay">Best sellers</div>
           <div className="flex gap-x-6 items-center min-[1250px]:text-[16px] min-[900px]:text-[13px] pe-3">
              <Link to="/products" className="hover:text-primary cursor-pointer ">See all</Link>
              <img src="/StaticImages/Vectorarrowblack.svg" alt="Arrow"/>
           </div>
          </div>
        </div>


       <div  className="flex gap-x-1 px-2 py-4 ">
        <div className="px-28 respad w-full flex gap-x-16 overflow-x-hidden" >
            <div className="min-w-full h-[450px]  specdiv rounded-[8px]" style={{backgroundImage: `url(${randomdata ? 'https://api.timbu.cloud/images/'+ randomdata.photos[0].url : ''})`}}>
              <div className="w-full h-full flex bg-another-rgba rounded-[8px] items-end p-9">
                <div className="flex flex-col gap-y-3 text-white font-playdisplay">
                    <h1 className="text-[24px]">{ randomdata ? randomdata.name : ''}</h1>
                    <div className="text-[16px]">
                    <p>{ randomdata ? randomdata.description.slice(0,58) : ''}</p>
                    <p>{randomdata ? randomdata.description.slice(58,108) : ''}......</p>
                    </div>
                </div>
              </div>
            </div>

           
        </div>
       
        
        
      </div>

      <div id="section-shop" className="px-28 respad py-4 min-[1250px]:text-[32px] flex justify-between items-center min-[1010px]:text-[23px] font-playdisplay">
        <h1>Catalog</h1>
        <div className="Searchicon2 flex items-center gap-x-4 ">
           <p className="text-[18px]">Sort by :</p>
           <div className="relative p-0 flex items-center">
           <img className="absolute top-4 right-5" src="/StaticImages/Dropdown.svg"/>
           <select className="bg-[#F5F5F5] text-[12px] appearance-none  w-[206px] p-3 ">
                  <option>Sofas</option>
           </select>
           </div>
        </div>
        
        </div>
      <div  className="py-10 respad rescatalogdiv px-28 grid grid-cols-3 gap-x-[24px] max-[800px]:grid-cols-1 gap-y-[24px] ">
    { productsdata}
        </div>

        <Footer/>
        </div>
    )
}