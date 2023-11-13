import CustomRadioButton from './CustomRadioButton';

export default function RadionButtons () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl gap-3 flex flex-col overflow-hidden max-w-xl">
        <p className='font-medium text-white'>CheckBox</p>
        <CustomRadioButton label = "Default" checked = {0} />
        <CustomRadioButton label = "Chekced" checked = {1} />
        <CustomRadioButton disabled = {true} label = "Disable" checked = {0} />
        <CustomRadioButton disabled = {true} label = "Disable-checked" checked = {1} />
      </div>
    );
}
