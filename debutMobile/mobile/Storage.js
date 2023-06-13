import AsyncStorage from '@react-native-async-storage/async-storage'

function initLocalStorage(){
    if(!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify([]));
    }
}
export default async function addUser(user, password){
    //invalid
    if(!user){
        throw new error("error")
    }
    try{
        const prevPassword = await AsyncStorage.getItem(user);
        //no previous score, must be returning user
        if(prevPassword == null){
            await AsyncStorage.setItem(user, password);
            return 0;
        } else if (prevPassword != password){
            return -1;
        } else{
            return 1;
        }            
    } catch(e){
        throw new error("error")
    }
}
