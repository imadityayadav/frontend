import { useState } from "react";
import logo from '../components/assets/logo.png';
import signupImg from '../components/assets/loginimg.png';
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., dispatch a signup action)
  };

  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='w-full md:w-1/2'>
        <img src={signupImg} alt="Signup" className='w-full h-auto' />
      </div>

      <div className='w-full md:w-1/2 flex flex-col mt-[40px] md:mt-[100px] px-5 md:pl-[170px]'>
        <div className="flex gap-[20px] mb-8">
          <img className="w-[42px]" src={logo} alt="Logo" />
          <p className="font-bold text-[#32475CDE] text-[30px]">Shopper's Stop</p>
        </div>

        <p className="font-semibold text-[#32475CDE] text-[20px]">Create Your Account</p>
        <p className="mt-2 leading-normal text-[#32475C99]">Join us and start shopping!</p>

        <form className="mt-6 flex w-full flex-col gap-y-4" onSubmit={handleOnSubmit}>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] text-[#067df4]">
              Email Address <sup className="text-[#067df4]">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] text-[#067df4]">
              Password <sup className="text-[#067df4]">*</sup>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] text-[#067df4]">
              Confirm Password <sup className="text-[#067df4]">*</sup>
            </p>
            <input
              required
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-[8px] bg-[#399bfd] py-[8px] px-[12px] font-medium text-white"
          >
            Sign Up
          </button>
        </form>

        <div className="flex text-[14px] mt-4">
          <p className="text-[#32475C99]">Already have an account? &nbsp;</p>
          <Link to="/login">
            <span className="text-[#067df4] cursor-pointer">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;