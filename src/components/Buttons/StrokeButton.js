import CustomButton from './CustomButton';

export default function StrokeButton () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl flex flex-col gap-3 overflow-hidden">
        <p className='font-medium text-white'>Stroke</p>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" type="stroke" buttonName = "Default" bgFrom = "from-[#00000000]" bgTo = "to-[#00000000]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "Hover" bgFrom = "from-[#2C1A31]" bgTo = "to-[#231D31]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "Pressed" bgFrom = "from-[#371A3D]" bgTo = "to-[#291F3D]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "Disable" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" type="stroke" buttonName = "Default" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "Hover" bgFrom = "from-[#2C1A31]" bgTo = "to-[#231D31]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "Pressed" bgFrom = "from-[#371A3D]" bgTo = "to-[#291F3D]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "Disable" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "none" />
            <CustomButton size = "normal" type="stroke" buttonName = "" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" type="stroke" buttonName = "Default" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "Hover" bgFrom = "from-[#2C1A31]" bgTo = "to-[#231D31]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "Pressed" bgFrom = "from-[#371A3D]" bgTo = "to-[#291F3D]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "Disable" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "normal" type="stroke" buttonName = "Default" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "Hover" bgFrom = "from-[#2C1A31]" bgTo = "to-[#231D31]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "Pressed" bgFrom = "from-[#371A3D]" bgTo = "to-[#291F3D]" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "Disable" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "success" rightIcon = "arrow" />
            <CustomButton size = "normal" type="stroke" buttonName = "" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "loading" rightIcon = "none" />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CustomButton size = "small" type="stroke" buttonName = "" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" type="stroke" buttonName = "" bgFrom = "from-[#2C1A31]" bgTo = "to-[#231D31]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" type="stroke" buttonName = "" bgFrom = "from-[#371A3D]" bgTo = "to-[#291F3D]" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
            <CustomButton size = "small" type="stroke" buttonName = "" bgFrom = "" bgTo = "" bgDisable = "bg-opacity-10" leftIcon = "none" rightIcon = "arrow" />
        </div>
      </div>
    );
}
