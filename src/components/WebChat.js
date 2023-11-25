import * as React from 'react'
import '../css/aix_base.css'
import '../css/animations.css';

import { IoMdClose } from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import OpenAI from 'openai';

function WebChat () {
    const [showModal, setShowModal] = useState(0);
    const [settingModal, setSettingModal] = useState(0);
    const [curMsg ,setCurMsg] = useState('');
    const [UserId, setUserId] = useState("");
    const [isClosed, setIsClosed] = useState(0);

    const scopeId_GET = new URLSearchParams(window.location.search).get('scopeId');
    const userToken_GET = new URLSearchParams(window.location.search).get('userToken');

    // console.log('-----------------------');
    // console.log(scopeId_GET );
    // console.log(userToken_GET);

    const [scopeId, setScopeId] = useState(localStorage.getItem("scopeId") ? localStorage.getItem("scopeId") : "7700057");
    const [userToken, setUserToken] = useState(localStorage.getItem("userToken") ? localStorage.getItem("userToken") : "35e26211fa1d4746bc814f9cb2a478b8");

    const divRef = useRef(null);

    const initialDB = [{userId:"ai", data: "Hello, I'm Andrew, AI Agent 🤖. Let's optimize your business with AI! Write me in any language 🌍..."},
    {userId:"user", data:"Offers a range of AI solutions that can help optimize and streamline your business processes. Here are some key benefits and services we provide:"}];

    const [msgDB, setMsgDB] = useState(initialDB);
    const [content, setContent] = useState('');

    const handleInputChange = (event) => {
        setCurMsg(event.target.value);
    };

    const handleScopeIdChange = (event) => {
        setScopeId(event.target.value);
    };

    const handleUserTokenChange = (event) => {
        setUserToken(event.target.value);
    };

    const setSettingValues = () => {
        if(scopeId != "")
            localStorage.setItem("scopeId", scopeId);

        if(userToken != "")
           localStorage.setItem("userToken", userToken);
    }
    
    const sendMessage = () => {        
        if(curMsg != '') {  //  && msgDB[msgDB.length - 1].userId == "ai"  
            setCurMsg('');

            axios.post(localStorage.getItem("apiUrl") ? localStorage.getItem("apiUrl") : 'https://eros-ai.cloud:2053/' + 'handle_tasks', {
                // "scope_id": localStorage.getItem("scopeId") ? localStorage.getItem("scopeId") : "7700057",
                "scope_id": scopeId_GET,
                // "secret": localStorage.getItem("userToken") ? localStorage.getItem("userToken") : "35e26211fa1d4746bc814f9cb2a478b8",
                "secret": userToken_GET,
                "user_id": UserId,
                "user_message":curMsg,
                "channel":"webchat",
                "username": UserId,
                "steps":[{"field":"answer","input_getter":"getter_prompt","input_getter_kwargs":{"prompt_var":"ASSISTANT_PROMPT"},"no_hallucinations":true}]})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

            if (divRef.current) {
                divRef.current.scrollTop = divRef.current.scrollHeight;
            }
        }
        
        // const result = await getOpenAIResponse("Hello, how are you?");
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          sendMessage();
        }
    };

    useEffect(() => {
        const generateUniqueID = () => {
          return Array(32).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        }

        const storageKey = "myUserId";
    
        let storedUserId = localStorage.getItem(storageKey);

        console.log('-----UserId-----');
        console.log(storedUserId);

        if (!storedUserId) {
          storedUserId = generateUniqueID();

          localStorage.setItem(storageKey, storedUserId);
        }
    
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        updateDB();
        
        const intervalId = setInterval(() => {
            updateDB();

            if (divRef.current) {
                divRef.current.scrollTop = divRef.current.scrollHeight;
            }
        }, 1000);
      
        return () => {
          clearInterval(intervalId);
        };
    }, []);  

    const updateDB = () => { 
        axios.post('https://eros-ai.cloud:2053/conversation_history', { user_id: localStorage.getItem("myUserId") })
            .then((response) => {
                let tmp = [];
                
                for(let i = 0; i < response.data.conversation.length; i ++) {
                    tmp[tmp.length] = {userId: "", data: ""};
                    tmp[tmp.length - 1].userId = response.data.conversation[i].user_id;
                    tmp[tmp.length - 1].data = response.data.conversation[i].content;
                }

                if([...initialDB, ...tmp] != msgDB)
                    setMsgDB([...initialDB, ...tmp]);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async function getOpenAIResponse(promptContent) {
        const openai = new OpenAI({
            apiKey: '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',
            dangerouslyAllowBrowser: true 
        });
          
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: promptContent }],
            model: 'gpt-3.5-turbo',
        });
      
        return response.data.choices[0].text;
    }

    useEffect(() => {
        var tmp = [];
    
        for(let i = 0; i < msgDB.length; i ++){
            if(msgDB[i].userId == "ai") {
                tmp = [...tmp, (
                    <div className='relative flex flex-row w-3/4 gap-1 mt-5 text-white sm:w-2/3'>
                        <img src="img/webchat_logo.png" className='w-9 h-9'></img>
                        <div className='absolute p-1 bg-white rounded-full top-[25px] left-[25px] bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] border border-white'></div>
                        <div className='p-2 bg-[#FFFFFF1A] rounded-xl'>
                            {msgDB[i].data != "Loading" ? msgDB[i].data : (
                                <button className="buttonload">
                                    <i className="fa fa-spinner fa-spin"></i>
                                </button>
                            )}
                        </div>
                    </div>
                )];
            }
            else {
                tmp = [...tmp, (
                    <div className='flex flex-row justify-end gap-3 mt-5 text-white right-3'>
                        <div className='p-2 bg-[#FFFFFF1A] max-w-xl rounded-2xl'>
                            {msgDB[i].data}
                        </div>
                    </div>
                )];
            }
        }

        if(msgDB[msgDB.length - 1].userId != "ai")
            tmp = [...tmp, (
                <div className='relative flex flex-row w-3/4 gap-1 mt-5 text-white sm:w-2/3'>
                <img src="img/webchat_logo.png" className='w-9 h-9'></img>
                <div className='absolute p-1 bg-white rounded-full top-[25px] left-[25px] bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] border border-white'></div>
                <div className='p-2 bg-[#FFFFFF1A] rounded-xl'>
                    <button className="buttonload">
                        <i className="fa fa-spinner fa-spin"></i>
                    </button>
                </div>
                </div>
            )];

        setContent(tmp);
    }, [msgDB]);

    return (
        <div className={`${isClosed == 0 ? "bg-[#252729]" : "bg-transparent border-none"} webchat relative rounded-xl text-left gap-5 flex flex-col overflow-hidden lg:w-[70vw] md:w-[80vw] sm:w-[90vw] w-[100vw] h-[90vh] border-gray-500 border-2`}>
            {/* Modal */}
            {showModal == 1 ? (<div className='absolute fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
                <div className='relative flex flex-col justify-center w-full h-full text-white'>
                    <div className='text-xl text-center text-md'>You want to close chat room?</div>
                    <div className='flex flex-row justify-center gap-3 mt-7'>
                        <button onClick={() => setShowModal(0)} className='px-8 py-1 outline_button rounded-xl'>Cancel</button>
                        <button
                            onClick={() => {
                                setIsClosed(1); 
                                setShowModal(0);}} 
                            className='py-2 gradient_button rounded-xl px-9'>
                            Close
                        </button>
                    </div>
                </div>
            </div>) : null}

            {/* Setting Modal */}
            {settingModal == 1 ? (<div className='absolute fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
                <div className='relative flex flex-col justify-center w-full h-full text-white'>
                    <div className='text-xl text-center text-md'>Please change settings for better results</div>
                    <div className='flex flex-col items-center justify-center gap-3 mt-5'>
                        API URL
                        <input disabled className='w-2/3 px-3 py-2 white_input rounded-xl' placeholder='https://eros-ai.cloud:2053/'></input>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 mt-5'>
                        ScopeId
                        <input className='w-2/3 px-3 py-2 white_input rounded-xl' value={scopeId} onChange={handleScopeIdChange} placeholder='7700057'></input>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 mt-5'>
                        User Token
                        <input className='w-2/3 px-3 py-2 white_input rounded-xl' value={userToken} onChange={handleUserTokenChange} placeholder='35e26211fa1d4746bc814f9cb2a478b8'></input>
                    </div>
                    <div className='flex flex-row justify-center gap-3 mt-7'>
                        <button onClick={() => {
                            setSettingModal(0);
                            setSettingValues();
                        }} className='py-1 outline_button px-9 rounded-xl'>Save</button>
                        <button 
                            onClick={() => {setSettingModal(0);}} 
                            className='py-2 gradient_button rounded-xl px-9'>
                            Close
                        </button>
                    </div>
                </div>
            </div>) : null}

            <button onClick = {() => setIsClosed(0)} className={`fadeIn absolute ${isClosed == 1 ? "block" : "hidden"} hover:translate-y-[-10px] transition-transform duration-700 ease-in-out bottom-0 right-5 gradient_button p-3 text-white rounded-xl`}>
                <FiMessageSquare className='w-5 h-5' />
            </button>

            <div className={`${isClosed == 0 ? "block" : "hidden"} fadeIn`}>
                {/* Navbar */}
                <div className='h-[77px] w-full p-2 items-center gradient_button flex justify-between'>
                    <div className='flex flex-row items-center gap-2 text-white'>
                        <img src="img/webchat_logo.png" className='w-11 h-11'></img>
                        <p>Integrately AI Agent</p>
                    </div>
                    <div className='relative flex flex-row items-center gap-2 text-white'>
                        {/* <MdMinimize className='absolute w-5 h-5 cursor-pointer right-6 top-[-4px]'/> */}
                        <IoMdClose className='w-5 h-5 cursor-pointer' onClick={() => setShowModal(1)} />
                    </div>
                </div>

                {/* Main Chat */}
                <div ref={divRef} className='relative w-full px-2 overflow-y-auto' style={{height:"calc(100vh - 300px)"}}>
                    <div className='flex flex-col items-center mt-5 text-white'>
                        <img src='img/chat_logo.png' className='w-20 h-20'></img>
                        <div className='text-2xl mt-7'>Integrately AI Agent</div>
                        <div className='mt-3 text-md'>I'm here to help you</div>
                    </div>  
                    {content}
                    {/* <div ref={bottomRef} /> */}
                </div>    
                
                {/* Message Input */}
                <div className='absolute bottom-0 left-0 p-4 w-full border-t border-[#FFFFFF1A] gap-3 flex flex-row justify-center'>
                    <input onKeyDown={handleKeyDown} type="text" value={curMsg} onChange={handleInputChange} placeholder='Message' className='w-2/3 p-2 gray_input rounded-xl'></input>
                    <button onClick = {sendMessage} className='px-3 text-white gradient_button rounded-xl'>
                        <FaTelegramPlane className='w-5 h-5' />
                    </button>
                    {/* <button onClick = {() => {setSettingModal(1)}} className='px-3 text-white gradient_button rounded-xl'>
                        <FiSettings className='w-5 h-5' />
                    </button> */}
                </div>
            </div>
        </div> 
    );
}

export default WebChat;
