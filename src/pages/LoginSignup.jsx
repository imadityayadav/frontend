import { useState } from "react"
import loginimg from '../components/assets/loginimg.png'
import logo from '../components/assets/logo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import fb from "../components/assets/facebook.png"
import google from "../components/assets/google.png"
import github from "../components/assets/github.png"
import twitter from "../components/assets/twitter.png"

const LoginSignup = () => {

  // const navigate = useNavigate()
  //   const dispatch = useDispatch()
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   })
  
    const [showPassword, setShowPassword] = useState(false)
  
    // const { email, password } = formData
  
    // const handleOnChange = (e) => {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [e.target.name]: e.target.value,
    //   }))
    // }
  
    // const handleOnSubmit = (e) => {
    //   e.preventDefault()
    //   dispatch(login(email, password, navigate))
    // }

    const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };
  
  return (
    <div className='w-full flex flex-row'>
      <div className='w-[50%]'>
        <img src={loginimg} alt="" />
      </div>

      <div className='w-[50%] flex flex-col mt-[100px] pl-[170px]'>
        <div className="flex gap-[20px]">
          <img className="w-[42px]" src={logo} alt="" />
          <p className="font-bold text-[#32475CDE] text-[30px]">Shopper's Stop</p>
        </div>

        <div className="flex">
          <p className="pt-[40px] font-semibold text-[#32475CDE] text-[20px]">Welcome to Shopper's Stop!</p>
          <span className="text-[30px] mt-[30px]">👋🏻</span>
          
        </div>

        <div>
          <p className="mt-[10px] leading-normal text-[1rem] text-[#32475C99]">Please sign-in to your account and start <br />the bagging</p>
        </div>

      
        
        <form
        // onSubmit={handleOnSubmit}
        className="mt-6 flex w-full flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#067df4]">
            Email Address <sup className="text-[#067df4]">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            // value={email}
            // onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
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
            // value={password}
            // onChange={handleOnChange}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-[400px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"

            
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute ml-[-30px] top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          
          <Link to="/forgot-password">
            <p className="mt-[12px] ml-[295px]  text-[14px] text-[#067df4]">
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
          className="mt-6 w-[400px] rounded-[8px] bg-[#399bfd] py-[8px] px-[12px] font-medium text-white"
        >
          Sign In
        </button>
      </form>

      <div className="flex text-[14px] pl-[55px] mt-[25px]">
        
        <p className="text-[#32475C99]">New on our platform? &nbsp;</p>
        <Link to="/signup">
        <span className="text-[#067df4] cursor-pointer">Create an account </span>
        </Link>
      </div>

       
      <div className="flex ">
      <div className="w-[190px] h-[1px] bg-[#57697b99] mt-[25px] "></div>
      <p className="mt-[12px] text-[#57697b99] ">&nbsp;or&nbsp;</p>
      <div className="w-[190px] h-[1px] bg-[#57697b99] mt-[25px] "></div>
      </div>

      <div className="flex gap-[30px] mt-[20px] pl-[115px] mb-[20px] cursor-pointer">
          <Link to='https://www.facebook.com/'>
          <img className="w-[20px]" src={fb} alt="" />
          </Link>
          <Link to='https://www.google.com/'>
          <img className="w-[20px]" src={google} alt="" />
          </Link>
          <Link to='https://www.twitter.com/'>
          <img className="w-[20px]" src={twitter} alt="" />
          </Link>
          <Link to='https://www.github.com/'>
          <img className="w-[20px]" src={github} alt="" />
          </Link>
          
          
          
          
          
      </div>
      

      </div>
    </div>
  )
}

export default LoginSignup
