import axios from "axios";

const LOGIN_USER = "/api/token/";
const UPDATE_TOKEN = "/api/token/refresh/"

const loginUser = async (data) => {
    const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${LOGIN_USER}`,
        data
    );
    return resp.data;
};

const updateUser = async (data) => {
    const resp = await axios.post(`${import.meta.env.VITE_BASE_URL}${UPDATE_TOKEN}`, data)
    return resp.data
}

const authServices = {
    loginUser,
    updateUser
};

export default authServices;
