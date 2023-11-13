import CustomSegment from './CustomSegment';

export default function SegmentControls () {
    return (
      <div className="bg-[#17191B] p-6 lg:p-10 rounded-xl flex flex-col gap-7 overflow-hidden items-center max-w-2xl">
        <p className='font-medium text-white'>Segment Control</p>
        <CustomSegment categories = {{Button1: [], Button2: [], Button3: []}} />
        <CustomSegment categories = {{Button1: [], Button2: []}} />
      </div>
    );
}
