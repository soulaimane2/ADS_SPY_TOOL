import axios from "axios"
import { ACCESS_TOKEN } from "../secret/token"
export default axios.create({
    baseURL: "https://graph.facebook.com/v14.0/",
})