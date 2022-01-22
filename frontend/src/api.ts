import axios from "axios";

let API_URL = process.env.REACT_APP_API_URL;
let mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
export function fetchProducts (){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: any){
    return axios.post(`${API_URL}/orders`, payload) 
}

