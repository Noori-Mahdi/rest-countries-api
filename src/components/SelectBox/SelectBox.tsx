import { useEffect, useRef, useState } from 'react';
import './style.scss'
import { SelectBoxPropsType } from '../../types/type';

export const SelectBox =({ options, onSelect, defaultValue }:SelectBoxPropsType) => {

  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [showSelectBox, setSelectBox] = useState(false);
  const [indexItem,setIndexItem] = useState(0)

  const selectBoxRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{

    const handleClickOutside = (event:MouseEvent)=>{
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
        setSelectBox(false);
    }
  }
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[])

  useEffect(()=>{
    onSelect(selectedOption)
  },[selectedOption])

  return (
    <div className='sm:w-3/12 w-full relative mt-3 sm:mt-0' ref={selectBoxRef}>
        <div onClick={()=>{!showSelectBox && setSelectBox(true)}} className='p-2 text-sm w-full h-full coverBox cursor-pointer select-none'>
          {selectedOption == 'all' ? 'filter by region' : selectedOption}
        </div>
        {
        showSelectBox &&
          <div className='absolute text-sm coverBox w-full mt-2 cursor-pointer select-none'>
            {options.map((option, index) => (
              <>
                <option onClick={()=>{setSelectedOption(option);setSelectBox(false);setIndexItem(index)}} className={`p-2 ${index === indexItem && 'selected'}`} key={index} value={option}>
                  {option}
                </option>
              </>
            ))}
          </div>
        }
    </div>
  );
}
