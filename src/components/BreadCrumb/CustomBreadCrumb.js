import { useEffect, useState } from 'react';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import { MdOutlineArrowRight } from 'react-icons/md';

export default function CustomBreadCrumb(props) {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        let temp = [];
        for(let i = 0 ; i < props.category.length ; i ++) {
            temp = [...temp, (<MdOutlineArrowRight className='w-6 h-6 text-white' />)];
            temp = [...temp, (<div className={`${i != props.category.length - 1 ? 'text-transparent font-bold bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] bg-clip-text' : 'text-white font-medium'}`}>{props.category[i]}</div>)];
        }
        setContent(temp);
    }, []);

    return (
    <div className="flex flex-row items-center justify-center w-full gap-3 text-center cursor-pointer">
        <FaHome className='w-5 h-5 text-[#ED23FF]'/><div className='text-transparent font-bold bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] bg-clip-text'>Home</div>
        {content}
    </div>
  )
}
