import { FaCheck } from 'react-icons/fa';

export default function CustomCheckBox(props) {
  return (
    <div 
      className = {`flex flex-row items-center gap-2 
        ${props.disabled && 'opacity-50'} 
        ${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <div 
        className={`relative rounded-md w-5 h-5 
          ${props.checked ? 'bg-gradient-to-r from-[#ED23FF] to-[#8E44FF]' : 'bg-transparent border border-[#747576]'}`}>
        {props.checked ? <FaCheck className='absolute left-0 w-full h-full p-[4px] text-white t-0'/> : null}
      </div>
      <div className="text-left text-white">{props.label}</div>
    </div>
  )
}
