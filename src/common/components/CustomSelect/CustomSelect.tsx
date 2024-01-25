import {FC, SelectHTMLAttributes} from 'react';
import s from "./CustomInput.module.scss";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    label?: string;
}

export const CustomSelect: FC<SelectProps> = ({options, label, ...props}) => {
    return (
        <div className={s.select_container}>
            {label && <label className={s.label}>{label}</label>}
            <select {...props} className={s.select}>
                {options.map((option) => (
                    <option
                        className={s.select_option}
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
