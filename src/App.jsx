import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Sign up& in/Login";
// import Auth from "./components/Auth Services/Auth";
import SignUp from "./components/Sign up& in/SignUp";
import ProtectRoutes from "./components/Auth Services/ProtectRoutes";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import OurServices from "./components/Services/OurServices";
import SharedLayout from "./components/shared/SharedLayout";
import Contact from "./components/contact/Contact";
import Doctor from "./components/Doctor/Doctor";
import Patient from "./components/patient/Patient";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ProtectRoutes />}>
          <Route path="/" element={<SharedLayout />} />
        </Route> */}

        <Route element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<OurServices />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="patients" element={<Patient />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1 className="text-center text-8xl mt-60 text-red-600">
                <span className="text-blue-600 ">Page not found.... </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :)
              </h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
