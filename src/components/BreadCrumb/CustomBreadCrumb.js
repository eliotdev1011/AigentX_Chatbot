import { useEffect, useState } from 'react';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import { MdOutlineArrowRight } from 'react-icons/md';

export default function CustomBreadCrumb(props) {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        let temp = [];
        for(let i = 0 ; i < props.category.length ; i ++) {
            temp = [...temp, (<MdOutlineArrowRight className='w-6 h-6 text-[#FFFFFF66]' />)];
            temp = [...temp, (<div className={`${i != props.category.length - 1 ? 'text-transparent text-sm font-bold bg-gradient-to-r from-[#FFFFFF66] to-[#FFFFFF66] bg-clip-text' : 'text-[#FFFFFF66] font-medium text-sm'}`}>{props.category[i]}</div>)];
        }
        setContent(temp);
    }, []);

    return (
    <div className="flex flex-row items-center justify-start w-full text-center cursor-pointer">
        <FaHome className='w-4 h-4 text-[#FFFFFF66] mr-2'/><div className='text-transparent text-sm font-bold bg-gradient-to-r from-[#FFFFFF66] to-[#FFFFFF66] bg-clip-text'>Home</div>
        {content}
    </div>
  )
}
