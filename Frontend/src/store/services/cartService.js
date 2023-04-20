import axios from "axios"

const ADD_TO_CART = '/api/cart/'

const addToCart = async (data, token) => {
    const resp = axios.post(`${import.meta.env.VITE_BASE_URL}${ADD_TO_CART}`, data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    return resp.data
}

const getCart = async (token) => {
    const resp = axios.get(`${import.meta.env.VITE_BASE_URL}${ADD_TO_CART}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    return resp.data
}

const cartServices = {
    addToCart,
    getCart,
}

export default cartServices
