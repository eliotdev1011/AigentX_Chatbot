import * as React from 'react'
import '../../css/aix_base.css'
import '../../css/animations.css';

import Navbar from './Navbar';
import CustomBreadCrumb from '../BreadCrumb/CustomBreadCrumb';
import CustomPagination from '../Pagination/CustomPagination';
import CustomComboBox from '../Select/CustomComboBox';
import CustomCheckBox from '../CheckBoxs/CustomCheckBox';
import CustomButton from '../Buttons/CustomButton';
import CustomInput from '../Inputs/CustomInput';
import CustomSwitch from '../Switches/CustomSwitch';

import { XMarkIcon } from '@heroicons/react/24/outline'
import Sidebar from './Sidebar';
import Leftbar from './Leftbar';

import { useState, useEffect } from 'react';
import { FaCheck, FaEye, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const tableData = [
    ['Whitepaper.pdf', 'Pdf', 'Active', '24KB'],
    ['Youtube', 'Video', 'Setup'],
    ['Mem1', 'Text'],
    ['Mem2', 'Text'],
    ['Website', 'Web', "Parsed 1 day ago"],
];

function EditGroups () {
   const [content, setContent] = useState([]);
   const [showModal, setShowModal] = useState(0);

   useEffect(() => {
    var tmp = [];
    
    for(let i = 0; i < tableData.length; i ++)
      tmp = [...tmp, (
        <div 
            className = {`
                ${i % 2 == 0 ? 'bg-[#FFFFFF0D]' : 'bg-transparent'}
                rounded-xl flex flex-row p-4 py-5 hover:bg-[#393A4C] font-medium leading-5 text-base`}>
            <div className='flex flex-row items-center justify-start w-1/4 gap-1'>
                {/* <CustomCheckBox /> */}
                {tableData[i][0]}
            </div>
            <div className='flex flex-row items-center justify-start w-1/4 gap-1'>
                {tableData[i][1]}
            </div>
            <div className='flex justify-start w-1/4'>
                {tableData[i][2] == "Active" && (<a className='bg-[#52C41A1A] p-2 rounded-xl text-[#52C41A] font-medium'>Active</a>)}
                {tableData[i][2] == "Setup" && (<a className='bg-[#FFE6621A] p-2 rounded-xl text-[#FFE662] font-medium'>Setup</a>)}
                {(tableData[i][2] != "Setup" && tableData[i][2] != "Active" && tableData[i][2]) && (<a className='bg-[#FFFFFF1A] p-2 rounded-xl text-white font-medium'>{tableData[i][2]}</a>)}
            </div>
            <div className='flex flex-row items-center justify-start w-1/6 gap-1'>
                {tableData[i][3]}
            </div>
            <div className='flex flex-row items-center justify-end gap-3'>
                <FaEye className='w-4 h-4 cursor-pointer hover:text-green-500'/>
                <a href="/aigentx/editknowledge"><img src="../img/edit_icon.png"></img></a>
                <img src="../img/delete_icon.png" className='cursor-pointer'></img>
            
                {/* <a href="/aigentx/editknowledge"><FaEdit className='w-5 h-5 cursor-pointer hover:text-blue-500'/></a>
                <MdDelete className='w-5 h-5 cursor-pointer hover:text-red-500'/> */}
            </div>
        </div>
      )];
    
      setContent(tmp);
   }, []);

    return (
      <div className="App bg-[#17191B] body">
        <Navbar />
        <div className='block super:hidden'>
            <Sidebar />
        </div>

            {/* Modal */}
            {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
            <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
                <div className='relative w-full mx-8 sm:w-[540px] bg-white text-gray-900 p-5 py-10 rounded-xl'>
                    <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-5 h-5 text-gray-900 cursor-pointer top-3 right-3'/>
                    <div className='text-2xl font-bold'>Add</div>
                    <div className='mt-5 font-semibold text-left text-gray-900'>Type</div>
                    <CustomComboBox myItem = {[{id: 1, name: "Website"}, {id: 2, name: "File"}, {id: 3, name: "Video"}]}/>
                    <div className='mt-5 font-semibold text-left'>Name</div>
                    <input type="text" className='mt-2 w-full py-2 bg-transparent border-[#17191B33] border rounded-xl px-3' placeholder='Name'></input>
                    <div className='mt-5 font-semibold text-left'>Link</div>
                    <input type="text" className='mt-2 w-full py-2 bg-transparent border-[#17191B33] border rounded-xl px-3' placeholder='Link'></input>
                    <div className='mt-5 font-medium text-black'>
                        <CustomCheckBox label = "Scrape whole Website" checked = {1} />
                    </div>
                    <div className='flex flex-row justify-center gap-3 mt-7'>
                        <button onClick={() => setShowModal(0)} className='py-1 bg-transparent border border-[#17191B99] w-1/2 px-14 rounded-xl'>Cancel</button>
                        <button className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] w-1/2 rounded-xl py-2 px-16 text-white'>Add</button>
                    </div>
                </div>
            </div>
        </div>) : null}

        <div className='flex flex-row'>
            <div className='hidden super:block'>
                <Leftbar />
            </div>
            <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
            <div className='flex justify-start w-full max-w-7xl'>
                <div className='flex flex-col items-start w-full mt-4 mb-10'>
                <CustomBreadCrumb category={['List of groups', 'Edit group']} />
                <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>
                    Edit group
                </div>
                <div className='w-full bg-[#FFFFFF0D] rounded-xl p-6 mt-10'>
                    <div className='flex flex-row items-center justify-start gap-2 p-1 py-2 text-xl font-medium leading-6 text-white rounded-xl'>
                        Ownership Verified
                        <img src="../img/check_icon.png"></img>
                        {/* <FaCheck /> */}
                    </div>
                    <div className='grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2'>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Company Informatino
                            </div>
                            <textarea rows="2" cols="15" name="text" placeholder = "Detailed info about your project" className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                How To Buy
                            </div>
                            <textarea rows="2" cols="15" name="text" placeholder = "e.g. Uniswap lin" className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Coin Gecko Info
                                <CustomSwitch checked = { true } disabled = { false }/>
                            </div>
                            <textarea rows="2" cols="15" name="text" placeholder = "https://www.coingecko.com/en/coins/aigentx"  className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Contacts
                            </div>
                            <textarea rows="2" cols="15" name="text" placeholder = "All project contract addresses and short description"  className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Dex Tools Link
                                <CustomSwitch checked = { false } disabled = { false }/>
                            </div>
                            <textarea disabled rows="2" cols="15" name="text" value = "https://www.dextools.io/app/en/ether/pair-explorer/0x3fdfd866fa9e1ab4b6f6762cbdce0bf787583dc3"  className='text-[#FFFFFF1A] bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Auto Detection
                            </div>
                            <CustomComboBox myItem = {[{id: 1, name: "Active"}, {id: 2, name: "Disabled"}]}/>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Dex Screener
                                <CustomSwitch checked = { false } disabled = { false }/>
                            </div>
                            <textarea disabled rows="2" cols="15" name="text" value = "https://dexscreener.com/ethereum/0x3fdfd866fa9e1ab4b6f6762cbdce0bf787583dc3"  className='text-[#FFFFFF1A] bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Tone of Voice
                            </div>
                            <CustomComboBox myItem = {[{id: 1, name: "GET /toneOfVoiceOptions"}]}/>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='flex justify-between mb-3'>
                                Token Info
                            </div>
                            <textarea rows="2" cols="15" name="text" placeholder = "Token utility and tokenomics"  className='text-white bg-transparent p-4 border border-[#747576] rounded-xl'></textarea>
                        </div>
                    </div>
                    <div className='flex items-center justify-between px-4 py-2 text-xl font-medium leading-6 text-white mt-9 rounded-xl'>
                        Knowledge Base Management
                        <button onClick={() => setShowModal(1)} className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl py-1 px-3'>+</button>               
                    </div>
                    <div className='w-full overflow-auto text-white'>
                        <div className='w-[1225px]'>
                            <div className="flex flex-row p-4 py-5 text-base font-medium leading-5 text-left bg-transparent rounded-xl">
                                <div className='flex flex-row w-1/4'>Name</div>
                                <div className='w-1/4'>Type</div>
                                <div className='w-1/4'>Status</div>
                                <div className='w-1/6'>Size</div>
                                <div className='text-right'>Action</div>
                            </div>
                            {content}
                        </div>
                    </div>
                    <div className='flex flex-row justify-end w-full gap-5 mt-10'>
                        <a href="/aigentx"><CustomButton size = "normal" buttonName = "Cancel" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" /></a>
                        <CustomButton size = "normal" buttonName = "Save" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
}

export default EditGroups;
