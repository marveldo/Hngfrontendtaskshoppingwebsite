import { AxiosError } from "axios";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LoginUser , Logoutuser} from "./logic";


const baseURL = 'https://pendobackend.vercel.app/api/v1'
export const useAxios = () => {
    const user = useSelector(state => state.User)
    const tokens = user.user
    const dispatch = useDispatch()
    const axiosinstance = axios.create({
        baseURL : baseURL,
        headers : {
            'Content-Type' : 'multipart/form-data',
            'Authorization' : `Bearer ${tokens.access}`
        }
    })

    axiosinstance.interceptors.response.use(
        (response) => response,
        async(error) => {
          const originalRequest = error.config;
           if (error.response?.status === 401 && !originalRequest._retry){
             originalRequest._retry = true;

             try {
                const response = await axios.post('/users/refresh/', {refresh : tokens.refresh})
                dispatch(LoginUser(response.data))
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`
                return axiosinstance(originalRequest)

             }
             catch(error){
                if(error.response?.status === 401){
                    console.log('Refresh Token Expired')
                    dispatch(Logoutuser())
                }
                return Promise.reject(error)
             } 
           }

           return Promise.reject(error)
        }
    )

    return axiosinstance
}