import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseURL, commonHeaders} from "./common.api.ts";
import {CoinResType, CoinsResType, CryptoType} from "./types.ts";

export const coinApi = createApi({
    reducerPath: "coinApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: baseURL,
        }),

    endpoints: (build) => {
        return {
            getAllCoins: build.query<CoinsResType, void>({
                query: () => {
                    return {
                        method: "GET",
                        url: "/coins",
                        headers: commonHeaders,
                        params: {},
                    };
                },
            }),
            getCoin: build.query<CoinResType, CryptoType>({
                query: (coinId) => {
                    return {
                        method: "GET",
                        url: `coins/${coinId}`,
                        headers: commonHeaders,
                        params: {
                            currency: coinId,
                        },
                    };
                },
            }),
        };
    },
});

export const {
    useGetAllCoinsQuery,
    useGetCoinQuery
} = coinApi
