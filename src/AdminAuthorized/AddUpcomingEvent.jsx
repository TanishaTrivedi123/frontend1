import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpcomingEvent } from "../store/AddEventSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddUpcomingEvent = () => {
  const titleRef = useRef();
  const desRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const description = desRef.current.value.trim();

    if (!title || !description) {
      toast.error("⚠️ Please fill in both fields!");
      return;
    }

    dispatch(setUpcomingEvent({ title, description }));
    titleRef.current.value = "";
    desRef.current.value = "";

    toast.success("🎉 Event successfully added!");
    navigate("/");
  };

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    const expireTime = localStorage.getItem("expireTime");
    const currentTime = new Date().getTime();

    if (admin !== "true" || !expireTime || currentTime > parseInt(expireTime)) {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("expireTime");
      navigate("/admin"); // 🔐 Redirect to login if expired
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#121212] to-[#1f1f1f] px-4">
      <form
        onSubmit={onSubmit}
        className="bg-[#1a1a1a] border border-purple-600 rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl text-white font-inter space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-poppins">
          Add Upcoming Event 🚀
        </h2>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-300 font-inter">Title</label>
          <input
            ref={titleRef}
            type="text"
            placeholder="Enter the title"
            className="bg-[#2a2a2a] text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-300 font-inter">
            Description
          </label>
          <input
            ref={desRef}
            type="text"
            placeholder="Enter the description"
            className="bg-[#2a2a2a] text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-transparent hover:border-purple-500 hover:text-purple-400 border-2 border-transparent text-white py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:shadow-purple-500/20 font-poppins"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddUpcomingEvent;
