import { FaCircleNotch, FaArrowRight, FaHome } from 'react-icons/fa';
import { BiSolidCheckCircle } from 'react-icons/bi';
import '../../css/aix_base.css';

export default function CustomButton (props) {
    return (
        <div 
            className = {`justify-center relative flex flex-row items-center gap-1 rounded-xl 
                ${props.size == 'normal' && 'w-[144px]'} 
                ${props.size == 'small' && 'w-[42px]'} 
                py-2 font-medium text-white hover:cursor-pointer bg-gradient-to-r
                ${props.bgFrom} ${props.bgTo}
                ${props.type == "stroke" && "stroke-border text-transparent font-semibold bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] bg-clip-text"}
                ${props.disabled ? 'opacity-50' : 'opacity-100'}`} >
            {/* LeftIcon */}
            {props.leftIcon == "success" && <BiSolidCheckCircle className={`w-4 h-4 ${props.type == "stroke" && "text-[#ED23FF]"}`}/> }
            {props.leftIcon == "loading" && <FaCircleNotch className='w-4 h-4'/> }
            {props.leftIcon == "home" && <FaHome className='w-4 h-4' /> }

            {props.buttonName}

            {/* RightIcon */}
            {props.rightIcon == "arrow" && 
                <FaArrowRight 
                    className={`
                        ${props.size == "large" && 'ml-3'} w-3 h-3
                        ${props.type == "stroke" && "text-[#8E44FF]"}`}/> }
        </div>
    );
}
