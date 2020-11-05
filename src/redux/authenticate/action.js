export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS= "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const fetchRequest = () => {
    console.log("request")
    return {
        type: FETCH_REQUEST,
    };
};

export const fetchSuccess = (user) => {
    console.log("success")
    return {
        type: FETCH_SUCCESS,
        user: user
    };
};

export const fetchFailure = error => {
    console.log("failure")
    return {
        type: FETCH_FAILURE,
    };
};
