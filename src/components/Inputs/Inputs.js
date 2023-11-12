import CustomInput from './CustomInput';
export default function Inputs () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl flex flex-col gap-3 overflow-hidden items-center max-w-2xl">
        <p className='font-medium text-white'>Inputs</p>
        <CustomInput />
        <CustomInput icon = "home" />
        <CustomInput hint = "Hint" />
        <CustomInput type = "password" />
        <CustomInput type = "value" />
      </div>
    );
}
