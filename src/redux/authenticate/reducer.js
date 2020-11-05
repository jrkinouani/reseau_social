import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from "./action";


const initialState = {
    loading: false,
    user: null
};

const authenticateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                loading: false,
                    user: action.user
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default authenticateReducer;