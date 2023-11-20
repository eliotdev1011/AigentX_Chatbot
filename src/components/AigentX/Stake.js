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

import Sidebar from './Sidebar';

import { XMarkIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react';
import { FaCheck, FaEye, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function Stake () {
    const [showModal, setShowModal] = useState(1);
    
    return (
      <div className="App bg-[#17191B] body">
        <Navbar />
        <Sidebar />
        {/* Modal */}
        {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
            <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
                <div className='relative w-full mx-8 sm:w-[540px] bg-white text-gray-900 p-3 py-10 rounded-xl'>
                    <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-5 h-5 text-gray-900 cursor-pointer top-3 right-3'/>
                    <div className='text-2xl font-bold'>Select Staking Option</div>
                    <div className='flex flex-col justify-center gap-3 mt-10 lg:flex-row'>
                        <div className='p-3 bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl font-medium cursor-pointer'>
                            <div className='text-sm text-gray-300'>14 days Lockup</div>
                            <div className='text-xl text-white'>15% APR</div>
                        </div>
                        <div className='p-3 font-medium text-gray-900 bg-[#F3F3F3] rounded-xl cursor-pointer'>
                            <div className='text-sm text-gray-500'>28 days Lockup</div>
                            <div className='text-xl'>40% APR</div>
                        </div>
                        <div className='p-3 font-medium text-gray-900 bg-[#F3F3F3] rounded-xl cursor-pointer'>
                            <div className='text-sm text-gray-500'>56 days Lockup</div>
                            <div className='text-xl'>56% APR</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-2 mt-5 font-medium text-md'>
                        $AIX Balance:
                        <div className='text-purple-400'>0 $AIX</div>
                    </div>
                    <div className='flex items-center justify-center w-full mt-5'>
                        <input className='px-5 py-2 bg-transparent border border-gray-500 w-[300px] rounded-xl'></input>
                    </div>
                    <div className='mt-5 font-semibold'>You're staking: 0 $AIX tokens</div>
                    <div className='flex flex-row justify-center gap-3 mt-7'>
                        <button className='bg-[#ED1522] rounded-xl py-2 px-16 w-full lg:w-2/3 bg-gradient-to-r from-[#FB1FFF] to-[#8247FF] text-white' >Stake</button>
                    </div>
                </div>
            </div>
        </div>) : null}
        <div className='flex items-center justify-center w-full px-3 body lg:px-0'>
          <div className='flex justify-start w-full max-w-7xl'>
            <div className='flex flex-col items-start w-full my-10'>
              <CustomBreadCrumb category={['Staking']} />
              <div className='mt-6 text-3xl font-medium text-white lg:text-4xl'>
                Staking
              </div>
              <div className='w-full bg-[#FFFFFF0D] rounded-xl p-10 mt-10'>
                <div className='flex flex-row items-center justify-center gap-2 font-medium text-white border-[#393A4C] border p-1 py-2 rounded-xl'>
                    Pool Size
                </div>
                <div className='flex flex-row items-center justify-center gap-2 p-1 py-2 font-medium text-white rounded-xl'>
                    Leverage the power of compounding by staking your $AIX tokens and compounding rewards as they accrue
                </div>
                <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3'>
                    <div className='flex flex-col p-5 text-white border border-[#FFFFFF33] rounded-xl'>
                        <div className='flex justify-between mb-6'>
                            <p>14 Days</p>
                            <p className='text-gray-500'>1.50% ETH Rewards Share</p> 
                        </div>
                        <div className='flex justify-between mb-3'>
                            <p>15% APR</p>
                            <p className=''>0 $AIX/0%</p> 
                        </div>
                        <button onClick={() => setShowModal(1)} className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3'>Stake Now</button>
                    </div>
                    <div className='flex flex-col p-5 text-white border border-[#FFFFFF33] rounded-xl'>
                        <div className='flex justify-between mb-6'>
                            <p>28 Days</p>
                            <p className='text-gray-500'>12.50% ETH Rewards Share</p> 
                        </div>
                        <div className='flex justify-between mb-3'>
                            <p>40% APR</p>
                            <p className=''>0 $AIX/0%</p> 
                        </div>
                        <button onClick={() => setShowModal(1)} className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3'>Stake Now</button>
                    </div>
                    <div className='flex flex-col p-5 text-white border border-[#FFFFFF33] rounded-xl'>
                        <div className='flex justify-between mb-6'>
                            <p>56 Days</p>
                            <p className='text-gray-500'>86% ETH Rewards Share</p> 
                        </div>
                        <div onClick={() => setShowModal(1)} className='flex justify-between mb-3'>
                            <p>60% APR</p>
                            <p className=''>0 $AIX/0%</p> 
                        </div>
                        <button className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3'>Stake Now</button>
                    </div>
                </div>
              </div>
              <div className='w-full bg-[#FFFFFF0D] rounded-xl p-10 mt-10 flex items-center flex-col'>
                <div className='w-full flex flex-row items-center justify-center gap-2 font-medium text-white border-[#393A4C] border p-1 py-2 rounded-xl'>
                    My Stakes & Rewards
                </div>
                <img src="../img/aix.png" className='mt-10'></img>
                <div className='flex flex-row items-center justify-center gap-2 p-1 py-2 mt-3 font-medium text-white rounded-xl'>
                    You have no staked $AIX
                </div>
                <button onClick={() => setShowModal(1)} className='mt-10 bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3 text-white w-1/2 lg:w-1/5'>Stake Now</button>
                <div className='flex flex-row items-center justify-center gap-2 p-1 py-2 mt-10 font-medium text-white rounded-xl'>
                    After Staking
                </div>
                <div className='w-full mt-10 overflow-auto text-white'>
                    <div className='w-[1200px]'>
                        <div className="flex flex-row p-3 bg-transparent rounded-xl">
                            <div className='flex flex-row justify-center w-1/5'>15% APR</div>
                            <div className='w-1/5'>1 $AIX</div>
                            <div className='w-1/5'>0 ETH</div>
                            <div className='w-1/5'>0 $AIX</div>
                            <div className='w-1/5'>13D 23H 59M 49S</div>
                        </div>
                        <div className="flex flex-row p-3 text-gray-500 bg-transparent rounded-xl">
                            <div className='flex flex-row justify-center w-1/5'>14 Days Lockup</div>
                            <div className='w-1/5'>Staked</div>
                            <div className='w-1/5'>Unclaimed ETH</div>
                            <div className='w-1/5'>Earn $AIX</div>
                            <div className='w-1/5'>Locak Remaining</div>
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

export default Stake;
