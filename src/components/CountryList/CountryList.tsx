
import { CountryCard } from "../CountryCard/CountryCard";
import { CountryListPropsType } from "../../types/type";

export const CountryList = ({data}:CountryListPropsType) => {


    return ( 
        <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full mt-3 ">
                {data.length > 0 ?
                 data.map((e,index)=>
                    <CountryCard
                    id={e.name.common}
                    region={e.region} 
                    population={e.population} 
                    capital={e.capital != undefined ? e.capital[0]: null} 
                    flags={e.flags != undefined ?e.flags.png: null} 
                    countryName={e.name.common} 
                    key={index}/>
                    )
                :
                <></>}
            </div>
     );
}
