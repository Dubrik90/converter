// export enum CryptoType {
//     Tether = 'tether',
//     Bitcoin = 'bitcoin',
//     Ethereum = 'ethereum',
// }
export type CryptoType = 'tether' | 'bitcoin' | 'ethereum';
export type CryptoLabelType = 'USDT' | 'BTC' | 'ETH';

export type OptionsType = {
    value: CryptoType,
    label: CryptoLabelType
}

export interface QueryType {
    page?: number;
    limit?: number;
    currency?: string;
    blockchain?: string;
}

interface MetaType {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    itemCount: number;
    limit: number;
    page: number;
    pageCount: number;
}

interface ResultType {
    availableSupply: number;
    explorers: string[];
    icon: string;
    id: string;
    marketCap: number;
    name: string;
    price: number;
    priceBtc: number;
    priceChange1d: number;
    priceChange1h: number;
    priceChange1w: number;
    rank: number;
    redditUrl: string;
    symbol: string;
    totalSupply: number;
    twitterUrl: string;
    volume: number;
    websiteUrl: string;
}

export interface CoinsResType {
    meta: MetaType,
    result: ResultType
}

export interface CoinResType {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    priceBtc: number;
    volume: number;
    marketCap: number;
    availableSupply: number;
    totalSupply: number;
    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;
    redditUrl: string;
    websiteUrl: string;
    twitterUrl: string;
    contractAddress: string;
    decimals: number;
    explorers: string[];
}
