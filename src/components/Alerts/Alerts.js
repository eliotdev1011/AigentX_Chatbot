import CustomAlert from './CustomAlert';

export default function Alerts () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl flex flex-col gap-3 overflow-hidden max-w-md items-center">
        <p className='font-medium text-white'>With icon</p>
        <CustomAlert type="1" alertType="home" title="An example alert with an icon" subtitle="" />
        <CustomAlert type="1" alertType="success" title="An example alert with an icon" subtitle="" />
        <CustomAlert type="1" alertType="error" title="An example alert with an icon" subtitle="" />
        <CustomAlert type="1" alertType="warning" title="An example alert with an icon" subtitle="" />
        <p className='mt-10 font-medium text-white'>With icon and cross</p>
        <CustomAlert type="2" alertType="home" title="An example alert with an icon" subtitle="" />
        <CustomAlert type="2" alertType="success" title="An example alert with an icon" subtitle="" />
        <CustomAlert type="2" alertType="error" title="An example alert with an icon" subtitle="" />
        <CustomAlert type="2" alertType="warning" title="An example alert with an icon" subtitle="" />
        <p className='mt-10 font-medium text-white'>With icon and button</p>
        <CustomAlert type="3" alertType="home" title="An example alert with an icon" subtitle="An example alert with an icon and button" />
        <CustomAlert type="3" alertType="success" title="An example alert with an icon" subtitle="An example alert with an icon and button" />
        <CustomAlert type="3" alertType="error" title="An example alert with an icon" subtitle="An example alert with an icon and button" />
        <CustomAlert type="3" alertType="warning" title="An example alert with an icon" subtitle="An example alert with an icon and button" />
      </div>
    );
}
