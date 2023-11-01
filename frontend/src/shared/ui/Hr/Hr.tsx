import  {FC, ReactNode} from 'react';
import cls from './Hr.module.scss'
interface HrProps {
    className?: string,
}


export const Hr: FC<HrProps> = ({ className=''}) => {

    return (
        <div className={`${cls.hr}  `}>
        </div>
    );
};