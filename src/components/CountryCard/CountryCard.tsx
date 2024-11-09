import './style.scss'
import '../../assets/scss/global.scss'
import defaultFlag from '../../assets/img/Flag_default.png'
import { CountryCardPropsType } from '../../types/type';
import { useNavigate } from 'react-router-dom';

export const CountryCard = ({id,countryName,population,region,capital,flags}:CountryCardPropsType) => {
    let navigate = useNavigate()

    return ( 
            <div className='country-card cursor-pointer' onClick={()=>{navigate(`/detail/${countryName}`)}}>
                <div className="imgBx w-full h-2/5">
                    <img className='w-full h-full' src={flags != null ? flags : defaultFlag} alt="" />
                </div>
                <div className="infoBx px-3 h-2/5">
                    <h3 className='py-3.5 single-line-text'>{countryName}</h3>
                    <div className='flex pb-2'>
                        <div>Population:</div>
                        <div className='single-line-text'>{population.toLocaleString()}</div>
                    </div>
                    <div className='flex pb-2'>
                        <div>Region:</div>
                        <div className='single-line-text'>{region}</div>
                    </div>
                    <div className='flex pb-2'>
                        <div>Capital:</div>
                        <div className='single-line-text'>{capital}</div>
                    </div>
                </div>
            </div>
     );
}
