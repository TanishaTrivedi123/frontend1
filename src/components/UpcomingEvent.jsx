import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteUpcomingEvent } from "../store/AddEventSlice";

const UpcomingEvent = ({ onClose }) => {
  const { upcomingEvent } = useSelector((state) => state.upcomingEvent);
  const [clickRegister, setClickRegister] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickRegister = () => {
    setClickRegister(true);
    navigate("/registration-form");
  };

  const deleteHandlerClick = () => {
    dispatch(deleteUpcomingEvent());
  };

  const hasEvent =
    upcomingEvent?.title?.trim() || upcomingEvent?.description?.trim();

  const admin = localStorage.getItem("isAdmin") === "true";

  return (
    <div className="relative top-0 right-0 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.5,
        }}
        className="bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] border border-purple-600 rounded-3xl p-8 sm:p-10 text-center shadow-2xl w-[90%] sm:w-[450px] relative"
      >
        {/* 🔴 Your original separation div — preserved exactly */}
        <div className="relative top-0 right-0">
          {admin && hasEvent && (
            <MdDelete
              onClick={deleteHandlerClick}
              className="bg-white absolute right-3 top-3 size-5 cursor-pointer z-50"
            />
          )}

          {/* Event Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 font-poppins animate-pulse">
            {upcomingEvent?.title
              ? `${upcomingEvent.title} 🚀`
              : "🚀 Event Coming Soon!"}
          </h1>

          {/* Event Description */}
          <p className="text-sm sm:text-base text-gray-300 mb-8 font-inter leading-relaxed">
            {upcomingEvent?.description
              ? upcomingEvent.description
              : "Stay tuned for our upcoming tech event! It’s going to be packed with innovation, coding, and creativity."}
          </p>

          {/* 🟣 Register Button */}
          {hasEvent && (
            <button
              onClick={handleClickRegister}
              className="bg-purple-600 hover:bg-transparent hover:border-purple-400 hover:text-purple-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 border-2 border-transparent hover:shadow-purple-500/30 font-poppins"
            >
              Register
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UpcomingEvent;
