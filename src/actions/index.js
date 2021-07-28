import { GET_PRODUCTS, GET_CATEGORIES } from "../constants/action-types";
import axios from "axios";

export const getProducts = () => {
    return (dispatch) => {
        return axios.get('https://fakestoreapi.com/products')
            .then(response => response.data)
            .then(data => {
                dispatch({ type: GET_PRODUCTS, payload: data });
            });
    };
};


export const getCategories = () => {
    return (dispatch) => {
        return axios.get('https://fakestoreapi.com/products/categories')
            .then(response => response.data)
            .then(data => {
                dispatch({ type: GET_CATEGORIES, payload: data });
            });
    };
};
