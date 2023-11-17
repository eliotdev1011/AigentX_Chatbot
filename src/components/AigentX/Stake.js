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

function Stake () {
    return (
      <div className="App bg-[#17191B]">
        <Navbar />
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
                        <button className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3'>Stake Now</button>
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
                        <button className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3'>Stake Now</button>
                    </div>
                    <div className='flex flex-col p-5 text-white border border-[#FFFFFF33] rounded-xl'>
                        <div className='flex justify-between mb-6'>
                            <p>56 Days</p>
                            <p className='text-gray-500'>86% ETH Rewards Share</p> 
                        </div>
                        <div className='flex justify-between mb-3'>
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
                <button className='mt-10 bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-xl p-3 text-white w-1/2 lg:w-1/5'>Stake Now</button>
                <div className='flex flex-row items-center justify-center gap-2 p-1 py-2 mt-10 font-medium text-white rounded-xl'>
                    After Staking
                </div>
                <div className='w-full mt-10 overflow-auto text-white'>
                    <div className='w-[1200px]'>
                        <div class="bg-transparent rounded-xl flex flex-row p-3">
                            <div className='flex flex-row justify-center w-1/5'>15% APR</div>
                            <div className='w-1/5'>1 $AIX</div>
                            <div className='w-1/5'>0 ETH</div>
                            <div className='w-1/5'>0 $AIX</div>
                            <div className='w-1/5'>13D 23H 59M 49S</div>
                        </div>
                        <div class="bg-transparent rounded-xl flex flex-row p-3 text-gray-500">
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
