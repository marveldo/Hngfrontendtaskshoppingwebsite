
import { json } from "react-router-dom";
import { Addproducts, SETITEM , ADDITEM, REMOVEITEM, MINUSQUANTITY , CLEARCART, LOGINUSER, LOGOUTUSER} from "./constants";



export const LoginUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    return ({
        type : LOGINUSER,
        payload : data
    })
}
export const Logoutuser = () => {
    localStorage.removeItem('user')
    return ({
        type : LOGOUTUSER
    })
}
export const Postproducts = (data) => {
    return ({
        type : Addproducts,
        payload : data
    })
}

export const Setcartproducts = () => {
    const data = JSON.parse(localStorage.getItem('cartitems')) ? JSON.parse(localStorage.getItem('cartitems')) : []
    return({
        type : SETITEM,
        payload : data
    })
}

export const Addtocartproducts = (newdata) => {
    console.log(newdata)
    const data = JSON.parse(localStorage.getItem('cartitems')) ? JSON.parse(localStorage.getItem('cartitems')) : []
    const newest_data = {
        id : newdata.id,
        name : newdata.name,
        price : newdata.current_price,
        description : newdata.description,
        picture : newdata.product_img ,
        quantity : 1
        
    }
    const existingitem = data.find(item => item.id === newdata.id)
    if(existingitem){
        const targetid = newdata.id
        const dataindex = data.findIndex(item => item.id === targetid)
        data[dataindex].quantity = data[dataindex].quantity + 1
        localStorage.setItem('cartitems', JSON.stringify(data))
    }
    else{
    data.push(newest_data)
    localStorage.setItem('cartitems', JSON.stringify(data))
    }
    return({
        type: ADDITEM,
        payload : newest_data
    })
}

export const Addtocartcart = (newdata) => {
    
    const data = JSON.parse(localStorage.getItem('cartitems')) ? JSON.parse(localStorage.getItem('cartitems')) : []
    const newest_data = {
        id : newdata.id,
        name : newdata.name,
        price : newdata.current_price ,
        description : newdata.description,
        picture : newdata.product_img,
        quantity : 1
        
    }
    const existingitem = data.find(item => item.id === newdata.id)
    if(existingitem){
        const targetid = newdata.id
        const dataindex = data.findIndex(item => item.id === targetid)
        data[dataindex].quantity = data[dataindex].quantity + 1
        localStorage.setItem('cartitems', JSON.stringify(data))
    }
    else{
    data.push(newest_data)
    localStorage.setItem('cartitems', JSON.stringify(data))
    }
    return({
        type: ADDITEM,
        payload : newest_data
    })
}
export const Minusfromcartcart = (newdata) => {
    const data = JSON.parse(localStorage.getItem('cartitems'))
    const dataindex = data.findIndex(item => item.id === newdata.id)
    if(data[dataindex].quantity <= 1 ){
        const filtered_data = data.filter((item,i)=> i !== dataindex)
        localStorage.setItem('cartitems', JSON.stringify(filtered_data))
    }
    else{
        data[dataindex].quantity = data[dataindex].quantity - 1
        localStorage.setItem('cartitems', JSON.stringify(data))
    }
    return({
        type : MINUSQUANTITY,
        payload : dataindex
    })

}

export const RemovefromProducts = (id) => {
    const data = JSON.parse(localStorage.getItem('cartitems'))
    const dataindex = data.findIndex(item => item.id === id)
    const filtered_data = data.filter((item,i)=> i !== dataindex)
    localStorage.setItem('cartitems', JSON.stringify(filtered_data))

    return({
        type: REMOVEITEM,
        payload : dataindex
    })

}

export const ClearCart = () => {
    localStorage.setItem('cartitems', JSON.stringify([]) )
   
}
