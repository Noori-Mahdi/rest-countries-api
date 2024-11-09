import arrowLight from '../../assets/img/arrow-left-solid (1).svg'
import arrowDark from '../../assets/img/arrow-left-solid.svg'
import { useTheme } from '../../context/theme';
import { ButtonPropsType } from '../../types/type';
import './style.scss'

export const Button = ({useImage,text,onClick}:ButtonPropsType) => {
    const { theme, toggleTheme } = useTheme();

    return ( 
        <button className='flex justify-center items-center w-32 py-1 button' onClick={onClick}>
        {
            useImage && <img className='mr-1 mt-1' width={10} height={10} src={theme == 'dark' ? arrowLight : arrowDark } alt="backArrow" />
        }
            <div>{text}</div>
        </button>
     );
}