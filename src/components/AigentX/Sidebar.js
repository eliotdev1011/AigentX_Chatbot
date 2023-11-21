import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FaCoins, FaCheck, FaEye, FaEdit } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
import { IoDocumentText } from 'react-icons/io5';
import { FaBucket } from 'react-icons/fa6';
import { AiFillControl } from 'react-icons/ai';
import { GiPapers } from 'react-icons/gi';

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
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
                    enterFrom="translate-x-[-400px]"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[-400px]"
                  >
                    <Dialog.Panel className="relative w-screen max-w-md pointer-events-auto">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-[-50px] flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
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
                              <div className='flex flex-row items-center justify-center gap-3 py-2 border border-gray-600 cursor-pointer rounded-xl'>
                                <AiFillControl />
                                <a href="/aigentx">Bot Dashboard</a>
                                <div className='bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] rounded-full w-[25px] text-white'>2</div>
                              </div>
                              <div className='flex flex-row items-center justify-center gap-3 py-2 text-gray-600 border border-gray-600 cursor-pointer rounded-xl'>
                                <FaBucket />
                                Payments
                                <div className='text-gray-900 bg-[#FFFFFF33] rounded-xl px-2'>Soon</div>
                              </div>
                              <div className='flex flex-row items-center justify-center gap-3 py-2 border border-gray-600 cursor-pointer rounded-xl'>
                                <GiPapers />
                                <a href="/aigentx/stake">RevSharing Staking</a>                  
                              </div>
                              <div className='flex flex-row items-center justify-center gap-3 py-2 border border-gray-600 cursor-pointer rounded-xl'>
                                <IoDocumentText />
                                Docs
                              </div>
                              <div className='flex flex-row items-center justify-center gap-3 py-2 border border-gray-600 cursor-pointer rounded-xl'>
                                <FaCoins />
                                Buy
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
