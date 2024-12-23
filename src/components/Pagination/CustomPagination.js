import { useEffect, useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function CustomPagination(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        let tmp = [], i;

        tmp = [...tmp, (<RiArrowLeftSLine className={`text-2xl ${props.current == 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} text-white `}/>)];
        
        for(i = 1; i <= props.count; i ++) {
            tmp = [...tmp, (<a href='#' 
                className={`text-white flex justify-center items-center rounded-xl 
                    ${i == props.current && 'bg-gradient-to-r from-[#ED23FF] to-[#8E44FF]'}
                    w-8 h-8 hover:bg-gradient-to-r hover:from-[#8E44FF] hover:to-[#ED23FF]`}>{ i }</a>)];
            
            if(i >= 3)
                break;
        }

        if(i == 3){
            tmp = [...tmp, (<a href='#' className='flex items-center justify-center w-8 h-8 text-white rounded-xl'>...</a>)];
            tmp = [...tmp, (<a href='#' className='flex items-center justify-center w-8 h-8 text-white rounded-xl'>{props.count}</a>)];
        }

        tmp = [...tmp, (<RiArrowRightSLine className='text-2xl text-white cursor-pointer'/>)];

        setContent(tmp);
    }, []);
  
    return (
    <div className="flex flex-row items-center justify-end w-full gap-3 text-center">
        {content}
    </div>
  )
}
