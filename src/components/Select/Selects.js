import CustomComboBox from './CustomComboBox';
import Dropdown from './Dropdown';

export default function Selects () {
    return (
      <div className="bg-[#17191B] min-h-[500px] items-center p-4 lg:p-10 rounded-xl gap-5 flex flex-col overflow-hidden w-[400px]">
        <p className='font-medium text-white'>Select/Dropdown</p>
        <CustomComboBox />
        <div className='mt-44'></div>
        <Dropdown />
      </div>
    );
}
