import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useLocation, useNavigate } from 'react-router-dom';


const AvatarGroup = ({ avatars, max = 5 }) => {
  const visibleAvatars = avatars.slice(0, max);
  const extraCount = avatars.length - max;

  return (
    <div className="flex -space-x-4">
      {visibleAvatars.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Avatar ${index + 1}`}
          className="w-10 h-10 rounded-full border-2 border-white shadow"
        />
      ))}
      {extraCount > 0 && (
        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm font-medium text-gray-700 shadow">
          +{extraCount}
        </div>
      )}
    </div>
  );
};

const Studentdetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {name, classassigned, gender} = location.state || {};

  const allAvatars = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/men/6.jpg',
    'https://randomuser.me/api/portraits/women/7.jpg',
    'https://randomuser.me/api/portraits/men/8.jpg',
  ];

  return (
    <div className="flex">
      <div>
        <Sidebar className="h-[200px]" />
      </div>
      <div>
        <div className="flex">
          <div className="flex py-6 px-12 w-[450px] gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-[4px] border border-gray-300">
              Export CSV
            </button>
            <button
              onClick={() => navigate("/addstudent")}
              className="bg-[#509CDB] text-white px-4 py-2 rounded-[4px]"
            >
              Add Students
            </button>
          </div>

          <div className="flex justify-end w-[110vh] py-5 gap-4">
            <div className="w-[24px] h-[24px] p-2">
              <FiBell className="text-xl" />
            </div>
            <div className="w-[120px] h-[40px] p-1">
              <button onClick={()=>navigate('/dashboard')}>Log out</button>
            </div>
          </div>
        </div>

        <div className="flex items-center w-[1020px] h-[49px] rounded-[8px] border border-gray-200 bg-white gap-5 ml-[50px] mt-[25px]">
          <div className="relative mr-2 px-5">
            <select className="text-gray-500 text-sm bg-transparent focus:outline-none">
              <option value="">Add filter</option>
              <option value="name">Name</option>
              <option value="subject">Subject</option>
              <option value="class">Class</option>
              <option value="email">Email</option>
              <option value="gender">Gender</option>
            </select>
          </div>

          <div className="flex gap-3 w-[1000px] p-3">
            <CiSearch className="mt-[2px] text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        <div className='flex w-[1111px] h-[501px] ml-20 mt-5 py-[50px] px-[165px] gap-16'>
          <div className='w-[280px] h-[430px]'>
            <div className='w-[280px]'>
            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="profile pic" className='w-[280px] h-[280px] rounded-[150px] mt-1' />
            </div>
            <div className='mt-4 flex flex-col justify-center items-center gap-2'>
              <p className='font-semibold'>{name}</p>
              <p className='text-[#A7A7A7] text-xs'>{classassigned} Standard</p>
            </div>
            <div className='flex gap-10 ml-12 mt-8'>
              <div className='bg-[#EFF3FA] size-6 w-[38px] h-[40px] p-1 rounded-[8px]'>
              <FaGraduationCap className='text-[#A7A7A7] w-[30px] h-[30px]' />
              </div>
              <div className='bg-[#EFF3FA] size-6 w-[38px] h-[40px] p-1 rounded-[8px]'>
              <FiPhoneCall className='text-[#A7A7A7] w-[30px] h-[30px]' />
              </div>
              <div className='bg-[#EFF3FA] size-6 w-[38px] h-[40px] p-1 rounded-[8px]'>
              <HiOutlineEnvelope className='text-[#A7A7A7] w-[30px] h-[30px]' />
              </div>
            </div>
          </div>

          <div>
          <div className='flex flex-col gap-4 mt-8'>
            <div className='w-[133px] h-[24px]'>
              <p>About</p>
            </div>
            <div className='w-[335px] h-[197px]'>
              <p className='text-[#A7A7A7] text-xs'>
              Nulla Lorem mollit cupidatat irure. Laborum <br />
              magna nulla duis ullamco cillum dolor. <br />
              Voluptate exercitation incididunt aliquip <br />
              deserunt reprehenderit elit laborum. Nulla <br />
              Lorem mollit cupidatat irure. Laborum <br />
              magna nulla duis ullamco cillum dolor. <br />
              Voluptate exercitation incididunt aliquip <br />
              deserunt reprehenderit elit laborum. 
              </p>
            </div>
          </div>

          <div className='flex gap-[145px] text-xs'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Age</p>
              <p className='text-[#A7A7A7]'>34</p>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='font-semibold'>Gender</p>
            <p className='text-[#A7A7A7]'>{gender}</p>
            </div>
          </div>

          <div className='mt-9 flex flex-col gap-5'>
            <div>
              <p className='text-xs'>Students from the same class</p>
            </div>
            <div>
            <AvatarGroup avatars={allAvatars} max={5} />
            </div>
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Studentdetail