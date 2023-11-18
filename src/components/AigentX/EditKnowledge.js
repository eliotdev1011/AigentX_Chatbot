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

function EditKnowledge () {
    return (
      <div className="App bg-[#17191B]">
        <Navbar />
        <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
          <div className='flex justify-start w-full max-w-7xl'>
            <div className='flex flex-col items-start w-full my-10'>
              <CustomBreadCrumb category={['List of groups', 'Edit group', 'Edit Knowledge Base']} />
              <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>
                Edit Knowledge Base
              </div>
              <div className='w-full bg-[#FFFFFF0D] rounded-xl p-10 mt-10'>
                <div className='flex flex-row items-center justify-center gap-2 font-medium text-white border-[#393A4C] border p-1 py-2 rounded-xl'>
                    KnowledgeBase Management
                </div>
                <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3'>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Source Name
                        </div>
                        <CustomInput placeholder="Website" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Type
                        </div>
                        <CustomInput placeholder="Web" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex justify-between mb-3'>
                            Status
                        </div>
                        <CustomInput placeholder="Parsed 1 day ago" />
                    </div>
                </div>
                <div className='flex flex-col mt-10 text-white'>
                    <div className='flex justify-between mb-3'>
                        Content
                    </div>
                    <textarea rows="15" cols="60" name="text" placeholder="GET /knowledgeBaseEntity?scopeId=...&id=..." className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
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

export default EditKnowledge;
