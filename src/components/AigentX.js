import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import Navbar from './AigentX/Navbar';
import CustomBreadCrumb from './BreadCrumb/CustomBreadCrumb';
import CustomPagination from './Pagination/CustomPagination';
import CustomCheckBox from './CheckBoxs/CustomCheckBox';

import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function AigentX () {
   const [content, setContent] = useState([]);

   useEffect(() => {
    var tmp = [];
    
    for(let i = 0; i < 7; i ++)
      tmp = [...tmp, (
        <div className='bg-transparent hover:bg-[#232527] rounded-xl flex flex-row p-4 py-5'>
          <div className='flex flex-row items-center justify-center w-1/3 gap-1'>
            <CustomCheckBox />
            <img src="img/bot_image.png" className='w-5 h-5'></img>
            Bot name
          </div>
          <div className='w-1/3'><a className='bg-[#1D2D1B] p-2 rounded-xl text-[#52C41A] font-medium'>Active</a></div>
          <div className='flex flex-row items-center justify-center w-1/3 gap-3'><FaEdit className='w-5 h-5 cursor-pointer hover:text-blue-500'/><MdDelete className='w-6 h-6 cursor-pointer hover:text-red-500'/></div>
        </div>
      )];
    
      setContent(tmp);
   }, []);

    return (
      <div className="App bg-[#17191B]">
        <Navbar />
        <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
          <div className='flex justify-start w-full max-w-7xl'>
            <div className='flex flex-col items-start w-full mt-10'>
              <CustomBreadCrumb category={['List of groups']} />
              <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>List of groups</div>
              <div className='mt-20 font-medium text-white'>All bots</div>
              <div className='w-full mt-10 text-white'>
                <div className='w-full'>
                  <div class="bg-[#232527] rounded-xl flex flex-row p-4 py-5">
                    <div className='flex flex-row justify-center w-1/3'><CustomCheckBox />Group name</div>
                    <div className='w-1/3'>Status</div>
                    <div className='w-1/3'>Action</div>
                  </div>
                  {content}
                </div>
              </div>
              <div className='w-full my-10'><CustomPagination count = { 17 } current = {1} /></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AigentX;
