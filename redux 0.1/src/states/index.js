import { createStore, applyMiddleware } from "redux";
import { todoDeletetionCheck } from "./middlewares";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(todoDeletetionCheck));

export { store };
