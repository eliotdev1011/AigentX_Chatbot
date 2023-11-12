import { FaCircleNotch, FaArrowRight, FaHome } from 'react-icons/fa';
import { BiSolidCheckCircle } from 'react-icons/bi';

export default function CustomButton (props) {
    console.log(props.bgTo);

    return (
        <div className={`justify-center relative flex flex-row items-center gap-1 rounded-xl ${props.size == 'normal' && 'w-[144px]'} ${props.size == 'small' && 'w-[42px]'} py-3 font-medium text-white hover:cursor-pointer bg-gradient-to-r ${props.bgFrom} ${props.bgTo}`}>
            {/* LeftIcon */}
            {props.leftIcon == "success" && <BiSolidCheckCircle className='w-4 h-4'/> }
            {props.leftIcon == "loading" && <FaCircleNotch className='w-4 h-4'/> }

            {props.buttonName}

            {/* RightIcon */}
            {props.rightIcon == "arrow" && <FaArrowRight className={`${props.size == "large" && 'ml-3'} w-3 h-3`} /> }
        </div>
    );
}
