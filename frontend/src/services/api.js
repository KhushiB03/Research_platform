import axios from "axios";
const API = axios.create({
    baseURL:"https://www.localhost:5000/api"
});
export default API;