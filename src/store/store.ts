import {configureStore} from "@reduxjs/toolkit";
import {coinApi} from "../services/api.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {

        [coinApi.reducerPath]: coinApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(coinApi.middleware),
});


setupListeners(store.dispatch)
