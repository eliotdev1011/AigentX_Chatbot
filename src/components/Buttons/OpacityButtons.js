import CustomButton from './CustomButton';

export default function OpacityButtons () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl flex flex-col gap-3 overflow-hidden">
        <p className='font-medium text-white'>Opacity</p>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "#FF0000" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Disable" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Disable" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Disable" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Disable" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "small" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" buttonName = "" bgFrom = "#454749" bgTo = "#454749" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
        </div>
      </div>
    );
}
