import { combineReducers } from "redux";
import changeInputNumber from "./increaseDecreaseReducer";
// import employeeReducer from "./employeeDetailReducer";

const rootReducer = combineReducers({
    changeInputNumber
})

export default rootReducer;