import { FaHome } from "react-icons/fa";

export default function CustomInput (props) {
    return (
      <div className="relative w-full">
        <input type={props.type} className={`w-full bg-transparent border-[#747576] border rounded-xl p-2 ${props.type == "value" && 'pl-16'} ${props.icon && 'pl-8'} text-white`} placeholder="Placeholder"></input>
        {props.icon == "home" && <FaHome className="absolute text-[#747576] top-3 left-[10px]"/>}
        {props.type == "value" && <p className="absolute text-white top-[9px] left-3">Value</p>}
        {props.type == "password" && <p className="absolute text-white top-[14px] text-[10px] right-2">Forget Password?</p>}
        <p className="text-white text-[10px] text-left mt-1">{props.hint}</p>
        {props.type == "password" && <p className="text-[#D1D1D1] text-[10px]">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, specials characters, or emoji.</p>}
      </div>
    );
}
