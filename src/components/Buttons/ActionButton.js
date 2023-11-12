import CustomButton from '../Buttons/CustomButton';

export default function ActionButtons () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl flex flex-col gap-3 overflow-hidden">
        <p className='font-medium text-white'>Action</p>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#ED23FF]" bgTo = "to-[#8E44FF]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
            <CustomButton size = "small" buttonName = "" bgFrom = "from-[#3E4042]" bgTo = "to-[#3E4042]" bgDisable = "bg-opacity-10" leftIcon = "home" rightIcon = "none" />
        </div>
      </div>
    );
}
