import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SchoolAccount = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({admin:'', school:'', email:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddSchool = () => {
    const { admin, school, email } = inputValue;

    if (admin && school && email) {
      localStorage.setItem("schoolAccount", JSON.stringify(inputValue));
      navigate("/schoolpassword");
    } else {
      alert("Please field all the fields.");
    }
  };

  return (
    <div className='flex flex-col items-center py-16 h-[695px] gap-12'>
        <div className='w-[656px] h-[45px] flex justify-center text-[#4F4F4F] text-3xl font-semibold'>
            Welcome, Create your school account
        </div>

        <div className='w-[512px] h-[494px] flex flex-col items-center gap-10'>
           <div className='w-[238px] h-[58px] text-sm text-[#667085] flex flex-col justify-center items-center mt-16 text-center'>
              It is our great pleasure to have <br />
              you on board!
           </div>

           <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-5'>
                <input type="text" placeholder='Enter the name of admin' name='admin' value={inputValue.admin} onChange={handleChange} className='h-[40px] border-[2px] px-2 outline-none' />
                <input type="text" placeholder='Enter the name of school' name='school' value={inputValue.school} onChange={handleChange} className='h-[40px] border-[2px] px-2 outline-none' />
                <input type="email" placeholder='Enter the school of email' name='email' value={inputValue.email} onChange={handleChange} className='h-[40px] border-[2px] px-2 outline-none' />
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={handleAddSchool} className='w-[248px] h-[42px] rounded-[4px] border-[#A7A7A7] bg-[#2D88D4] text-white'>Next</button>
                <div className='w-[250px] h-[31px] text-[#667085] text-xs flex justify-center items-center'>
                  <p>Already have an account?</p>
                  <a href="/schoollogin" className='text-[#2D88D4] font-semibold'>Sign in</a>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default SchoolAccount