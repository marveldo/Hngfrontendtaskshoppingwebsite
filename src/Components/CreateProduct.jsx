import React from "react";
import { useAxios } from "../axios";
import { useNavigate } from "react-router-dom";


export const CreateProductComponent = () => {
     const [formobj , setformobj ] = React.useState({ name : '' , description : '' , product_img : '', current_price : ''})
     const  [PreviewUrl , setPreviewUrl] = React.useState(null)
     const axios_instance = useAxios()
     const [loading , setloading] = React.useState(false)
     const navigate = useNavigate()
     
     const Inputchange = (e) => {
        const {name , value } = e.target
        if (name === "product_img" ){
           const file = e.target.files[0]
           if (file){
            setformobj((prev) => {
                return({
                    ...prev,
                    product_img : file
                })
            })

            setPreviewUrl(URL.createObjectURL(file))
           }
         }
        else{
        setformobj((prev) => {
           
            return ({
                ...prev,
                [name] : value
            })
        })


     }
    }

    const Dragelement = (e) => {
      e.preventDefault()
      const files = e.dataTransfer.files
     if(files && files.length > 0) {
        const file = files[0]
        setformobj((prev) => {
           
            return ({
                ...prev,
                'product_img' : file
            })
        })
        setPreviewUrl(URL.createObjectURL(file))
     }
    }
    

    const Submit_to_backend = async(data) => {
        try {
            setloading(true)
            const response  = axios_instance.post('/products/', data)
            navigate('/')

        }
        catch(error){
            console.log(error)
        }
        finally{
            setloading(false)
        }
    }
    
    
    const Submit = (e) => {
      e.preventDefault()
      if (formobj.current_price < 0  ||  formobj.product_img === ''){
        console.log("Form has not been completed")
      }
      const formData = new FormData()
      Object.entries(formobj).forEach(([key , value])=> {
         formData.append(`${key}`, value)
      })

      Submit_to_backend(formData)

    }
     
     return (
          <main className="flex-grow mb-40">
             <div className="flex justify-center items-center pt-32 ">
                 <div className="p-20 max-[500px]:p-6 max-[350px]:p-2 space-y-10 shadow-[#0000000A] shadow-lg">
                  <div className="flex flex-col gap-y-2 text-center mb-3">
                     <h1 className="font-kavoon text-primary text-[44px]">Create Product</h1>
                  </div>
                   <form className='flex flex-col gap-y-6 w-[75vw] max-w-[452px] min-w-[326px]' onChange={Inputchange} onSubmit={Submit}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' placeholder='Enter Product name' type="text" className={"h-[50px] italic border-2"} value={formobj.name} required/>

                    <label htmlFor="description">Description</label>
                    <input id='description' name='description' type="text"  value={formobj.description} placeholder='Enter description pof Product' className={"h-[150px] italic"} required/>

                    <label htmlFor="current_price">Price</label>
                    <input id='current_price' name='current_price' type="number"  value={formobj.current_price} placeholder='Enter Price Of Product' className={"h-[50px] italic border-2"} required/>
                    
                    <label htmlFor="product_img" className="h-[250px]  text-center border-2 border-primary" onDrop={Dragelement} onDragOver={(e)=> {e.preventDefault()}}>
                       {PreviewUrl ? <img  className="w-full h-full" src={PreviewUrl}/> : <p className="h-full flex items-center justify-center"> Click Or drag this box to input an Image </p>}
                    </label>
                    <input type="file" accept="image/*" id="product_img" name='product_img' className="hidden"/>
                    <div className='w-full flex justify-center '>
                        <button className='py-3 rounded-[8px] text-white bg-primary transition-all duration-200  hover:scale-105 px-8' disabled={loading} >
                          Submit
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </main>
     )
    
}