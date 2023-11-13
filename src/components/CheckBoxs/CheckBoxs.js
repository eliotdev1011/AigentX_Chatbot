import CustomCheckBox from './CustomCheckBox';

export default function CheckBox () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl gap-3 flex flex-col overflow-hidden max-w-xl">
        <p className='font-medium text-white'>CheckBox</p>
        <CustomCheckBox label = "Default" checked = {0} />
        <CustomCheckBox label = "Chekced" checked = {1} />
        <CustomCheckBox disabled = {true} label = "Disable" checked = {0} />
        <CustomCheckBox disabled = {true} label = "Disable-checked" checked = {1} />
      </div>
    );
}
