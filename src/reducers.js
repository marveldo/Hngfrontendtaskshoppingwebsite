import { Addproducts , ADDITEM , REMOVEITEM, SETITEM, MINUSQUANTITY, CLEARCART} from "./constants";


const InitialProductState = {
    data : null
}
const InitialCartState = {
    data: []
}


export const Productreducer = (state = InitialProductState, action)=> {

    switch(action.type){
        case Addproducts :
            return({
                ...state,
                data: action.payload
            })
        default:
            return state
    }
    
}

export const CartReducer = (state = InitialCartState, action) => {
    
    switch(action.type){
        case ADDITEM :
            const newitem = action.payload
            const existingitem = state.data.find(item => item.id === newitem.id)

            if(existingitem){
               return ({
                ...state,
                data : state.data.map(item => item.id === newitem.id ? {...item, quantity : item.quantity + newitem.quantity} : item)
               })
            }
            else{
                return({
                    ...state,
                    data : [...state.data, newitem]
                })
            }
            
        case REMOVEITEM :
            const index = action.payload
            return({
                ...state,
                data : state.data.filter((item,i)=> i !== index)
            })
        case SETITEM:
            return({
                ...state,
                data : action.payload
            })
        case MINUSQUANTITY :
            const number = action.payload
            const stateobject = state.data[number]
            if(stateobject.quantity <= 1){
                return({
                    ...state,
                    data : state.data.filter((item,i)=> i !== number)
                })
            }
            else{
                return({
                    ...state,
                    data : state.data.map(item => item.id === stateobject.id ? {...item , quantity : item.quantity - 1} : item)
                })
            }
        default:
            return state
            
    }
}

