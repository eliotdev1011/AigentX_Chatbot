import CustomButton from './CustomButton';

export default function SolidButtons () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl flex flex-col gap-3 overflow-hidden">
        <p className='font-medium text-white'>Solid</p>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton disabled = {1} size = "normal" buttonName = "Disable" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton disabled = {1} size = "normal" buttonName = "Disable" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton disabled = {1} size = "normal" buttonName = "Disable" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" buttonName = "Default" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Hover" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "Pressed" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton disabled = {1} size = "normal" buttonName = "Disable" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton disabled = {1} size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
        </div>
      </div>
    );
}
