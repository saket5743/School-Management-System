import React from "react";
import Logo from "../Sidebar/Sidebarimage/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { FaGraduationCap, FaChartSimple } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const location = useLocation();
  const teacherPaths = ["/teachers", "/addteachers", "/listteachers", "/teacherdetail"];
  const studentPaths = ["/student", "/addstudent", "/liststudent"];
  const isTeacherActive = teacherPaths.includes(location.pathname);
  const isStudentActive = studentPaths.includes(location.pathname);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center text-white bg-[#509CDB] w-[192px] h-[40px] rounded-[4px] gap-[16px] p-2"
      : "flex items-center text-white hover:bg-[#509CDB] w-[192px] h-[40px] rounded-[4px] gap-[16px] p-2";

  return (
    <div className="bg-[#152259] w-[241px] h-[695px]">
      <div className="flex justify-center">
        <div className="flex flex-col justify-start items-center gap-[16px]">
          <div className="mt-10">
            <img
              src={Logo}
              alt="Logo"
              className="w-[65px] h-[65px] rounded-full"
            />
          </div>
          <div>
            <p className="text-white flex justify-center items-center w-[192px] h-[40px] text-xl">
              Udemy Inter. School
            </p>
          </div>
        </div>
      </div>

      <hr className="bg-black mt-10" />

      <div className="flex flex-col gap-16">
        <div className="p-4 flex flex-col gap-[8px]">
          <NavLink to="/dashboard" className={getNavLinkClass}>
            <SlHome className="mt-1 ml-1" />
            Dashboard
          </NavLink>

          <NavLink
            to="/listteachers"
            className={
              isTeacherActive
                ? "flex items-center text-white bg-[#509CDB] w-[192px] h-[40px] rounded-[4px] gap-[16px] p-2"
                : "flex items-center text-white hover:bg-[#509CDB] w-[192px] h-[40px] rounded-[4px] gap-[16px] p-2"
            }
          >
            <SlHome className="mt-1 ml-1" />
            Teachers
          </NavLink>

          <NavLink to="/liststudent"  className={
              isStudentActive
                ? "flex items-center text-white bg-[#509CDB] w-[192px] h-[40px] rounded-[4px] gap-[16px] p-2"
                : "flex items-center text-white hover:bg-[#509CDB] w-[192px] h-[40px] rounded-[4px] gap-[16px] p-2"
            }>
            <FaGraduationCap className="mt-1 ml-1" />
            Students/ classes
          </NavLink>

          <NavLink to="/billing" className={getNavLinkClass}>
            <BsBank className="mt-1 ml-1" />
            Billing
          </NavLink>

          <NavLink to="/settings" className={getNavLinkClass}>
            <CiSettings className="mt-1 ml-1" />
            Settings and Profile
          </NavLink>

          <NavLink to="/exams" className={getNavLinkClass}>
            <FaChartSimple className="mt-1 ml-1" />
            Exams
          </NavLink>
        </div>

        <div className="p-4">
          <NavLink to="/features" className={getNavLinkClass}>
            <BsBank className="mt-1 ml-1" />
            Features
            <div className="ml-2 mt-2 bg-[#B9D7F1] rounded-full px-2 py-[2px] flex items-center justify-center">
              <p className="text-[10px] text-black font-medium leading-none">
                New
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


