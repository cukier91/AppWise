import { ActionTypes } from "../const/action-types";

const initialState = {
	products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, payload],
			};
		case ActionTypes.FETCH_PRODUCTS:
			return { ...state, products: payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			console.log(payload)
			return { ...state, products: state.products.filter(product => product.id !== payload) };
		default:
			return state;
	}
};

// export const selectedProductReducer = (state = {}, { type, payload }) => {
// 	switch (type) {
// 		case ActionTypes.SELECTED_PRODUCT:
// 			return { ...state, ...payload };
// 		default:
// 			return state;
// 	}
// };
