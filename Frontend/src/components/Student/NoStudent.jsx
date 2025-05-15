import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import elephant from '../Student/elephant.png'

const NoStudent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="flex justify-end w-[184vh] p-2 gap-4">
          <div className="w-[24px] h-[24px] p-2">
            <FiBell className="text-xl" />
          </div>
          <div className="w-[120px] h-[40px] p-1">
            <button>Log out</button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full max-w-[1115px] h-[69px] px-[14px] py-[16px] ml-20">
          <div className="text-lg font-semibold text-[#4F4F4F]">Students</div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-[4px] border border-gray-300">
              Export CSV
            </button>
            <button onClick={()=>navigate('/addstudent')} className="bg-[#509CDB] text-white px-4 py-2 rounded-[4px]">
              Add Students
            </button>
          </div>
        </div>

        <div className="flex items-center w-[1020px] h-[49px] rounded-[8px] border border-gray-200 px-2 py-1 bg-white gap-5 ml-[180px] mt-[25px]">
          <div className="relative mr-2 px-5">
            <select className="text-gray-500 text-sm bg-transparent focus:outline-none">
              <option value="">Add filter</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="class">Class</option>
            </select>
          </div>

          <div className="flex gap-3 w-[1000px] p-3">
            <CiSearch className='mt-[2px] text-xl text-gray-500' />
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        <div className='w-[1020px] h-[419px] ml-[180px] flex justify-end items-end'>
          <div className='flex flex-col justify-end items-end w-[850px] gap-5'>
            <div className='mr-[240px]'>
              <img src={elephant} alt="elephant" className='w-[340px] h-[255px]' />
            </div>
            <div>
            <div className='w-[830px] h-[35px] flex justify-center items-center'>
            <p className='text-[#4F4F4F] ml-6 text-xl'>No students at this time</p>
            </div>
            <div className='w-[830px] h-[35px] flex justify-center items-center'>
            <p className='text-[#4F4F4F]  text-sm'>Students will appear here after they enroll in your school.</p>
            </div>
            </div>
          </div>

          {/* Support  */}
          <div className="w-[181px] h-[60px] rounded-[30px] bg-[#152259] flex justify-center items-center gap-10 p-6">
            <div className="flex justify-center items-center gap-4">
              <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998V9.76198C0.333496 10.4446 0.931496 11 1.66683 11H2.3335C2.51031 11 2.67988 10.9297 2.8049 10.8047C2.92992 10.6797 3.00016 10.5101 3.00016 10.3333V6.90465C3.00016 6.72784 2.92992 6.55827 2.8049 6.43324C2.67988 6.30822 2.51031 6.23798 2.3335 6.23798H1.72816C2.09883 3.65798 4.31883 1.66665 7.00016 1.66665C9.6815 1.66665 11.9015 3.65798 12.2722 6.23798H11.6668C11.49 6.23798 11.3204 6.30822 11.1954 6.43324C11.0704 6.55827 11.0002 6.72784 11.0002 6.90465V11C11.0002 11.7353 10.4022 12.3333 9.66683 12.3333H8.3335V11.6666H5.66683V13.6666H9.66683C11.1375 13.6666 12.3335 12.4706 12.3335 11C13.0688 11 13.6668 10.4446 13.6668 9.76198V6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313Z"
                  fill="#FCFAFA"
                />
              </svg>
              </div>
              <div className=''>
                <p className="text-white">Support</p>
              </div>
            </div>
            <div>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L5 1L9 5"
                  stroke="#FCFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoStudent