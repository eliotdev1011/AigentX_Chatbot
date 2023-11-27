import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaUser, FaTelegram, FaPlus, FaSearch, FaStar } from 'react-icons/fa';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useContext } from 'react';
import axios from 'axios';

import {
    useAccount,
} from "wagmi";

import '../../css/aix_base.css';
import MyContext from '../../MyContext';

const navigation = [
  { name: 'Submenu 1', href: '#', current: true },
  { name: 'Submenu 2', href: '#', current: false },
  { name: 'Submenu 3', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const account = useAccount();
    const [tgUser, setTgUser] = useState("");

    const {signed, setSigned, barerToken, setBarerToken, groups, setGroups} = useContext(MyContext);

    if(account.address == undefined || account.address == null) {
        setSigned(0);
        localStorage.setItem('signed', 0);
    }
    
    if(account.address && signed == 0) {
        const timestamp = Date.now();
        let _timestamp = (timestamp / 1000).toFixed(0) - 200;

        //Get barer token and save to useContext barerToken
        axios.post('https://eros-ai.cloud:2096/sign', { 
            wallet: account.address, 
            timestamp: _timestamp, 
            signature: "0x6783dc65a876be71598dbeeff0dd991bb061faf15a1b37fb3a7f4f9704b15804208f20143428859f9d5531bacb4acaeb7a5eaed6604a1ba2d8c9acb2e479d57c1b" 
        })
        .then((response) => {
            setBarerToken(response.data.token);
            setSigned(1);

            //Alert when connect wallet
            if(localStorage.getItem('signed') == null || localStorage.getItem('signed') == 0) {
                alert("I verify my ownership to use AIgentX bot Timestamp:" + _timestamp);         
                localStorage.setItem("signed", 1);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        //Fetch Tg username data and save to local tgUser
        if(account.address && barerToken != "") {    
            const headers = {
                // 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2RhdGEiOnsid2FsbGV0IjoiMHhEZWFkOEQwRmVkMzU0YWM4OTFDODhDMmZlNjQ5MDIyMzVhRDE4MmZmIn0sImV4cCI6MTcwMTU0MTcyNiwiaWF0IjoxNzAwOTM2OTI2fQ.kLZD4KS976o_RjLocntoyMdqYV2tHFvLHg3Ft3bye-g",
                'Authorization': 'Bearer ' + barerToken,
                'Content-Type': 'application/json',
            };
    
            axios.get('https://eros-ai.cloud:2096/telegramUser', { 
                headers
            })
            .then((response) => {
                //Alert when wallet connect
                if(response.data.username == null && tgUser == "") {
                    alert(account.address + 'Wallet is not connected to any telegram user');
                    setTgUser("Not connected");
                }
                else
                    setTgUser(response.data.username);
            })
            .catch((error) => {
                console.error(error);
            });
        }

        //Fetch group data and save to useContext groups
        if(account.address && barerToken != "") {
            const headers = {
                // 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2RhdGEiOnsid2FsbGV0IjoiMHhEZWFkOEQwRmVkMzU0YWM4OTFDODhDMmZlNjQ5MDIyMzVhRDE4MmZmIn0sImV4cCI6MTcwMTU0MTcyNiwiaWF0IjoxNzAwOTM2OTI2fQ.kLZD4KS976o_RjLocntoyMdqYV2tHFvLHg3Ft3bye-g",
                'Authorization': 'Bearer ' + barerToken,
                'Content-Type': 'application/json',
            };
    
            axios.get('https://eros-ai.cloud:2096/groups', { 
                headers
            })
            .then((response) => {
                setGroups(JSON.stringify(response.data.result));
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [barerToken]);

  return (
    <div className='body'>
        <Disclosure as="nav" className="bg-[#17191B]">
        {({ open }) => (
            <>
            <div className="w-full px-2 py-1 mx-auto sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
                        {/* 1 */}
                        <div className="relative items-center justify-center flex-shrink-0 hidden sm:flex">
                            <a href="/"><img src = "../img/logo.png" className='cursor-pointer w-[116px] h-[32px]'></img></a>
                            {/* <input className='rounded-xl py-[6px] px-2 pl-8 bg-[#393A3C]' placeholder='Search'></input>
                            <FaSearch className='absolute w-[14px] h-[14px] text-[#88898A] -translate-y-1/2 top-1/2 left-2' /> */}
                        </div>
                        {/* 2 */}
                        <div className="hidden sm:ml-6 sm:block">
                            {/* <div className="flex space-x-4 text-[#7B7C7D]">
                                {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                    item.current ? 'border-[#393A4C] text-white' : 'border-[#00000000] hover:border hover:border-[#393A4C] hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium flex flex-row items-center gap-2 border'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <FaStar className='w-3 h-3' />
                                    {item.name}
                                </a>
                                ))}
                            </div> */}
                        </div>
                        {/* 3 */}
                        <div className="inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ConnectButton.Custom>
                            {({
                                account,
                                chain,
                                openAccountModal,
                                openChainModal,
                                openConnectModal,
                                authenticationStatus,
                                mounted,
                            }) => {
                                // Note: If your app doesn't use authentication, you
                                // can remove all 'authenticationStatus' checks
                                const ready = mounted && authenticationStatus !== 'loading';
                                const connected =
                                    ready &&
                                    account &&
                                    chain &&
                                    (!authenticationStatus ||
                                        authenticationStatus === 'authenticated');

                                return (
                                    <div
                                        {...(!ready && {
                                            'aria-hidden': true,
                                            'style': {
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                userSelect: 'none',
                                            },
                                        })}
                                    >
                                        {(() => {
                                            if (!connected) {
                                                return (
                                                    <button  onClick={openConnectModal} className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] text-sm py-3 text-white px-4 rounded-xl flex flex-row items-center gap-1 justify-center'><FaPlus className='w-3 h-3'/> Connect Wallet</button>
                                                );
                                            }

                                            if (chain.unsupported) {
                                                return (
                                                    <button className="px-4 py-2 text-white rounded-xl" style={{ background: 'yellow' }} onClick={openChainModal} type="button">
                                                        Wrong network
                                                    </button>
                                                );
                                            }

                                            return (
                                                <div style={{ display: 'flex', gap: 12 }} className='text-white border-[#393A3C] border p-[6px] rounded-md'>
                                                    <div onClick={openAccountModal} className='flex items-center justify-center gap-2 text-white hover:cursor-pointer'>
                                                        <FaTelegram className='w-6 h-6'/>
                                                        {tgUser}
                                                    </div>
                                                    <button
                                                        onClick={openChainModal}
                                                        style={{ display: 'flex', alignItems: 'center' }}
                                                        type="button"
                                                    >
                                                        {chain.hasIcon && (
                                                            <div
                                                                style={{
                                                                    background: chain.iconBackground,
                                                                    width: 24,
                                                                    height: 24,
                                                                    borderRadius: 999,
                                                                    overflow: 'hidden',
                                                                    marginRight: 4,
                                                                }}
                                                            >
                                                                {chain.iconUrl && (
                                                                    <img
                                                                        alt={chain.name ?? 'Chain icon'}
                                                                        src={chain.iconUrl}
                                                                        style={{ width: 24, height: 24 }}
                                                                    />
                                                                )}
                                                            </div>
                                                        )}
                                                        {/* {chain.name} */}
                                                    </button>

                                                    <button onClick={openAccountModal} type="button">
                                                        {account.displayName}
                                                        {account.displayBalance
                                                            ? ` (${account.displayBalance})`
                                                            : ''}
                                                    </button>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>

                        </div>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 text-[#7B7C7D]">
                {/* {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-base font-medium flex flex-row gap-1 justify-center items-center'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    <FaStar className='w-3 h-3' />
                    {item.name}
                    </Disclosure.Button>
                ))} */}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </div>
  )
}
