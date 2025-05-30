import React from "react";
import axios from "axios"
import { Home } from "../Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { Postproducts,Setcartproducts } from "../logic";
import { useNavigate } from "react-router-dom";




export const Homeprotected = ({children}) => {
    const [loading, setloading] = React.useState(true)
    const [data, setdata] = React.useState(null)
    const dispatch = useDispatch()
 
    const FetchfromBackend = async() => {
        const api_key = process.env.REACT_APP_API_KEY
        const org_id = process.env.REACT_APP_ORG_ID
        const app_id = process.env.REACT_APP_APP_ID

        try{
        const response = await axios.get(`/products/`)
        setdata(response.data.items)
        dispatch(Postproducts(response.data.items))

        }
        catch(error){
         console.error(error)
        }
        finally{
            setloading(false)
        }
      }
      React.useEffect(()=>{
         FetchfromBackend()
      },[])

      return data !== null ? <Home data={data}/> : <div className="h-[100vh]"></div>


}

export const RouteProtected = ({children}) => {
    const [loading, setloading] = React.useState(true)
    const dispatch = useDispatch()
    const Products = useSelector(state => state.Products)
    const FetchfromBackend = async() => {
        const api_key = process.env.REACT_APP_API_KEY
        const org_id = process.env.REACT_APP_ORG_ID
        const app_id = process.env.REACT_APP_APP_ID
        
        try{
        const response = await axios.get(`/products/`)
        dispatch(Postproducts(response.data.items))
        }
        catch(error){
        console.log(error)
        }
        finally{
            setloading(false)
        }
      }
      React.useEffect(()=>{
         FetchfromBackend()
      },[])

      return Products.data ? children : <div className="h-[100vh]"></div>

    
}

export const LoginProtected =  ({children}) => {
    const user = useSelector(state => state.User)
    const navigate = useNavigate()
     
    React.useEffect(()=> {
        if(user.user){
            navigate('/', {replace : true})
        }
    })
    return user.user ? null : children
}

export const NotLoggedInProtected = ({children}) => {
    const user =  useSelector(state => state.User)
    const navigate = useNavigate()

    React.useEffect(()=> {
        if(!user.user){
            navigate('/', {replace : true})
        }
    })

    return user.user ? children : null

}


