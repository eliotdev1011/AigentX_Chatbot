import { IoCaretDownOutline } from 'react-icons/io5';
import { useState } from 'react';
import '../../css/animations.css';

export default function Dropdown () {
  const [show, setShow] = useState(true);

  const myFunction = () => {
    setShow(!show);
  }
  
    return (
      <div className="relative inline-block">
        <button onClick={myFunction} className="flex flex-row justify-center items-center gap-2 py-3 px-8 text-white rounded-xl border-none cursor-pointer text-md bg-gradient-to-r from-[#ED23FF] to-[#8E44FF]">Dropdown<IoCaretDownOutline /></button>
        {show ? (<div id="myDropdown" className="block font-medium text-left text-gray-900 bg-white fadeIn rounded-xl">
          <a href="#" className='hover:bg-[#F1D6FF] hover:rounded-xl block px-4 py-3 border-b border-gray-200'>Item 1</a>
          <a href="#" className='hover:bg-[#F1D6FF] hover:rounded-xl block px-4 py-3 border-b border-gray-200'>Item 2</a>
          <a href="#" className='hover:bg-[#F1D6FF] hover:rounded-xl block px-4 py-3 border-b border-gray-200'>Item 3</a>
          <a href="#" className='hover:bg-[#F1D6FF] hover:rounded-xl block px-4 py-3 border-b border-gray-200'>Item 4</a>
          <a href="#" className='hover:bg-[#F1D6FF] hover:rounded-xl block px-4 py-3'>Item 5</a>
        </div>) : null}
      </div>
    );
}
