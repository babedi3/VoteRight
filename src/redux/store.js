import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/RootReducer"

export const store = createStore(rootReducer, applyMiddleware(thunk))