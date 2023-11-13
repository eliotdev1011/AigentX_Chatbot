import { FaHome } from "react-icons/fa";
import { BiSolidCheckCircle } from 'react-icons/bi';
import { AiOutlineClose, AiFillCloseCircle } from  'react-icons/ai';

export default function CustomInput (props) {
    return (
      <div className="relative w-full">
        <input 
          type={props.type} 
          className={`${props.disabled} w-full bg-transparent border-[#747576] 
            ${(props.type == "value" && props.result == "failed") && "border-[#ED1522]"} border rounded-xl p-2 
            ${props.type == "value" && 'pl-16'} ${props.icon && 'pl-8'} text-white
            ${props.disabled ? 'opacity-50' : 'opacity-100'}`} placeholder="Placeholder"></input>
        {props.icon == "home" && <FaHome className="absolute text-[#747576] top-3 left-[10px]"/>}
        {props.type == "value" && <p className={`absolute ${props.disabled ? "text-[#747576]" : "text-white"} top-[9px] left-3`}>Value</p>}
        {props.type == "password" && <p className="absolute text-white top-[14px] text-[10px] right-2">Forget Password?</p>}
        <p className="text-white text-[10px] text-left mt-1">{props.hint}</p>
        {(props.type == "value" && props.result == "failed") && <p className="text-[#ED1522] text-[10px] text-left mt-1">{props.error}</p>}
        {props.type == "password" && <p className="text-[#D1D1D1] text-[10px]">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, specials characters, or emoji.</p>}
        {(props.type == "value" && props.result == "success") && <BiSolidCheckCircle className="absolute text-[#52C41A] top-3 right-3 w-5 h-5" />}
        {(props.type == "value" && props.result == "failed") && <AiFillCloseCircle className="absolute text-[#ED1522] top-3 right-3 w-5 h-5" />}
      </div>
    );
}
