import './style.scss'
import SearchIconW from '../../assets/img/magnifying-glass-solid-white.svg'
import SearchIconB from '../../assets/img/magnifying-glass-solid.svg'
import { useTheme } from './../../context/theme';
import { useRef} from 'react';
import { SearchBoxPorpsType } from '../../types/type';



export const SearchBox = ({onSearch}:SearchBoxPorpsType) => {
    const { theme, toggleTheme } = useTheme();

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)


    const handleSearch = (e: string) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

    timeoutRef.current = setTimeout(() => {
        onSearch(e);
      }, 800); 
    };


    return ( 
        <div className="flex items-center sm:w-80 search-box">
            <div className='flex justify-center items-center w-full search-btn'>
                <img width={15} height={15} src={theme === 'dark' ? SearchIconW:SearchIconB} alt="search" />
            </div>
            <input onChange={(e)=>{handleSearch(e.target.value)}} className='w-full search-input ml-2' type="text" placeholder="Search for country..." />
        </div>
     );
}
