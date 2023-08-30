import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url, config = {}){
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const axiosDefault = {};
    const instance = axios.create({
        ...axiosDefault,
        ...config
    });

    const call = async (url, config = {})=> {
        
        let response = null;
        
        try{
            setLoading(true);
            response = await instance.request({
                url,
                ...config
            });
        }catch(error){
            
            

        }finally{
            setLoading(false);
        }

        return {
            response                
        }
    };

    useEffect(()=>{
        (async function(){
            if(!url) return; 
            let response = await call(url, config);
            setResponse(response);
        })();
    }, []);

    return {
        response,
        loading,
        call
    }

}