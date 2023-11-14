import SingleSlider from './SingleSlider';
import MultiRangeSlider from './MultiRangeSlider';

export default function Slider () {
    return (
      <div className="bg-[#17191B] items-center p-4 lg:p-10 rounded-xl gap-5 flex flex-col overflow-hidden w-[400px] pb-16 lg:pb-20">
        <p className='font-medium text-white'>Slider Control</p>
        <SingleSlider min = {0} max = {100} />
        <MultiRangeSlider
            min={0}
            max={100}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
    );
}
