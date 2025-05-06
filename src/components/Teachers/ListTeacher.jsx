import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const ListTeacher = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [search, setSearch] = useState("");
    const [filterKey, setFilterKey] = useState('');

    useEffect(() => {
      const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
      setTeachers(storedTeachers);
    }, []);

    const filteredData = teachers.filter((item) => {
      const lowerSearch = search.toLowerCase();
    
      if (!filterKey || !search) return true;
    
      switch (filterKey) {
        case "name":
          return item.fullName.toLowerCase().includes(lowerSearch);
        case "subject":
          return item.subject.toLowerCase().includes(lowerSearch);
        case "class":
          return item.classAssigned.toLowerCase().includes(lowerSearch);
        case "email":
          return item.email.toLowerCase().includes(lowerSearch);
        case "gender":
          return item.gender.toLowerCase().includes(lowerSearch);
        default:
          return false;
      }
    });

    const handleSearch = (e) => {
      setSearch(e.target.value);
    }

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="flex">
          <div className="flex py-6 px-12 w-[350px] gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-[4px] border border-gray-300">
              Export CSV
            </button>
            <button
              onClick={() => navigate("/addteachers")}
              className="bg-[#509CDB] text-white px-4 py-2 rounded-[4px]"
            >
              Add Teachers
            </button>
          </div>

          <div className="flex justify-end w-[130vh] py-5 gap-4">
            <div className="w-[24px] h-[24px] p-2">
              <FiBell className="text-xl" />
            </div>
            <div className="w-[120px] h-[40px] p-1">
              <button onClick={() => navigate("/dashboard")}>Log out</button>
            </div>
          </div>
        </div>

        <div className="flex items-center w-[1020px] h-[49px] rounded-[8px] border border-gray-200 bg-white gap-5 ml-[50px] mt-[25px]">
          <div className="relative mr-2 px-5">
            <select value={filterKey} onChange={(e)=>setFilterKey(e.target.value)} className="text-gray-500 text-sm bg-transparent focus:outline-none">
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
              placeholder="Search for a teacher by name or email"
              value={search}
              onChange={handleSearch}
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        <div className="w-[1039px] h-[48px] ml-[50px] mt-[25px]">
          <table className="w-[1039px] h-[500px]">
            <thead>
              <tr className="p-[16px 17px 8px] font-semibold flex px-2 gap-[150px] text-[#424242] ">
                <td>Name</td>
                <td>Subject</td>
                <td>Class</td>
                <td>Email address</td>
                <td>Gender</td>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((teacher) => (
                <tr key={teacher.id} onClick={()=>navigate('/teacherdetail')} className="p-[16px 17px 8px] flex px-2 gap-[0px] text-[#424242] mt-4 cursor-pointer">
                  <td className="w-[195px]">{teacher.fullName}</td>
                  <td className="w-[206px]">{teacher.subject}</td>
                  <td className="w-[188px]">{teacher.classAssigned}</td>
                  <td className="w-[252px]">{teacher.email}</td>
                  <td className="w-[110px]">{teacher.gender}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No teachers added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTeacher