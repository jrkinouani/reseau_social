import { 
    FETCH_REQUEST, 
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './action';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    user: {},
    error:"",
};


const loginReducer = (state = initialState, action) => {
    switch ( (action.type)) {
        case FETCH_REQUEST:
            return {
                ...state,
                loggingIn: true, 
                user: action.user
            };

            case FETCH_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                    loggingIn: true,
                    user: action.user
            };
            
            case FETCH_FAILURE:
            return {
                ...state,
                loggingIn: false,
                    loggingIn: false,
                    user: {},
                    error: action.error
            };
        default:
            return state;
            
    }
};

export default loginReducer;