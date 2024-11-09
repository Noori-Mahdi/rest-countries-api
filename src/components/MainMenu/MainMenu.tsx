import './style.scss'
import Moon from '../../assets/img/moon-solid-dark.svg'
import Sun from '../../assets/img/sun-solid-light.svg'
import { MainMenuProps } from '../../types/type'
import { useTheme } from './../../context/theme';



export const MainMenu = ({title}:MainMenuProps) => {
    const { theme, toggleTheme } = useTheme();
    
    return ( 
        <div className="flex justify-between items-center select-none py-2 px-8 main-menu ">
            <h2 className='text-2xl font-bold'>{title}</h2>
            <div onClick={toggleTheme} className='flex justify-between items-center theme-btn cursor-pointer'>
                <img className='theme-Ico pr-2' width={20} height={20} src={theme === 'dark' ? Moon:Sun} alt="theme" />
                <span>{theme === 'dark' ? 'Dark Mode':'Light Mode'}</span>
            </div>
        </div>
     );
}