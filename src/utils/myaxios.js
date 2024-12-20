import axios from "axios";

const myaxios = axios.create({
    baseURL: "https://inventory-api.teamrabbil.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default myaxios;
