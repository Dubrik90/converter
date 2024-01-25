import {CustomInput} from "./common/components/CustomInput/CustomInput.tsx";
import s from './common/style/App.module.scss'
import {CustomSelect} from "./common/components/CustomSelect/CustomSelect.tsx";
import {CryptoType, OptionsType} from "./services/types.ts";
import {useEffect, useState} from "react";
import {useGetCoinQuery} from "./services/api.ts";
import Loader from './assets/loader.svg?react';
import Convert from './assets/convert.svg?react';
import Bitcoin from './assets/bitcoin.png';
import Ethereum from './assets/ethereum.png';
import './common/style/glogal.scss'

export const App = () => {
    const [amount1, setAmount1] = useState<string>('');
    const [amount2, setAmount2] = useState<string>('');
    const [selectedCurrency1, setSelectedCurrency1] = useState<CryptoType>('bitcoin');
    const [selectedCurrency2, setSelectedCurrency2] = useState<CryptoType>('ethereum');

    const {data: coin1Data, isFetching: isFetching1, isLoading: isLoading1} = useGetCoinQuery(selectedCurrency1);
    const {data: coin2Data, isFetching: isFetching2, isLoading: isLoading2} = useGetCoinQuery(selectedCurrency2);

    const Load = isLoading1 || isLoading2 || isFetching1 || isFetching2;

    const options: OptionsType[] = [
        {value: 'tether', label: 'USDT'},
        {value: 'bitcoin', label: 'BTC'},
        {value: 'ethereum', label: 'ETH'},
    ];

    useEffect(() => {
        if (coin1Data && coin2Data && !isNaN(parseFloat(amount1))) {
            const rate1 = coin1Data.price;
            const rate2 = coin2Data.price;

            if (!isNaN(rate1) && !isNaN(rate2)) {
                setAmount2((parseFloat(amount1) * rate1) / rate2 + '');
            }
        }
    }, [amount1, amount2, coin1Data, coin2Data]);

    const handleCurrencyChange1 = (selectedOption: CryptoType) => {
        setSelectedCurrency1(selectedOption);
    };

    const handleCurrencyChange2 = (selectedOption: CryptoType) => {
        setSelectedCurrency2(selectedOption);
    };

    return (
        <div className={s.container}>
            <img className={s.bit_icon} src={Bitcoin} alt="Bitcoin icon"/>
            <img className={s.efir_icon} src={Ethereum} alt="Ethereum icon"/>
            <h1>Конвертер крипты</h1>
            <div className={s.block}>
                <div className={s.block_header}>
                    <p>Введите количество</p>
                    {
                        coin1Data
                            ? <img src={coin1Data?.icon} alt="coin icon"/>
                            : <Convert/>
                    }
                </div>
                <div className={s.input_block}>
                    <CustomInput
                        type='number'
                        placeholder="1"
                        value={amount1}
                        onChange={(e) => setAmount1(e.target.value)}
                    />
                    <CustomSelect
                        options={options}
                        value={selectedCurrency1}
                        onChange={(e) => handleCurrencyChange1(e.target.value as CryptoType)}
                    />
                </div>
            </div>
            <div className={s.block}>
                <div className={s.block_header}>
                    <p>Получите количество</p>
                    {
                        coin2Data
                            ? <img src={coin2Data?.icon} alt="coin icon"/>
                            : <Convert/>
                    }
                </div>
                <div className={s.input_block}>
                    <CustomInput
                        type='number'
                        placeholder="1"
                        value={amount2}
                        onChange={(e) => setAmount2(e.target.value)}
                    />
                    <CustomSelect
                        options={options}
                        value={selectedCurrency2}
                        onChange={(e) => handleCurrencyChange2(e.target.value as CryptoType)}
                    />
                </div>
            </div>
            {Load && <Loader/>}
        </div>
    );
};

