import CustomBreadCrumb from './CustomBreadCrumb';

export default function BreadCrumb () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl gap-5 flex flex-col overflow-hidden w-[400px]">
        <p className='font-medium text-white'>BreadCrumb</p>
        <CustomBreadCrumb category = {['Level1']} />
        <CustomBreadCrumb category = {['Level1', 'Level2']} />
      </div>
    );
}
