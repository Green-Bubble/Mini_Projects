import { createStore, applyMiddleware } from "redux";
import { todoDeletetionCheck, thunk } from "./middlewares";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(todoDeletetionCheck, thunk));

export { store };
