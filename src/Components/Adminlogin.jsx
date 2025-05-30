import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../logic'
import { useNavigate } from 'react-router-dom'


export const LoginPage = () => {
    const [formobj , setformobj] = React.useState({username : '', password : ''})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading ,setloading] = React.useState(false)

    const formchange = (e) => {
       const {name , value} = e.target
       setformobj((prev) => {
        return ({
         ...prev ,
         [name] : value
         })
       })
    }

    const Submit =  async() => {
       
       try {
        setloading(true)
        const response = await axios.post('/users/login/', formobj )
        dispatch(LoginUser(response.data))
        
        navigate('/', {replace : true})

        
    }
    catch(error){
        console.error(error)
    }
    finally{
        setloading(false)
    }
    }
        

    const SubmitForm = (e) => {
        e.preventDefault()
        
        Submit()

      
        
    }

  
    return (
      <main className="flex-grow mb-40">
        <div className="flex justify-center items-center pt-32 ">
            <div className="p-20 max-[500px]:p-6 max-[350px]:p-2 space-y-10 shadow-[#0000000A] shadow-lg">
                <div className="flex flex-col gap-y-2 text-center mb-3">
                     <h1 className="font-kavoon text-primary text-[44px]">Pendo Admin</h1>
                </div>

                <form className='flex flex-col gap-y-6 w-[75vw] max-w-[452px] min-w-[326px]' onChange={formchange} onSubmit={SubmitForm}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' name='username' placeholder='Enter Your admin Username' type="text" className={"h-[50px] italic border-2"} value={formobj.username} required/>

                    <label htmlFor="password">Password</label>
                    <input id='password' name='password' type="password"  value={formobj.password} placeholder='Enter Your admin Password' className={"h-[50px] italic border-2"} required/>

                    <div className='w-full flex justify-center '>
                        <button className='py-3 rounded-[8px] text-white bg-primary transition-all duration-200  hover:scale-105 px-8' disabled={loading}>
                          Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </main>
    )
}