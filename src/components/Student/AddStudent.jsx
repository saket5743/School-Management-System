import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { FiBell } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    classAssigned: '',
    gender: '',
    password: '',
    phone: '',
  });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    const newStudent = {
      id: Date.now() % 100000,
      ...inputValue
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);

    const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
    const updatedStudents = [...existingStudents, newStudent];
    localStorage.setItem('students', JSON.stringify(updatedStudents));

    setInputValue({
      name: '',
      email: '',
      classAssigned: '',
      gender: '',
      password: '',
      phone: '',
    });

    navigate('/liststudent');
  };

  const isFormValid = () => {
    return (
      inputValue.name.trim() !== '' &&
      inputValue.email.trim() !== '' &&
      inputValue.classAssigned.trim() !== '' &&
      inputValue.gender.trim() !== '' &&
      inputValue.password.trim() !== '' &&
      inputValue.phone.trim() !== ''
    );
  };
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
            <button onClick={() => navigate("/")}>Log out</button>
          </div>
        </div>

        <div className="w-full max-w-5xl bg-white p-8 ml-[130px] mt-[30px] rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Add Students
            </h2>
          </div>

          <div className="flex gap-12 pb-5">
            <button className="text-gray-900 border-black pb-1">
              Manually
            </button>
            <button className="text-gray-900 border-black pb-1">
              Import CSV
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                placeholder="Enter name"
                name="name"
                value={inputValue.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                  placeholder="example@email.com"
                  name="email"
                  value={inputValue.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Class
                </label>
                <select
                  name="classAssigned"
                  value={inputValue.classAssigned}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 outline-none"
                >
                 <option value="">Select Class</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={inputValue.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                  placeholder="Enter password"
                  name="password"
                  value={inputValue.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                  placeholder="Enter phone number"
                  name="phone"
                  value={inputValue.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-10 gap-12">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <span className="text-xl mr-1">＋</span> Add another
            </button>
            <button
              disabled={!isFormValid()}
              onClick={handleAddStudent}
              className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition"
            >
              Add Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent