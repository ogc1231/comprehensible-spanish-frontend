import axios from "axios";

axios.defaults.baseURL = "https://comp-spanish-api-35f1e1574e0f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();