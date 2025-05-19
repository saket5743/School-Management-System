import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import NoStudent from './NoStudent';

const ListStudent = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [filterKey, setFilterKey] = useState('');

    // useEffect(() => {
    //   const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    //   setStudents(storedStudents);
    // }, []);

    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await fetch(
            "http://localhost:3151/api/v1/student/liststudent"
          );
          const result = await response.json();
          setStudents(result.students || []);
        } catch (error) {
          console.error("Error fetching students:", error);
          setStudents([]);
        }
      };

      fetchStudents();
    }, []);

    const filteredData = students.filter((item) => {
      const lowerSearch = search.toLowerCase();
    
      if (!filterKey || !search) return true;
    
      switch (filterKey) {
        case "name":
          return item.name.toLowerCase().includes(lowerSearch);
        case "classassigned":
          return item.classassigned;
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
    <div>
        {filteredData.length === 0 ? <NoStudent /> : 
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
                onClick={() => navigate("/addstudent")}
                className="bg-[#509CDB] text-white px-4 py-2 rounded-[4px]"
              >
                Add Student
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
                <option value="classassigned">Class</option>
                <option value="email">Email</option>
                <option value="gender">Gender</option>
              </select>
            </div>
  
            <div className="flex gap-3 w-[1000px] p-3">
              <CiSearch className="mt-[2px] text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Search for a student by name or email"
                value={search}
                onChange={handleSearch}
                className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>
  
          <div className="w-[1039px] h-[26px] ml-[50px] mt-[25px]">
            <table className="w-[1039px] h-[500px]">
              <thead>
                <tr className="p-[16px 17px 8px] font-semibold flex px-2 text-[#424242] ">
                  <td className="w-[170px]">Student ID</td>
                  <td className="w-[195px]">Name</td>
                  <td className="w-[250px]">Email address</td>
                  <td className="w-[100px]">Class</td>
                  <td className="w-[100px]">Gender</td>
                </tr>
              </thead>
  
              <tbody>
                {filteredData.map((student) => (
                  <tr key={student.id} onClick={()=>navigate('/studentdetail', {state:{name:student.name, gender:student.gender, classassigned:student.classassigned}})} className="p-[16px 17px 8px] flex px-2 gap-[0px] text-[#424242] mt-4 cursor-pointer">
                    <td className="w-[170px]">{student.id}</td>
                    <td className="w-[195px]">{student.name}</td>
                    <td className="w-[260px]">{student.email}</td>
                    <td className="w-[90px]">{student.classassigned}</td>
                    <td className="w-[100px]">{student.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        }

    </div>
  )
}

export default ListStudent