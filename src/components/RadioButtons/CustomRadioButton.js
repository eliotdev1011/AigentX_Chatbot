import { FaCheck } from 'react-icons/fa';

export default function CustomRadioButton(props) {
  return (
    <div 
      className = {`flex flex-row items-center gap-2 
        ${props.disabled && 'opacity-50'} 
        ${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <div 
        className={`relative rounded-full w-5 h-5 
          ${props.checked ? 'bg-gradient-to-r from-[#ED23FF] to-[#8E44FF]' : 'bg-transparent border border-[#747576]'}`}>
        {props.checked ? <div className='absolute w-[10px] h-[10px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2'></div> : null}
      </div>
      <div className="text-left text-white">{props.label}</div>
    </div>
  )
}
