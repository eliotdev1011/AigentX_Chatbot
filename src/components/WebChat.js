import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import { MdMinimize } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { FaTruckLoading, FaTelegramPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import axios from 'axios';
import OpenAI from 'openai';

import CustomBreadCrumb from './BreadCrumb/CustomBreadCrumb';
import CustomPagination from './Pagination/CustomPagination';
import CustomCheckBox from './CheckBoxs/CustomCheckBox';
import CustomButton from './Buttons/CustomButton';
import CustomInput from './Inputs/CustomInput';
import CustomSwitch from './Switches/CustomSwitch';

function WebChat () {
    const [showModal, setShowModal] = useState(0);
    const [chatStart, setChatStart] = useState(0);
    const [curMsg ,setCurMsg] = useState('');
    const [msgDB, setMsgDB] = useState(["Hello, I'm Andrew, AI Agent 🤖. Let's optimize your business with AI! Write me in any language 🌍..."
        , "Offers a range of AI solutions that can help optimize and streamline your business processes. Here are some key benefits and services we provide:"]);
    const [content, setContent] = useState('');

    const handleInputChange = (event) => {
        setCurMsg(event.target.value);
    };

    async function getOpenAIResponse(promptContent) {
        const openai = new OpenAI({
            apiKey: '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',
            dangerouslyAllowBrowser: true 
        });

        console.log('==========start===========');
        console.log(promptContent);
          
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: promptContent }],
            model: 'gpt-3.5-turbo',
        });

        console.log("==========end==============");
        console.log(response);
      
        return response.data.choices[0].text;
    }

    const sendMessage = async () => {
        console.log('-----------Message DB--------------');
        console.log(msgDB);

        if(curMsg != '' && msgDB[msgDB.length - 1] != "Loading") {
            setMsgDB([...msgDB, curMsg, "Loading"]);
            setCurMsg('');
        }
        
        const result = await getOpenAIResponse("Hello, how are you?");
    }

    useEffect(() => {
        var tmp = [];

        for(let i = 0; i < msgDB.length; i ++){
            if(i % 2 == 0) {
                tmp = [...tmp, (
                    <div className='relative flex flex-row gap-1 mt-10 text-white'>
                        <img src="img/webchat_logo.png" className='w-9 h-9'></img>
                        <div className='absolute p-1 bg-white rounded-full top-[25px] left-[25px] bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] border border-white'></div>
                        <div className='p-2 bg-[#FFFFFF1A] max-w-sm rounded-xl'>{msgDB[i]}</div>
                    </div>
                )];
            }
            else {
                tmp = [...tmp, (
                    <div className='flex flex-row justify-end gap-3 mt-5 text-white right-3'>
                        <div className='p-2 bg-[#FFFFFF1A] max-w-sm rounded-xl'>
                            {msgDB[i] != "Loading" ? msgDB[i] : (
                                <button className="buttonload">
                                    <i className="fa fa-spinner fa-spin"></i> Waiting for Genie
                                </button>
                            )}
                        </div>
                    </div>
                )];
            }
        }

        setContent(tmp);
    }, [msgDB]);

    return (
        <div className="bg-[#252729] relative rounded-xl gap-5 flex flex-col overflow-hidden w-[400px] lg:w-[500px] h-[700px] border-gray-500 shadow-xl border-2">
            {/* Modal */}
            {showModal == 1 ? (<div className='absolute fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
                <div className='relative flex flex-col justify-center w-full h-full text-white'>
                    <div className='text-xl text text-md'>You want to close chat room?</div>
                    <div className='flex flex-row justify-center gap-3 mt-7'>
                        <button onClick={() => setShowModal(0)} className='px-8 py-1 bg-transparent border border-white rounded-xl'>Cancel</button>
                        <button className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl py-2 px-9'>Close</button>
                    </div>
                </div>
            </div>) : null}

            {/* Navbar */}
            <div className='h-[77px] w-full p-2 items-center bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] flex justify-between'>
                <div className='flex flex-row items-center gap-2 text-white'>
                    <img src="img/webchat_logo.png" className='w-11 h-11'></img>
                    <p>Integrately AI Agent</p>
                </div>
                <div className='relative flex flex-row items-center gap-2 text-white'>
                    <MdMinimize className='absolute w-5 h-5 cursor-pointer right-6 top-[-4px]'/>
                    <IoMdClose className='w-5 h-5 cursor-pointer' onClick={() => setShowModal(1)} />
                </div>
            </div>

            {/* Main Chat */}
            <div className='w-full h-[460px] overflow-auto relative px-2'>
                <div className='flex flex-col items-center mt-5 text-white'>
                    <img src='img/chat_logo.png' className='w-20 h-20'></img>
                    <div className='text-2xl mt-7'>Integrately AI Agent</div>
                    <div className='mt-3 text-md'>I'm here to help you</div>
                </div>  
                {content}
            </div>    
            
            {/* Message Input */}
            <div className='absolute bottom-0 left-0 p-4 w-full border-t border-[#FFFFFF1A] gap-3 flex flex-row justify-center'>
                <input type="text" value={curMsg} onChange={handleInputChange} placeholder='Message' className='bg-transparent border border-[#FFFFFF1A] p-2 rounded-xl w-[330px] text-white'></input>
                <button onClick = {sendMessage} className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] px-3 text-white rounded-xl'><FaTelegramPlane className='w-5 h-5' /></button>
            </div>
        </div> 
    );
}

export default WebChat;
