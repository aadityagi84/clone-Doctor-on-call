import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("username"));

    if (
      loggeduser &&
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedIn", true);
      window.location.reload("/");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="w-full sm:w-[90%] lg:w-[50%] mx-auto mt-8 sm:mt-12 lg:mt-20   border flex flex-wrap gap-2 rounded shadow-lg bg-gradient-to-br from-white to-gray-200 shadow-inset">
        <div className="w-full  mt-8 md:mt-12">
          <form className="p-4" onSubmit={handleLogin}>
            <div className="flex border w-full sm:w-[350px] h-[40px] justify-center items-center m-2 mx-auto rounded">
              <input
                value={input.email}
                name="email"
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none p-2 bg-transparent"
              />
              <i className="fa-solid fa-envelope mr-2 text-2xl text-[#3B82F6]"></i>
            </div>
            <div className="flex border w-full sm:w-[350px] h-[40px] justify-between items-center m-2 mx-auto rounded">
              <input
                value={input.password}
                name="password"
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Enter your Password"
                type={showPassword ? "text" : "password"}
                className="w-full focus:outline-none p-2 bg-transparent"
              />

              <span
                className="flex items-center mx-auto"
                onClick={handleToggle}
              >
                <i
                  className={`fa-solid fa-eye${
                    showPassword ? "" : "-slash"
                  } mr-2 text-xl text-[#3B82F6]`}
                />
              </span>
            </div>

            <span className="mx-[300px] text-[blue] mb-4 sm:mb-6">
              <Link to="#">Forgot your password?</Link>
            </span>
            <br />
            <div className="mx-auto">
              <button
                className="w-full sm:w-[350px]  mx-72 sm:my-6  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full sm:w-[90%] lg:w-[50%] mx-auto   mb-8 sm:mb-12 lg:mb-20 flex flex-wrap gap-2 rounded  shadow-lg bg-gradient-to-br from-white to-gray-200 shadow-inset">
        <div className="w-full bg-blue-500 rounded-sm p-4 md:p-8">
          <h1 className="text-center text-3xl mb-4 mt-[5.5rem] text-white">
            Welcome User! <br />
            {/* <span className="text-xl text-white">
              {" "}
              if your dn't have account please create firstly{" "}
            </span> */}
            <br />
            <Link to="/signup">
              <button
                className="border border-white w-[100px] text-center mt-8 rounded-3xl text-white text-[18px] font-semibold hover:bg-white hover:text-blue-500 duration-700"
                onClick={handleClick}
              >
                Sign up
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Login;
