import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import Navbar from './AigentX/Navbar';
import CustomBreadCrumb from './BreadCrumb/CustomBreadCrumb';
import CustomPagination from './Pagination/CustomPagination';
import CustomCheckBox from './CheckBoxs/CustomCheckBox';
import Sidebar from './AigentX/Sidebar';

import { XMarkIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const tableData = [
  ['Bot name', "Active"],
  ['Bot name', "Setup"],
  ['Bot name', "Not Active"],
  ['Bot name', "Active"],
  ['Bot name', "Setup"],
  ['Bot name', "Active"],
  ['Bot name', "Active"],
];

function AigentX () {
   const [content, setContent] = useState([]);
   const [showModal, setShowModal] = useState(0);

   useEffect(() => {
    var tmp = [];
    
    for(let i = 0; i < tableData.length; i ++)
      tmp = [...tmp, (
        <div className={`hover:bg-[#FFFFFF0D] rounded-xl flex flex-row p-4 py-5 ${i % 2 == 0 ? 'bg-[#FFFFFF0D]' : 'bg-transparent'}`}>
          <div className={`flex flex-row items-center justify-center w-1/3 gap-1`}>
            {/* <CustomCheckBox /> */}
            <img src="../img/bot_image.png" className='w-5 h-5'></img>
            {tableData[i][0]}
          </div>
          {tableData[i][1] == "Active" && <div className='w-1/3'><a className='bg-[#52C41A1A] p-2 rounded-xl text-[#52C41A] font-medium'>Active</a></div>}
          {tableData[i][1] == "Setup" && <div className='w-1/3'><a className='bg-[#FFE6621A] p-2 rounded-xl text-[#FFE662] font-medium'>Setup</a></div>}
          {tableData[i][1] == "Not Active" && <div className='w-1/3'><a className='bg-[#ED15221A] p-2 rounded-xl text-[#ED1522] font-medium'>Not Active</a></div>}
          <div className='flex flex-row items-center justify-center w-1/3 gap-3'>
            <a href="/aigentx/editgroups"><FaEdit className='w-5 h-5 cursor-pointer hover:text-blue-500'/></a>
            <MdDelete className='w-6 h-6 cursor-pointer hover:text-red-500' onClick={() => setShowModal(1)}/>
          </div>
        </div>
      )];
    
      setContent(tmp);
   }, []);

    return (
      <div className="App bg-[#17191B] body">
        {/* Modal */}
        {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
        <div className='relative flex flex-col items-center justify-center w-full h-full text-gray-900'>
            <div className='w-[400px] relative h-[200px] bg-white flex justify-center flex-col rounded-xl'>
              <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-5 h-5 text-gray-900 cursor-pointer top-3 right-3'/>
              <div className='text-xl font-bold text text-md'>You want to delete the bot?</div>
              <div className='flex flex-row justify-center gap-3 mt-7'>
                  <button onClick={() => setShowModal(0)} className='py-1 bg-transparent border border-[#17191B99] px-14 rounded-xl'>Cancel</button>
                  <button className='bg-[#ED1522] rounded-xl py-2 px-16 text-white'>Delete</button>
              </div>
              </div>
            </div>
        </div>) : null}
        <Navbar />
        <Sidebar />
        <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
          <div className='flex justify-start w-full max-w-7xl'>
            <div className='flex flex-col items-start w-full mt-10'>
              <CustomBreadCrumb category={['List of groups']} />
              <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>List of groups</div>
              <div className='mt-20 mb-10 p-10 flex rounded-xl flex-col bg-[#FFFFFF0D] w-full'>
                <div className='font-medium text-white text-md lg:text-xl'>All bots</div>
                <div className='w-full mt-10 text-white'>
                  <div className='w-full'>
                    <div class="bg-[#232527] rounded-xl flex flex-row p-4 py-5">
                      <div className='flex flex-row justify-center w-1/3'>
                        {/* <CustomCheckBox /> */}
                        Group name
                      </div>
                      <div className='w-1/3'>Status</div>
                      <div className='w-1/3'>Action</div>
                    </div>
                    {content}
                  </div>
                </div>
                <div className='w-full mt-10'><CustomPagination count = { 17 } current = {1} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AigentX;
