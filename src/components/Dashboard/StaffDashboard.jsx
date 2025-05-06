import React, { useState } from 'react'
import { MdCheckCircle } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const steps = [
    { title: 'Your details', subtitle: 'Name and email' },
    { title: 'Choose a password', subtitle: 'Choose a secure password' },
    { title: 'Invite your team', subtitle: 'Start collaborating' },
    { title: "Upload school's document", subtitle: 'For account verification' },
  ];
  
  const currentStep = 2;

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({staff:'', address:''});
  const isValid = inputValue.staff !== '' && inputValue.address !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...inputValue, [name]: value }));
  };

  const handleAddressAndStaff = () => {
    const { staff, address } = inputValue;
    if (!staff || !address) {
      alert("Please fill all the fields.");
    } else {
      const existingData =
        JSON.parse(localStorage.getItem("schoolAccount")) || {};
      const updatedData = {
        ...existingData,
        staff: staff,
        address: address,
      };
      localStorage.setItem("schoolAccount", JSON.stringify(updatedData));
      navigate("/schoollogin");
    }
  };

  return (
    <div className="flex flex-col items-center py-16 h-[695px] gap-12">
      <div className="w-[656px] h-[45px] flex justify-center text-[#4F4F4F] text-3xl font-semibold">
        Udemy school, Choose your staffs
      </div>

      <div className="w-[512px] h-[280px] flex flex-col items-center gap-10">
        <div className="w-80 mx-auto mt-10 space-y-3">
          <select
            name='staff'
            value={inputValue.staff}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 outline-none"
          >
            <option value="" className="text-gray-500">
              Number of staff
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>

          <select
            name='address'
            value={inputValue.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 outline-none"
          >
            <option value="" className="text-gray-500">
              School address
            </option>
            <option value="Patna City">Patna City</option>
            <option value="Gandhi Maidan">Gandhi Maidan</option>
            <option value="Bhootnath Road">Bhootnath Road</option>
            <option value="Kumhrar">Kumhrar</option>
            <option value="Gayghat">Gayghat</option>
          </select>

          <button onClick={handleAddressAndStaff}
            className={`w-full text-white py-2 rounded ${
              isValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-300 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            Next
          </button>

          <p className="text-sm text-gray-500">
            Must be at least 8 characters.
          </p>
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
};

export default StaffDashboard