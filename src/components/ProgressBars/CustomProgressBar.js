import { FaHome } from 'react-icons/fa';

export default function CustomProgresBar(props) {
  return (
    <div className="flex flex-col w-full">
        <div className='relative flex flex-row items-center text-white'>
            {props.icon == "home" && <FaHome className='w-4 h-4 mr-2'/>}
            <p>Placeholder</p>
            <div className='absolute right-0'>{props.percent}%</div>
        </div>
        <div 
            className = {`mt-2 rounded-xl relative bg-[#454749]
                ${props.width == "small" && 'p-[2px]'}
                ${props.width == "medium" && 'p-[3px]'}
                ${props.width == "large" && 'p-[4px]'}`}>
            <div className="absolute top-0 left-0 w-1/2 h-full rounded-xl bg-gradient-to-r from-[#ED23FF] to-[#8E44FF]"></div>
        </div>
    </div>
  )
}
