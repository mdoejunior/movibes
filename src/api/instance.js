import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        Accept:"application/json",
    },
    params:{
        api_key:'72943a4efc1934f2c39ad9a8c6611624'
    }
})