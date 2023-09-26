import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // Local storage
const persistConfig = {
    key: 'root',
    storage,
};

import authSlice from "./slices/auth-slice";
import imageApiSlice from "./slices/imageApi-slice";

const persistedReducer = persistReducer(persistConfig, combineReducers({
    auth: authSlice,
    imageApi: imageApiSlice
}));

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

const persistor = persistStore(store);
export { store, persistor };