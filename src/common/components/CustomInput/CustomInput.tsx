import {FC, InputHTMLAttributes} from 'react';
import s from './CustomInput.module.scss'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const CustomInput: FC<InputProps> = ({label, ...props}) => {
    return (
        <div className={s.container}>
            {label && <label className={s.label}>{label}</label>}
            <input type="text" className={s.input} {...props} />
        </div>
    );
};
