import CustomProgresBar from './CustomProgressBar';

export default function Switches () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl gap-5 flex flex-col overflow-hidden w-[400px]">
        <p className='font-medium text-white'>ProgressBar</p>
        <CustomProgresBar percent = {45} width = "small" />
        <CustomProgresBar percent = {45} width = "medium" />
        <CustomProgresBar percent = {45} width = "large" />
        <CustomProgresBar percent = {45} width = "small" icon = "home" />
        <CustomProgresBar percent = {45} width = "medium" icon = "home" />
        <CustomProgresBar percent = {45} width = "large" icon = "home" />
      </div>
    );
}
