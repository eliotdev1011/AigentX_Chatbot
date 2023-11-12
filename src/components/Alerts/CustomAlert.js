import { useEffect, useState } from "react";
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { MdError } from 'react-icons/md';
import { AiOutlineClose, AiFillCloseCircle } from  'react-icons/ai';

export default function CustomAlert (props) {
    const [bgColor, setBgColor] = useState('bg-[#2E3031]');
    const [borderColor, setBorderColor] = useState('border-[#3F4142]');

    useEffect(() => {
        if(props.alertType == "home") {
            setBgColor('bg-[#2E3031]');
            setBorderColor('border-[#3F4142]');
        }
        else if(props.alertType == "success") {
            setBgColor('bg-[#223B1B]');
            setBorderColor('border-[#2B561B]');
        }
        else if(props.alertType == "error") {
            setBgColor('bg-[#41181D]');
            setBorderColor('border-[#63171E]');
        }
        else if(props.alertType == "warning") {
            setBgColor('bg-[#45422A]');
            setBorderColor('border-[#6A6336]')
        }
    }, []);

    return (
        <div className={`${bgColor} relative border ${borderColor} rounded-md px-4 py-2 gap-2 text-left text-sm items-center font-medium flex flex-row text-white w-[398px]`}>
            {props.alertType == "home" && <FaHome className='w-4 h-4' />}
            {props.alertType == "success" && <BiSolidCheckCircle className='w-4 h-4 text-[#52C41A]' />}
            {props.alertType == "error" && <AiFillCloseCircle className='w-4 h-4 text-[#ED151A]' />}
            {props.alertType == "warning" && <MdError className='w-4 h-4 text-[#FFA940]' />}
            <div>
               {props.title}
               {props.type == 3 && <p className="text-[12px] text-[#828383]">{props.subtitle}</p>}
            </div>
            {props.type == 2 && <AiOutlineClose className="absolute right-4 w-[14px] h-[14px] text-[#ABACAD] hover:cursor-pointer" />}
            {props.type == 3 && <FaArrowRight className="absolute right-4 w-[14px] h-[14px] text-[#ABACAD] hover:cursor-pointer" />}
        </div>
    );
}
