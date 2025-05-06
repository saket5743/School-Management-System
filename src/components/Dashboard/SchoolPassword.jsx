import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const steps = [
  { title: 'Your details', subtitle: 'Name and email' },
  { title: 'Choose a password', subtitle: 'Choose a secure password' },
  { title: 'Invite your team', subtitle: 'Start collaborating' },
  { title: "Upload school's document", subtitle: 'For account verification' },
];

const currentStep = 1;

const SchoolPassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState({password:'', cpassword:''});

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleChange = (e) => {
     const {name, value} = e.target;
     setInputValue(prev => ({...prev, [name]:value}));
    }

    const handleAddPassword = () => {
      const {password, cpassword} = inputValue;
      if (password !== cpassword) {
        alert("Both the password are not match.");
      } else if (password.length < 8) {
        alert("Password must be 8 characters.");
      } else {
        const existingData = JSON.parse(localStorage.getItem("schoolAccount")) || {};
        const updatedData = {
          ...existingData,
          password:password
        }
        localStorage.setItem("schoolAccount", JSON.stringify(updatedData));
        navigate("/staffdashboard");
      }
    };

  return (
    <div className="flex flex-col items-center py-16 h-[695px] gap-12">
      <div className="w-[656px] h-[45px] flex justify-center text-[#4F4F4F] text-3xl font-semibold">
        Udemy school, Choose your password
      </div>

      <div className="w-[512px] h-[280px] flex flex-col items-center gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-gray-500">Choose a password</label>
              <div className="flex justify-center items-center border-[2px] px-2 gap-6">
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  value={inputValue.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="h-[40px] outline-none w-[180px]"
                />
                {showPassword ? (
                  <IoEyeOutline
                    className="cursor-pointer"
                    onClick={togglePassword}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="cursor-pointer"
                    onClick={togglePassword}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-gray-500">Confirm password</label>
              <div className="flex justify-center items-center border-[2px] px-2 gap-6">
                <input
                  type={showPassword ? "text" : "password"}
                  name='cpassword'
                  value={inputValue.cpassword}
                  onChange={handleChange}
                  placeholder="Enter confirm password"
                  className="h-[40px] outline-none w-[180px]"
                />
                {showPassword ? (
                  <IoEyeOutline
                    className="cursor-pointer"
                    onClick={togglePassword}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="cursor-pointer"
                    onClick={togglePassword}
                  />
                )}
              </div>
              <div className="text-gray-500 font-semibold text-xs ml-3">
                Must be at least 8 characters.
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <button onClick={handleAddPassword} className="w-[248px] h-[42px] rounded-[4px] border-[#A7A7A7] bg-[#2D88D4] text-white">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-24">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
              {index !== 0 && (
                <div className="absolute -left-1/2 top-3 w-full h-0.5 bg-gray-300 z-0"></div>
              )}

              <div className="z-10 bg-white rounded-full p-1 border-2 border-blue-500">
                {index < currentStep ? (
                  <MdCheckCircle className="text-blue-500 w-5 h-5" />
                ) : index === currentStep ? (
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                ) : (
                  <FaRegDotCircle className="text-gray-300 w-5 h-5" />
                )}
              </div>
              <div className="mt-2 text-center">
                <p
                  className={`text-sm ${
                    index === currentStep
                      ? "text-blue-500 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-400">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SchoolPassword