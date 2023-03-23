import api from './api'

export const signup = ({userName, email, password}:{userName: string, email: string, password: string}) => {
    const res = api.post('/register', {userName, email, password})
    return res
}  

export const signin = ({ email, password}:{email: string, password: string}) => {
    const res = api.post('/login', { email, password})
    return res
}  

export const logout = () => {
    const res = api.get('/logout')
    return res
}  