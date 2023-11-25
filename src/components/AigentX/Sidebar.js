import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { RiArrowRightSLine } from 'react-icons/ri';
import { IoDocumentText } from 'react-icons/io5';
import { FaBucket } from 'react-icons/fa6';
import { AiFillControl } from 'react-icons/ai';
import { GiBreakingChain, GiPapers } from 'react-icons/gi';
import { LuBringToFront } from 'react-icons/lu';
import { RiArrowUpSFill } from 'react-icons/ri';

import '../../css/aix_base.css';

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div className='body'>
        <button className='fixed p-1 text-white border border-gray-400 rounded-full lg:p-2 left-3 lg:left-10 top-1/2' onClick={() => {setOpen(true)}}><RiArrowRightSLine className='w-5 h-5 text-white'/></button>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-[#2E3032] bg-opacity-60" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="fixed inset-y-0 left-0 flex max-w-full pointer-events-none">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-[-300px]"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[-300px]"
                  >
                    <Dialog.Panel className="relative w-screen max-w-sm pointer-events-auto">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex flex-col h-full py-6 overflow-y-hidden bg-[#17191B] shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="mt-10 text-base font-semibold leading-6 text-gray-300">
                            <div className='flex flex-col gap-5 text-center'>
                              <div className='flex flex-row items-center justify-between gap-3 px-6 py-2 text-white cursor-pointer rounded-xl'>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                  {/* <AiFillControl className='w-5 h-5' /> */}
                                  <img src="../img/icon_dashboard.png"></img>
                                  <a href="/aigentx">Bot Dashboard</a>
                                  <div className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-full w-[25px] text-white'>2</div>
                                </div>
                                <RiArrowRightSLine className='w-6 h-6 text-white' />
                              </div>
                              <div className='flex justify-between flex-row items-center px-6 gap-3 py-2 text-[#FFFFFF33] cursor-pointer rounded-xl'>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                  {/* <FaBucket className='w-5 h-5' /> */}
                                  <img src="../img/icon_payments.png"></img>
                                  Payments
                                </div>
                                <div className='text-gray-900 bg-[#FFFFFF33] rounded-xl px-2'>Soon</div>
                              </div>
                              <div className='flex flex-row text-[#FFFFFF99] items-center justify-between gap-3 px-6 py-2 cursor-pointer rounded-xl'>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                  {/* <GiPapers className='w-5 h-5' /> */}
                                  <img src="../img/icon_staking.png"></img>
                                  <a href="/aigentx/stake">RevSharing Staking</a>                  
                                </div>
                                <div>
                                {/* <div className='text-gray-900 bg-[#FFFFFF33] rounded-xl px-2'>Soon</div> */}
                                <RiArrowRightSLine className='text-[#FFFFFF33] w-6 h-6' />
                                </div>
                              </div>
                              <div className='flex text-[#FFFFFF99] flex-row items-center justify-between gap-3 px-6 py-2 cursor-pointer rounded-xl'>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                  {/* <LuBringToFront className='w-5 h-5' /> */}
                                  <img src="../img/icon_referral.png"></img>
                                  Referral Program
                                </div>
                                <RiArrowRightSLine className='text-[#FFFFFF33] w-6 h-6' />
                              </div>
                              <div className='flex text-[#FFFFFF99] flex-row items-center justify-between px-6 gap-3 py-2 cursor-pointer rounded-xl'>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                  {/* <IoDocumentText className='w-5 h-5' /> */}
                                  <img src="../img/icon_docs.png"></img>
                                  Docs
                                </div>
                                <RiArrowRightSLine className='text-[#FFFFFF33] w-6 h-6' />
                              </div>

                              <div className='flex flex-row justify-between bg-[#FFFFFF0D] p-4 rounded-xl'>
                                <div className='flex flex-row gap-3'>
                                  <img src="../img/logo_price.png" className='w-10 h-10'></img>
                                  <div className='flex flex-col items-start gap-1'>
                                    <div className='text-sm text-[#FFFFFF66]'>Aigent</div>
                                    <div className='text-white text-md'>AIX</div>
                                  </div>
                                </div>
                                <div className='flex flex-col'>
                                  <div className='text-[#FFFFFF66] text-right'>$100.00</div>
                                  <div className='flex flex-row items-center justify-center gap-2'>
                                    <div className='text-white text-md'>0.34</div>
                                    <div className='text-[#52C41A] bg-[#52C41A1A] flex flex-row items-center py-[2px] rounded-xl px-1'>
                                      <RiArrowUpSFill className='text-[#52C41A] h-5 w-5' />
                                      13%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog.Title>
                        </div>
                        <div className="relative flex-1 px-4 mt-6 sm:px-6">{/* Your content */}</div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
    </div>
  )
}
