import CustomSwitch from "./CustomSwitch";

export default function Switches () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl gap-3 flex flex-col overflow-hidden">
        <p className='font-medium text-white'>Switches</p>
        <CustomSwitch checked = { false } disabled = { false } content = "Default" />
        <CustomSwitch checked = { true } disabled = { false } content = "Chceked" />
        <CustomSwitch checked = { false } disabled = { true } content = "Default" />
        <CustomSwitch checked = { true } disabled = { true } content = "Chceked" />
      </div>
    );
}
