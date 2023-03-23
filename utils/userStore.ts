import Cookies from 'universal-cookie'

const cookies = new Cookies()

const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)) // 7 days in milliseconds

const OPTIONS = { path: '/', sameSite: true, expires: expirationDate }
const KEY = 'user'


export const storeUser = (user:any) => {
    cookies.set(KEY, user, OPTIONS)
} 

export const retrieveUser = () =>{
    try{
        const user  = cookies.get(KEY)
        if(user) return user;
        return null
    }catch(err){
        return null
    }
}

export const removeUser = () => {
    cookies.remove(KEY, OPTIONS)
}

