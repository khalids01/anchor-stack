import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

const api = axios.create({
    baseURL,
})

api.defaults.headers.common['Content-Type'] = "application/json";


export default api