import { useRef, useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Link, NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", JSON.stringify(input));
    navigate("/login");
  };

  const handleRoleChange = (e) => {
    setInput({
      ...input,
      role: e.target.value,
    });
  };
  return (
    <>
      <div data-aos="fade-down">
        <div className="w-full sm:w-[90%] lg:w-[50%] mx-auto mt-8 sm:mt-12 lg:mt-20   flex flex-wrap gap-2 rounded  shadow-lg bg-gradient-to-br from-white to-gray-200 shadow-inset">
          <div className="w-full bg-blue-500 rounded-sm p-4 md:p-8">
            <h1 className="text-center text-3xl mb-4 mt-[5.5rem] text-white">
              Welcome User! <br />
              <span className="text-xl text-white">
                If you have already account click on login button ! ...
              </span>
              <br />
              <Link to="/login">
                <button className="border border-white w-[100px] text-center mt-8 rounded-3xl text-white text-[18px] font-semibold hover:bg-white hover:text-blue-500 duration-700">
                  Log In
                </button>
              </Link>
            </h1>
          </div>
        </div>

        <div className="w-full sm:w-[90%] lg:w-[50%] mx-auto  mb-8 sm:mb-12 lg:mb-20 border flex flex-wrap gap-2 rounded shadow-lg bg-gradient-to-br from-white to-gray-200 shadow-inset">
          <div className="w-full  mt-8 md:mt-12">
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="flex border w-full sm:w-[350px] h-[40px] justify-center items-center m-2 mx-auto rounded">
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter Your Name"
                  className="w-full focus:outline-none p-2 bg-transparent"
                  required
                />
                <i className="fa-solid fa-user mr-2 text-2xl text-[#3B82F6]"></i>
              </div>
              <div className="flex border w-full sm:w-[350px] h-[40px] justify-center items-center m-2 mx-auto rounded">
                <input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  placeholder="Email"
                  className="w-full focus:outline-none p-2 bg-transparent"
                />
                <i className="fa-solid fa-envelope mr-2 text-2xl text-[#3B82F6]"></i>
              </div>
              <div className="flex border w-full sm:w-[350px] h-[40px] justify-between items-center m-2 mx-auto rounded">
                <input
                  placeholder="Enter your Password"
                  type={showPassword ? "text" : "password"}
                  value={input.password}
                  name="password"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
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
              <div className="flex border w-full sm:w-[350px] h-[40px] justify-between items-center m-2 mx-auto rounded">
                <select
                  className="block appearance-none mx-auto outline-none w-full bg-transparent px-4 py-2 focus:outline-none"
                  value={input.role}
                  onChange={handleRoleChange}
                >
                  <option value="">---</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </select>
                <i className="fa-solid fa-caret-down text-xl text-[#3B82F6] mr-2"></i>
              </div>
              <br />
              <div className="mx-auto">
                <button
                  className="w-full sm:w-[350px] my-4 mx-72 sm:my-6  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  type="submit"
                >
                  SignIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
