import { useState } from "react";
import loginimg from '../components/assets/loginimg.png'
import logo from '../components/assets/logo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import fb from "../components/assets/facebook.png"
import google from "../components/assets/google.png"
import github from "../components/assets/github.png"
import twitter from "../components/assets/twitter.png"

const LoginSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
    otpPhone: "",
    otpEmail: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGetOtp = (type) => {
    if (type === "phone") {
      if (formData.phone.length === 10) {
        setFormData((prevData) => ({
          ...prevData,
          otpPhone: "1234", // Replace with actual OTP from API
        }));
      } else {
        alert("Please enter a valid phone number");
      }
    } else if (type === "email") {
      if (formData.email.includes("@")) {
        setFormData((prevData) => ({
          ...prevData,
          otpEmail: "1234", // Replace with actual OTP from API
        }));
      } else {
        alert("Please enter a valid email address");
      }
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Call API to create new user
    // For now, just redirect to app.jsx
    navigate("/app");
  };

  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='w-full md:w-1/2'>
        <img src={loginimg} alt="Login" className='w-full h-auto' />
      </div>

      <div className='w-full md:w-1/2 flex flex-col mt-[40px] md:mt-[100px] px-5 md:pl-[170px]'>
        <div className="flex gap-[20px]">
          <img className="w-[42px]" src={logo} alt="Logo" />
          <p className="font-bold text-[#32475CDE] text-[30px]">Shopper's Stop</p>
        </div>

        <div className="flex">
          <p className="pt-[40px] font-semibold text-[#32475CDE] text-[20px]">Welcome to Shopper's Stop!</p>
          <span className="text-[30px] mt-[30px]">👋🏻</span>
        </div>

        <div>
          <p className="mt-[10px] leading-normal text-[1rem] text-[#32475C99]">Please sign-in to your account and start <br /> the bagging</p>
        </div>

        {isSignup ? (
          <form className="mt-6 flex w-full flex-col gap-y-4" onSubmit={handleSignup}>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Name <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
                placeholder="Enter name"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Phone <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type="text"
                name="phone"
                value={ formData.phone}
                onChange={handleOnChange}
                placeholder="Enter phone number"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <button
                type="button"
                onClick={() => handleGetOtp("phone")}
                className="ml-2 bg-[#399bfd] py-[8px] px-[12px] font-medium text-white"
              >
                Get OTP
              </button>
              {formData.otpPhone && (
                <input
                  required
                  type="text"
                  name="otpPhone"
                  value={formData.otpPhone}
                  onChange={handleOnChange}
                  placeholder="Enter OTP"
                  className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 mt-2"
                />
              )}
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Email Address <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <button
                type="button"
                onClick={() => handleGetOtp("email")}
                className="ml-2 bg-[#399bfd] py-[8px] px-[12px] font-medium text-white"
              >
                Get OTP
              </button>
              {formData.otpEmail && (
                <input
                  required
                  type="text"
                  name="otpEmail"
                  value={formData.otpEmail}
                  onChange={handleOnChange}
                  placeholder="Enter OTP"
                  className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 mt-2"
                />
              )}
            </label>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Password <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
              />
              <span
                onClick={handleShowPassword}
                className="absolute ml-[-30px] top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Re-enter Password <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleOnChange}
                placeholder="Re-enter Password"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full md:w-[400px] rounded-[8px] bg-[#399bfd] py-[8px] px-[12px] font-medium text-white"
            >
              Sign Up
            </button>
            <div className="flex text-[14px] pl-[5px] md:pl-[55px] mt-[25px]">
              <p className="text-[#32475C99]">Already have an account? &nbsp;</p>
              <button onClick={() => setIsSignup(false)} className="text-[#067df4] cursor-pointer">
                Sign In
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-6 flex w-full flex-col gap-y-4">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Email Address <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                placeholder="Enter email address"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
                Password <sup className="text-[#067df4]">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className="w-full md:w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
              />
              <span
                onClick={handleShowPassword}
                className="absolute ml-[-30px] top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              <Link to="/forgot-password">
                <p className="mt-[12px] ml-[295px] text-[14px] text-[#067df4]">
                  Forgot Password?
                </p>
              </Link>
              <div className="w-[150px] mt-[-20px] text-[15px] text-[#32475C99]">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  &nbsp; Remember me
                </label>
              </div>
            </label>
            <button
              type="submit"
              className="mt-6 w-full md:w-[400px] rounded-[8px] bg-[#399bfd] py-[8px] px-[12px] font-medium text-white"
            >
              Sign In
            </button>
            <div className="flex text-[14px] pl-[5px] md:pl-[55px] mt-[25px]">
              <p className="text-[#32475C99]">Don't have an account? &nbsp;</p>
              <button onClick={() => setIsSignup(true)} className="text-[#067df4] cursor-pointer">
                Create an account
              </button>
            </div>
          </form>
        )}
        <div className="flex ">
          <div className="w-[190px] h-[1px] bg-[#57697b99] mt-[25px] "></div>
          <p className="mt-[12px] text-[#57697b99] ">&nbsp;or&nbsp;</p>
          <div className="w-[190px] h-[1px] bg-[#57697b99] mt-[25px] "></div>
        </div>

        <div className="flex gap-[30px] mt-[20px] pl-[115px] mb-[20px] cursor-pointer">
          <Link to='https://www.facebook.com/'>
            <img className="w-[20px]" src={fb} alt="Facebook" />
          </Link>
          <Link to='https://www.google.com/'>
            <img className="w-[20px]" src={google} alt="Google" />
          </Link>
          <Link to='https://www.twitter.com/'>
            <img className="w-[20px]" src={twitter} alt="Twitter" />
          </Link>
          <Link to='https://www.github.com/'>
            <img className="w-[20px]" src={github} alt="Github" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;