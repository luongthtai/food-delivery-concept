import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toggleMenu } from "./reduce/reduce.js";
import { favouriteProduct } from "./reduce/favouriteProduct.js";
import { User } from "./reduce/user.js";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  toggle: toggleMenu.reducer,
  favourite: favouriteProduct.reducer,
  user: User.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)
