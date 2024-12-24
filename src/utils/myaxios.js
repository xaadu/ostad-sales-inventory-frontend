import axios from "axios";

const myaxios = axios.create({
    baseURL: "https://inventory-api.teamrabbil.com/api",
    headers: {
        "Content-Type": "application/json",
        "X-Custom-Header": "foobar",
    },
});

myaxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.token = token;
    }
    return config;
});

export default myaxios;
