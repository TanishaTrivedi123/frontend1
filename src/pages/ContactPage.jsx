import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addContactData } from "../store/ContactSlice";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContactPage = () => {
  const dispatch = useDispatch();
  const headingRef = useRef();
  const subTextRef = useRef();
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      x: -40,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(subTextRef.current, {
      opacity: 0,
      x: -40,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(formRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay: 0.4,
    });
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      return toast.error("All fields are required");
    }

    // Dispatch the action to add contact data to Redux store
    dispatch(addContactData({ name, email, message }));

    // Clear the form after submission
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    // Show success toast
    toast.success("Your response is saved");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1a1a1a] text-white pt-24 px-6 sm:px-12 font-inter overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-16 mb-20">
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-poppins mb-4"
          >
            Let’s Collaborate & Build Something Great
          </h1>
          <p
            ref={subTextRef}
            className="text-lg sm:text-xl text-gray-300 mt-4 font-inter"
          >
            Have an idea, query, or want to team up? Reach out and let’s turn
            ideas into innovation.
          </p>
        </div>

        {/* Right Section - Custom Form */}
        <div
          ref={formRef}
          className="w-full max-w-md backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl px-6 py-8 sm:p-10 font-inter"
        >
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm mb-2 font-semibold">
                Full Name
              </label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-semibold">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-semibold">
                Message
              </label>
              <textarea
                ref={messageRef}
                rows="4"
                placeholder="Let's talk about your project or idea..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 hover:from-green-400 hover:to-cyan-400 transition-all duration-300 font-bold text-white text-lg shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
