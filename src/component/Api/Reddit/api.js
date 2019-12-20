import { ToastAndroid } from 'react-native';

export const popularApi = async () =>{
    try {
        const url =  "https://www.reddit.com/r/popular.json";
        const response = await fetch(url);
        if(response.status !== 200){
            throw("bad request");
        }
        const result = await response.json();
        let data = result.data.children;    
        ToastAndroid.show('Refresh', ToastAndroid.SHORT)    
        return data;
    } catch(err){
        throw(err)
    }
}
  