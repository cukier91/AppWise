import { ActionTypes } from "../const/action-types";
import axios from "axios"
import { response } from "msw";

export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get("/api/products");

	dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data.products });
};

export const AddProduct = (product) => async (dispatch) => {
	const response = await fetch('/api/products', { method: 'POST', body: JSON.stringify(product)}).then(data => data.json())
	dispatch({ type: ActionTypes.ADD_PRODUCT, payload: response.product});
};

export const deleteProduct = (id) => async (dispatch) => {
	const response = fetch(`/api/products/${id}`, {method: "DELETE"})
	dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT, payload: id});
};

