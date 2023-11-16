import * as React from 'react'
import '../../css/aix_base.css'
import '../../css/animations.css';

import Navbar from './Navbar';
import CustomBreadCrumb from '../BreadCrumb/CustomBreadCrumb';
import CustomPagination from '../Pagination/CustomPagination';
import CustomCheckBox from '../CheckBoxs/CustomCheckBox';
import CustomButton from '../Buttons/CustomButton';
import CustomInput from '../Inputs/CustomInput';
import CustomSwitch from '../Switches/CustomSwitch';

import { useState, useEffect } from 'react';
import { FaCheck, FaEye, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const tableData = [
    ['Whitepaper.pdf', 'Pdf', 'Active', '24KB'],
    ['Youtube', 'Video', 'Setup'],
    ['Mem1', 'Text'],
    ['Mem2', 'Text'],
    ['Website', 'Web'],
];

function EditGroups () {
   const [content, setContent] = useState([]);

   useEffect(() => {
    var tmp = [];
    
    for(let i = 0; i < tableData.length; i ++)
      tmp = [...tmp, (
        <div 
            className = {`
                ${i % 2 == 0 ? 'bg-[#FFFFFF0D]' : 'bg-transparent'}
                rounded-xl flex flex-row p-4 py-5 hover:bg-[#393A4C]`}>
            <div className='flex flex-row items-center justify-center w-1/5 gap-1'>
                <CustomCheckBox />
                {tableData[i][0]}
            </div>
            <div className='flex flex-row items-center justify-center w-1/5 gap-1'>
                {tableData[i][1]}
            </div>
            <div className='w-1/5'>
                {tableData[i][2] == "Active" && (<a className='bg-[#52C41A1A] p-2 rounded-xl text-[#52C41A] font-medium'>Active</a>)}
                {tableData[i][2] == "Setup" && (<a className='bg-[#FFE6621A] p-2 rounded-xl text-[#FFE662] font-medium'>Setup</a>)}
            </div>
            <div className='flex flex-row items-center justify-center w-1/5 gap-1'>
                {tableData[i][3]}
            </div>
            <div className='flex flex-row items-center justify-center w-1/5 gap-3'>
                <FaEye className='w-5 h-5 cursor-pointer hover:text-green-500'/>
                <FaEdit className='w-5 h-5 cursor-pointer hover:text-blue-500'/>
                <MdDelete className='w-5 h-5 cursor-pointer hover:text-red-500'/>
            </div>
        </div>
      )];
    
      setContent(tmp);
   }, []);

    return (
      <div className="App bg-[#17191B]">
        <Navbar />
        <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
          <div className='flex justify-start w-full max-w-7xl'>
            <div className='flex flex-col items-start w-full my-10'>
              <CustomBreadCrumb category={['List of groups', 'Edit group']} />
              <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>
                Edit group
              </div>
              <div className='w-full bg-[#FFFFFF0D] rounded-xl p-10 mt-10'>
                <div className='flex flex-row items-center justify-center gap-2 font-medium text-white border-[#393A4C] border p-1 py-2 rounded-xl'>
                    Ownership Verified
                    <FaCheck />
                </div>
                <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-2'>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Company Ingoverhead
                        </div>
                        <CustomInput />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Token Info
                        </div>
                        <CustomInput />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Coin Gecko Info
                            <CustomSwitch checked = { true } disabled = { false }/>
                        </div>
                        <CustomInput />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            How To Buy
                        </div>
                        <CustomInput />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Dex Tools Link
                            <CustomSwitch checked = { false } disabled = { false }/>
                        </div>
                        <CustomInput />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Contacts
                        </div>
                        <CustomInput />
                    </div>
                </div>
                <div className='mt-10 font-medium text-white border-[#393A4C] border p-1 py-2 rounded-xl'>
                    Knowledge Base Management
                </div>
                <div className='w-full mt-10 overflow-auto text-white'>
                    <div className='w-[1200px]'>
                        <div class="bg-transparentrounded-xl flex flex-row p-4 py-5">
                            <div className='flex flex-row justify-center w-1/5'><CustomCheckBox />Name</div>
                            <div className='w-1/5'>Type</div>
                            <div className='w-1/5'>Status</div>
                            <div className='w-1/5'>Size</div>
                            <div className='w-1/5'>Action</div>
                        </div>
                        {content}
                    </div>
                </div>
                <div className='flex flex-row justify-center w-full gap-5 mt-10'>
                    <CustomButton size = "normal" buttonName = "Cancel" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
                    <CustomButton size = "normal" buttonName = "Save" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EditGroups;
