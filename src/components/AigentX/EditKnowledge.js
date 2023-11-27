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
import MyContext from '../../MyContext';
import axios from 'axios';

import Sidebar from './Sidebar';
import Leftbar from './Leftbar';

import { useState, useEffect, useContext } from 'react';
import { FaCheck, FaEye, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function EditKnowledge () {
    const {signed, setSigned, barerToken, setBarerToken, groups, setGroups} = useContext(MyContext);
        
    useEffect(() => {
     if(groups != "") {
         const jsonObject = JSON.parse(groups);
         const currentObject = jsonObject[parseInt(localStorage.getItem('selectedGroup'), 10)];
         const currentKnowledge = parseInt(localStorage.getItem('selectedKnowledge'), 10)
 
         const headers = {
             'Authorization': 'Bearer ' + barerToken,
             'Content-Type': 'application/json',
         };
 
         //Get knowledge base code
         axios.get('https://eros-ai.cloud:2096/groups/' + currentObject.id + '/knowledgeBase', { 
             headers
         })
         .then((response) => {
            document.getElementById("source_name").value = response.data.result[currentKnowledge].name;
            document.getElementById("source_type").value = response.data.result[currentKnowledge].type;
            document.getElementById("source_status").value = response.data.result[currentKnowledge].status;

            //Reaxios for knowledgebase detail
            axios.get('https://eros-ai.cloud:2096/groups/' + currentObject.id + '/knowledgeBase/' + response.data.result[currentKnowledge].id, { 
             headers
            })
            .then((response) => {
                document.getElementById("knowledge_content").innerText = response.data.result.text;  
            })
            .catch((error) => {
                console.error(error);
            });
            })
            .catch((error) => {
                console.error(error);
            });
     }
    }, [groups]);

    return (
      <div className="App bg-[#17191B]">
        <Navbar />
        <div className='block md:hidden'>
            <Sidebar />
        </div>
        <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
          <div className='flex w-full'>            
            <div className='flex flex-row w-full'>
                <div className='hidden md:block'>
                    <Leftbar />
                </div>
                <div className='w-full'>
                <div className='flex flex-col items-start justify-center mx-auto my-10 mt-4 max-w-7xl'>
                    <CustomBreadCrumb category={['List of groups', 'Edit group', 'Edit Knowledge Base']} />
                    <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>
                    Edit Knowledge Base
                    </div>
                    <div className='w-full bg-[#FFFFFF0D] rounded-xl p-6 mt-10'>
                    <div className='flex flex-row items-center justify-start gap-2 p-1 py-2 font-medium text-white rounded-xl'>
                        KnowledgeBase Management
                    </div>
                    <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3'>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Source Name
                            </div>
                            <input type="text" id="source_name" placeholder='Website' className='text-white rounded-xl border border-[#747576] bg-transparent p-2'></input>
                            {/* <CustomInput placeholder="Website" /> */}
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Type
                            </div>
                            <input id="source_type" placeholder='Web' className='text-white rounded-xl border border-[#747576] bg-transparent p-2'></input>
                            {/* <CustomInput placeholder="Web" /> */}
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Status
                            </div>
                            <input id="source_status" placeholder='Parsed 1 day ago' className='text-white rounded-xl border border-[#747576] bg-transparent p-2'></input>
                            {/* <CustomInput placeholder="Parsed 1 day ago" /> */}
                        </div>
                    </div>
                    <div className='flex flex-col mt-10 text-white'>
                        <div className='flex justify-between mb-3'>
                            Content
                        </div>
                        <textarea id="knowledge_content" rows="15" cols="60" name="text" placeholder="GET /knowledgeBaseEntity?scopeId=...&id=..." className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                    </div>
                    <div className='flex flex-row justify-end w-full gap-5 mt-10'>
                        <a href='editgroups'><CustomButton size = "normal" buttonName = "Cancel" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" /></a>
                        <CustomButton size = "normal" buttonName = "Save" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EditKnowledge;
