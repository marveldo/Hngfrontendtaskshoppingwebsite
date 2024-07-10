import React from "react";
import chair from "../DynamicImages/Rectangle.jpg"
import chair_frame from "../DynamicImages/e8a04f955225b78fbd2a33603a783398.png"
import another_chair from "../DynamicImages/c72486c8bce99ba217bedda498c54fde.png"
import random1 from "../DynamicImages/aa17d9064722a97f430fbb0738129ddb.png"
import random2 from "../DynamicImages/b0fa22f44712750078eae01a179f466a.png"
import random3 from "../DynamicImages/d9c087f46609867a686e5ba4e5f3341d.png"
import random4 from "../DynamicImages/ec24b1e75d7137d76e8c59d72787e4ff.png"
import random5 from "../DynamicImages/f54ecf228a11f4957add002a249440ea.png"
import { Link } from "react-router-dom";
import { NavHashLink as Linker } from 'react-router-hash-link';

export const Navbar = () => {

    return (<>
    <div className="w-[100vw] resnavbar bg-[#F5F5F5]   px-3 py-3 flex fixed top-0 justify-between items-center z-40">
       <div className="font-kavoon text-primary min-[801px]:text-[40px] text-[24px] pe-20">Pendo</div>
       <div className="grid min-[1250px]:gap-x-24 grid-cols-4  min-[900px]:gap-x-10 max-[800px]:hidden list-none text-center text-black font-playdisplay  ">
        
          <Linker to="/" className="p-3">Home</Linker>
          <Linker to="#section-shop" className="p-3">Shop</Linker>
          <Linker to="#section-about" className="p-3">About</Linker>
          <Linker  to="#section-footer" className="p-3">Contact</Linker>
       </div>
       <div className="flex gap-x-[16px] items-center">
       <div className="relative Searchicon2">
        <input type="text" className="px-3 py-2 rounded-[8px]  bg-[#E3E3E3]" placeholder="Search"/>
        <img src="/StaticImages/Vector.svg" className=" absolute right-0 top-0 p-2" alt="Searchlogo"/>
        </div>
        <img src="/StaticImages/Vector.svg" className="p-2 hidden Searchicon" alt="Searchlogo"/>
        <Link to="/cart"> <img src="/StaticImages/Vector (1).svg" className="p-2" alt="cart logo"/></Link> 
        <img src="/StaticImages/Vector (2).svg" className="p-2 max-[800px]:hidden" alt="Profile pic"/>
        <img src="/StaticImages/Navbar.svg" className="p-2 hidden Navicon" alt="Navicon"/>

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
        <div id="section-footer" className="flex flex-col bg-primary">
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

export const Home = () => {
    const db = [{
        id : 1,
        name : 'kilimanjaro',
        description : 'Wooden Living room chair',
        price : "N85000",
        picture : another_chair
    },
    {
        id : 2,
        name : 'kente',
        description : 'Deep seat arm chair',
        price : "N65000",
        picture : random1
    },
    {
        id : 3,
        name : 'Tonga',
        description : 'Deep coated arm chair',
        price : "N45000",
        picture : another_chair
    },
    {
        id : 4,
        name : 'Serengti',
        description : 'Deep warming chair',
        price : "N55000",
        picture : random3
    },
    {
        id : 5,
        name : 'Timbuktu',
        description : 'Deep excercising Chair',
        price : "N75000",
        picture : random4
    },
    {
        id : 6,
        name : 'Masia Sofa',
        description : 'Deep resting',
        price : "N105000",
        picture : random5
    },
]

const [data,setdata ] = React.useState(db)
const [Showcard, setshowcard] = React.useState(false)
    return(
        <div className={`overflow-x-hidden relative`}>
            <div className={`fixed top-0 ${Showcard? '' : 'hidden'}  h-[100vh] flex popupmaindiv justify-center items-center w-[100vw] bg-another-rgba z-[100]`}>
                <div className="popupnavdiv hidden m-0">
                <div className="w-[100vw] resnavbar bg-[#F5F5F5]  px-6 py-3 flex justify-between items-center z-40">
       <div className="font-kavoon text-primary min-[801px]:text-[40px] text-[24px] ">Pendo</div>
       <div className="flex min-[1250px]:gap-x-28 min-[900px]:gap-x-16 max-[800px]:hidden list-none text-center text-black font-playdisplay ps-3 ">
        
          <Linker to="/" className="p-3">Home</Linker>
          <Linker to="#section-shop" className="p-3">Shop</Linker>
          <Linker to="#section-about" className="p-3">About</Linker>
          <Linker  to="#section-footer" className="p-3">Contact</Linker>
       </div>
       <div className="flex gap-x-3">
       
        <img src="/StaticImages/Vector.svg" className="p-2" alt="Searchlogo"/>
        <Link to="/cart"> <img src="/StaticImages/Vector (1).svg" className="p-2" alt="cart logo"/></Link> 
        <img src="/StaticImages/Vector (2).svg" className="p-2 max-[800px]:hidden" alt="Profile pic"/>
        <img src="/StaticImages/Navbar.svg" className="p-2 hidden Navicon" alt="Navicon"/>
        

       </div>
    </div>
                </div>
                <div className="bg-white p-5 flex rounded-[8px] popupdiv w-[800px] relative overflow-y-auto">
                <div className="hidden popupicon2 justify-end py-3 px-2" onClick={()=>{setshowcard(false)}}>
                <img src="/StaticImages/Vectorx-cancel.svg" className="w-[20px] h-[20px]  " />
                </div>
               
                    <div className="pe-12 flex justify-center items-center popupimgdiv w-[120%] relative">
                        <img src="/StaticImages/Add to wishlistredwishlist.svg" alt="wishlist" className="absolute top-3 right-3 hidden popupicon2"/>
                        <img src={chair_frame} className="w-[190px] h-[180px] popupimg rounded-[16px]" alt="chair"/>
                    </div>
                    <div className="border-s-2 border-s-[#8E8E93] ps-12 relative popupinfo">
                        
                        <div className="py-2 pe-4 flex flex-col gap-y-4 justify-start relative">
                            <img src="/StaticImages/Vectorx-cancel.svg" className="absolute top-7 right-7 w-[20px] h-[20px] popupicon1 " onClick={()=>{setshowcard(false)}}/>
                            <p className="text-[12px] font-playdisplay">ARMLESS CHAIRS</p>
                            <h1 className="text-[20px] font-playdisplay font-[600]">Tonga</h1>
                            <div className="flex gap-x-1">
                                <img src="/StaticImages/Star 5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="/StaticImages/Star 5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="/StaticImages/Star 5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="/StaticImages/Star 5.svg" className="w-[24px] h-[24px]" alt="star"/>
                                <img src="/StaticImages/Star 5.svg" className="w-[24px] h-[24px]" alt="star"/>
                            </div>
                            <h1 className="text-[20px] font-playdisplay font-[600]">N100,000</h1>
                            <p className="text-[12px] font-playdisplay">The Tonga chair is characterized by its artistic and organic shape. The chair has two main components: a large, sweeping backrest and a contoured seat, both crafted from polished wood with rich, warm tones varying from golden yellow to deep amber.  </p>
                            <div className="flex justify-start max-[690px]:justify-center max-[690px]:mt-4">
                            <button className="flex rounded-[8px] items-center gap-x-3 py-3 px-9 bg-primary resbutton  text-white ">Add to cart <img src="StaticImages/PlusOutline.svg" className="ms-auto hidden popupicon2" alt="plus icon"/></button>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        <Navbar/>
        <div id="section-home" className="px-28 respad z-10">
            <div className=" gap-x-60 py-10 flex resnav  justify-center items-center ">
                <div className="flex flex-col resdiv respad gap-y-16 font-playdisplay w-[50%]">
                    <div>
                    <h1 className="min-[1250px]:text-[48px] min-[900px]:text-[32px] resfont  mb-6">
                     Serengeti Chair
                     </h1>
                     <p className="min-[1250px]:text-[16px] min-[900px]:text-[13px] resfontp">
                     Crafted with premium materials and meticulous design, embrace luxury and ergonomic mastery for a seating experience that celebrates African heritage sophistication and comfort in your home.
                     </p>
                    </div>
                   
                   <div>
                     <button className="py-3 px-6 rounded-[8px] text-white flex items-center gap-x-7 bg-primary">
                        <p>Buy Now </p>
                        <img src="/StaticImages/Vector arrow.svg" alt="Arrow" />
                     </button>
                     </div>
                </div>

                <div className="w-[50%] resdiv p-3">
                    <img src={chair} className="w-full" alt="chair_img"/>
                </div>
            </div>
           
        </div>
       
       <div id="section-about" className="px-2">
          <div className="px-28 respad  flex justify-between items-center py-4">
            
           <div className="min-[1250px]:text-[32px] min-[1010px]:text-[23px] font-playdisplay">Best sellers</div>
           <div className="flex gap-x-6 items-center min-[1250px]:text-[16px] min-[900px]:text-[13px] pe-3">
              <p>See all</p>
              <img src="/StaticImages/Vector arrowblack.svg" alt="Arrow"/>
           </div>
          </div>
        </div>


       <div  className="flex gap-x-1 px-2 py-4 ">
        <div className="px-28 respad w-full flex gap-x-16 overflow-x-hidden" >
            <div className="min-w-full h-[450px]  specdiv rounded-[8px]" style={{backgroundImage: `url(${chair_frame})`}}>
              <div className="w-full h-full flex bg-another-rgba rounded-[8px] items-end p-9">
                <div className="flex flex-col gap-y-3 text-white font-playdisplay">
                    <h1 className="text-[24px]">Savanna Sofa</h1>
                    <div className="text-[16px]">
                    <p>Made from rich mahogany wood with tribal-inspired patterns, </p>
                    <p>it invites you to embrace comfort infused with the essence of Africa</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="min-w-full h-[450px]  specdiv rounded-[8px]" style={{backgroundImage: `url(${chair_frame})`}}>
              <div className="w-full h-full flex bg-another-rgba rounded-[8px] items-end p-9">
                <div className="flex flex-col gap-y-3 text-white font-playdisplay">
                    <h1 className="text-[24px]">Savanna Sofa</h1>
                    <div className="text-[16px]">
                    <p>Made from rich mahogany wood with tribal-inspired patterns, </p>
                    <p>it invites you to embrace comfort infused with the essence of Africa</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="min-w-full h-[450px] specdiv rounded-[8px]" style={{backgroundImage: `url(${chair_frame})`}}>
                <div className="w-full h-full p-4 bg-another-rgba rounded-[8px] items-end">

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
    {
       data.map((obj)=> {
        return( <div key={obj.id} className="flex flex-col  gap-y-2 p-4 rounded-[8px]  bg-white  shadow-another-rgba shadow-sm" onClick={()=>{setshowcard(true)}}>
            <div className="w-full relative">
            <img src={obj.picture} className="w-full" alt="chair"/>
            <div className="p-3 bg-white absolute top-3 right-3 rounded-full">
                <img src="/StaticImages/Vector Heart.svg" alt="heart"/>
            </div>
            <div className="p-3 bg-[#EE8400] rounded-full absolute top-3 font-playdisplay text-[14px] text-white left-3">
                New
            </div>
            </div>
            
            <h1 className="font-playdisplay text-black text-[18px]">{obj.name}</h1>
            <div className="flex gap-x-1">
                <img src="/StaticImages/Star 5.svg" alt="star"/>
                <img src="/StaticImages/Star 5.svg" alt="star"/>
                <img src="/StaticImages/Star 5.svg" alt="star"/>
                <img src="/StaticImages/Star 5.svg" alt="star"/>
                <img src="/StaticImages/Star 5.svg" alt="star"/>
            </div>
            <p className="text-black font-playdisplay text-[14px]">{obj.description}</p>
            <p className="font-playdisplay text-[16px] ">{obj.price}</p>
        </div>)
       })
}
        </div>

        <Footer/>
        </div>
    )
}