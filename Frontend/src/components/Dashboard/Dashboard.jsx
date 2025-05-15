import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { FiBell } from "react-icons/fi";
import { IoIosPersonAdd } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="px-32 py-8 flex gap-56">
          <div className="text-[#424242] text-[16px]">
            <p>Learn how to launch faster</p>
            <p>
              watch our webinar for tips from our experts and get a limited time
              offer.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="py-2">
              <FiBell className="w-[22.17px] h-[23.33px] border-[1.5px]" />
            </div>
            <div className="bg-[#509CDB] w-[120px] h-[40px] p-[6px] rounded-[8px] flex flex-col gap-[10px]">
              <button className="text-white">Log out</button>
            </div>
          </div>
        </div>

        <div className="flex w-[755px] h-[45px] gap-[16px] px-32 py-2">
          <p className="font-sans font-semibold text-2xl text-[#4F4F4F]">
            Welcome to your dashboard, Udemy school
          </p>
        </div>

        <div className="flex w-[325px] h-[30px] gap-[16px] px-48">
          <p className="font-sans font-semibold text-xl text-[#4F4F4F]">
            Uyo/school/@teachable.com
          </p>
        </div>

        <div className="flex px-32 py-2 gap-7 items-end mt-5">
          <div className="w-[650px] h-[458px]">
            <div>
              <div className="flex py-10 px-24 gap-5 hover:cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#EFF3FA] p-3">
                  <IoIosPersonAdd onClick={()=> navigate('/schoolaccount')} />
                </div>
                <div className="flex flex-col gap-3">
                  <p onClick={()=> navigate('/schoolaccount')} className="font-sans text-xl text-[#4F4F4F]">
                    Add other admins
                  </p>
                  <p className="font-sans text-[12px] text-[#4F4F4F]">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they'll appear on your
                    site!
                  </p>
                </div>
              </div>
              <div className="flex py-5 px-24 gap-5">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#EFF3FA] p-3">
                  <BsBank />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-sans text-xl text-[#4F4F4F] hover:cursor-pointer">
                    Add classes
                  </p>
                  <p className="font-sans text-[12px] text-[#4F4F4F]">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they'll appear on your
                    site!
                  </p>
                </div>
              </div>

              <div onClick={()=>navigate('/addstudent')} className="flex py-10 px-24 gap-5">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#EFF3FA] p-3">
                  <FaGraduationCap />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-sans text-xl text-[#4F4F4F] hover:cursor-pointer">
                    Add students
                  </p>
                  <p className="font-sans text-[12px] text-[#4F4F4F]">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they'll appear on your
                    site!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
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
  );
}

export default Dashboard

