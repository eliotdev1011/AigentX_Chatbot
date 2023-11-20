import CustomComboBox from './CustomComboBox';
import Dropdown from './Dropdown';

export default function Selects () {
    return (
      <div className="bg-[#17191B] text-white min-h-[500px] items-center p-4 lg:p-10 rounded-xl gap-5 flex flex-col overflow-hidden w-[400px]">
        <p className='font-medium text-white'>Select/Dropdown</p>
        <CustomComboBox myItem = {[{id: 1, name: "Item1"}, {id: 2, name: "Item2"}, {id: 3, name: "Item3"}, {id: 4, name: "Item4"}, {id: 5, name: "Item5"}]} />
        <div className='mt-44'></div>
        <Dropdown />
      </div>
    );
}
