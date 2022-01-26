import axios from "axios";
import { User } from "./types";

let API_URL = process.env.REACT_APP_API_URL;
let mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchUsers(){
    return axios(`${API_URL}/users`)
}

export function fetchUsersDate(startDate: string, endDate: string){
    return axios(`${API_URL}/users/date?startDate=${startDate}&endDate=${endDate}`)
}

export function postUsers(user: User){
    return axios.post(`${API_URL}/users`, user)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function fetchCountries(){
    return axios("https://countriesnow.space/api/v0.1/countries")
}