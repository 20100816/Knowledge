import axios from 'axios'
const request = axios.create({
    baseURL: 'https://www.escook.cn'
})
export default request