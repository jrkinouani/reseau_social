import { createStore, compose, applyMiddleware} from "redux";
import reducer from "./authenticate/reducer"
import thunkMiddleware from "redux-thunk";


const store = createStore(
    reducer,
    compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;