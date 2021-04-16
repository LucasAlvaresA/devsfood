import axios from "../src/services/backend";

// const BASE = "https://api.b7web.com.br/devsfood/api";

export default {
    getCategories: async () => {
        //GET /categories
        // const res = await fetch(BASE+"/categories");
        // const json = await res.json();
        // return json;

        let response = await axios.get("/categories");
        return response.data;
    },
    getProducts: async (category, page, search) => {
        //GET /products ([search, page, category])
        let fields = {};
        if(category !== 0) {
            fields.category = category;
        }
        if(page > 0) {
            fields.page = page;
        }
        if(search !== "") {
            fields.search = search;
        }
        
        let queryString = new URLSearchParams(fields).toString();
        let response = await axios.get("/products?"+queryString);
        return response.data;
    }   
}