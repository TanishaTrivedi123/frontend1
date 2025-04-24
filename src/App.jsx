// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TeamMembers from "./pages/TeamMembers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useLoader from "./hooks/useLoader";
import Loader from "./components/Loader/Loader";
import ContactPage from "./pages/ContactPage"; // <- your separate contact route
import UpcomingEvent from "./components/UpcomingEvent";
import AddUpcomingEvent from "./AdminAuthorized/AddUpcomingEvent";
import { ToastContainer } from "react-toastify";
import Event from "./pages/Event";
import Admin from "./Admin/Admin";
import ProtectedRoute from "./ProtectedRoute";
import EnterPage from "./AdminAuthorized/EnterPage";
import AddEventPhoto from "./AdminAuthorized/AddEvent/AddEventPhoto";
import ContactPageData from "./AdminAuthorized/ContactPageData";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation(); // detect route changes
  const { loading, showLoader, hideLoader, isAnimatingOut } = useLoader();

  // ✅ Trigger loader on every route change
  useEffect(() => {
    showLoader(); // animate loader in
    const timeout = setTimeout(() => {
      hideLoader(); // hide loader after animation
    }, 1200); // duration should match your loader's animation time

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader isAnimatingOut={isAnimatingOut} />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Event />} />
            <Route path="/team-members" element={<TeamMembers />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/upcoming" element={<UpcomingEvent />} />
            <Route path="/registration-form" element={<RegistrationForm />} />

            {/* this the backend admin part which i set here ok */}
            <Route path="/admin" element={<Admin />} />
            {/* Protected Route ok */}
            <Route
              path="/EnterPage"
              element={<ProtectedRoute element={<EnterPage />} />}
            />
            <Route
              path="/AddEventPhoto"
              element={<ProtectedRoute element={<AddEventPhoto />} />}
            />
            <Route
              path="/AddUpComingEvent"
              element={<ProtectedRoute element={<AddUpcomingEvent />} />}
            />
            <Route
              path="/ContactPageData"
              element={<ProtectedRoute element={<ContactPageData />} />}
            />
          </Routes>
          <Footer />
        </>
      )}

      {/* ✅ Always render this outside loading check */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
