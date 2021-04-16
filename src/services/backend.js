import axios from "axios";

export default axios.create({
    baseURL:"https://api.b7web.com.br/devsfood/api",
    headers:{
        "Authorization":`Bearer 4y6544444444444465465`
    }
})