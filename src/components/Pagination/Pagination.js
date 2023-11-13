import CustomPagination from './CustomPagination';

export default function Pagination () {
    return (
      <div className="bg-[#17191B] p-4 lg:p-10 rounded-xl gap-5 flex flex-col overflow-hidden w-[400px]">
        <p className='font-medium text-white'>Pagination</p>
        <CustomPagination count = { 17 } current = {1} />
        <CustomPagination count = { 17 } current = {2} />
        <CustomPagination count = { 17 } current = {0} />
      </div>
    );
}
