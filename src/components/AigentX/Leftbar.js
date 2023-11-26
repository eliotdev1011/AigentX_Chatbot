import { RiArrowRightSLine, RiArrowUpSFill } from 'react-icons/ri';

export default function Leftbar () {
    return (
      <div className="bg-[#17191B] p-4 lg:py-10 rounded-xl flex flex-col gap-3 overflow-hidden w-[300px]">
        <div className='flex flex-col gap-5 text-sm text-center'>
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
            <div className='text-gray-900 bg-[#FFFFFF33] rounded-xl text-sm px-2'>Soon</div>
            </div>
            <div className='flex flex-row text-[#FFFFFF99] items-center justify-between gap-3 px-6 py-2 cursor-pointer rounded-xl'>
            <div className='flex flex-row items-center justify-center gap-2'>
                {/* <GiPapers className='w-5 h-5' /> */}
                <img src="../img/icon_staking.png"></img>
                <a>RevSharing Staking</a>                  
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
                <div className='flex flex-row items-center justify-center gap-[10px] pl-1'>
                    {/* <IoDocumentText className='w-5 h-5' /> */}
                    <img src="../img/icon_docs.png"></img>
                    <a href="https://aigentx.gitbook.io/whitepaper/">Docs</a>
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
                <div className='flex flex-row items-center justify-center gap-1'>
                <div className='text-white text-md'>0.34</div>
                <div className='text-[#52C41A] bg-[#52C41A1A] flex flex-row items-center py-[2px] rounded-xl px-1'>
                    <RiArrowUpSFill className='text-[#52C41A] h-5 w-5' />
                    13%
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
}
