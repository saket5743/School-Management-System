import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SchoolLogin = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({email:'', password:''});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({ ...inputValue, [name]: value }));
    };

    const handleLogin = () => {
      const storedUser = JSON.parse(localStorage.getItem('schoolAccount'));
      
      if(storedUser && storedUser.email === inputValue.email && storedUser.password === inputValue.password){
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      }else{
        alert('Invalid email or password')
      }
    }

  return (
    <div className='flex flex-col items-center py-16 h-[695px] gap-12'>
        <div className='w-[656px] h-[45px] flex justify-center text-[#4F4F4F] text-3xl font-semibold'>
            Welcome, Log into your account
        </div>

        <div className='w-[512px] h-[494px] flex flex-col items-center gap-10'>
           <div className='w-[238px] h-[58px] text-sm text-[#667085] flex flex-col justify-center items-center mt-16 text-center'>
              It is our great pleasure to have <br />
              you on board!
           </div>

           <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-5'>
                <input type="email" name='email' value={inputValue.email} onChange={handleChange} placeholder='Enter the email of school' className='h-[40px] border-[2px] px-2 outline-none' />
                <input type="password" name='password' value={inputValue.password} onChange={handleChange} placeholder='Enter the password of email' className='h-[40px] border-[2px] px-2 outline-none' />
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={handleLogin} className='w-[248px] h-[42px] rounded-[4px] border-[#A7A7A7] bg-[#2D88D4] text-white'>Next</button>
                <div className='w-[250px] h-[31px] text-[#667085] text-xs flex justify-center items-center'>
                  <p>Create an account?</p>
                  <a href="/schoolaccount" className='text-[#2D88D4] font-semibold'>Sign up</a>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default SchoolLogin