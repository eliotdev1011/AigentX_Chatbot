import CustomInput from './CustomInput';

export default function Inputs () {
    return (
      <div className="bg-[#17191B] p-6 lg:p-10 rounded-xl flex flex-col gap-5 overflow-hidden items-center max-w-2xl">
        <p className='font-medium text-white'>Inputs</p>
        <CustomInput />
        <CustomInput icon = "home" />
        <CustomInput hint = "Hint" />
        <CustomInput type = "password" />
        <CustomInput />
        <CustomInput type = "value" result = "success" />
        <CustomInput type = "value" result = "failed" disabled = "true" error = "Error message" />
        <CustomInput type = "value" result = "failed" error = "Error message" />
        <CustomInput disabled = {1} />
      </div>
    );
}
