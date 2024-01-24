import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URI
})
//lưu token (LocalStorage, Cookie)
// interceptor (đánh chặn)
export default apiClient;