import { useSelector } from "react-redux";
import { useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const RegistrationForm = () => {
  const { upcomingEvent } = useSelector((state) => state.upcomingEvent);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const collegeRef = useRef();
  const branchRef = useRef();
  const teaminfoRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const collegeName = collegeRef.current.value;
    const branch = branchRef.current.value;
    const teamName = teaminfoRef.current.value;

    try {
      if (!name || !email || !phone || !collegeName || !branch) {
        return toast.error("All required fields must be filled");
      }

      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        phone,
        collegeName,
        branch,
        teamName,
      });

      if (response.data.success) {
        toast.success("Your response has been recorded");
      }
    } catch (error) {
      toast.error("Try later");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-400 mb-3">
            {upcomingEvent.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {upcomingEvent.description}
          </p>
        </div>

        {/* Registration Form - White Professional Style */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
              <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
                Registration Form
              </h2>
              <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
            </div>

            <form onSubmit={submitHandler} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      ref={nameRef}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      ref={emailRef}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      ref={phoneRef}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="college"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      College/University *
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      ref={collegeRef}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                      placeholder="Your institution name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="branch"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Branch/Department *
                    </label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      ref={branchRef}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                      placeholder="Computer Science"
                    />
                  </div>
                </div>
              </div>

              {/* Team Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                  Team Information
                </h3>

                <div>
                  <label
                    htmlFor="teamName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Team Name (if applicable)
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    ref={teaminfoRef}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                    placeholder="Team Innovators"
                  />
                </div>

                <div>
                  <label
                    htmlFor="teamMembers"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Team Members (comma separated emails)
                  </label>
                  <textarea
                    id="teamMembers"
                    name="teamMembers"
                    rows={2}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                    placeholder="member1@example.com, member2@example.com"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                  Additional Information
                </h3>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Previous Hackathon Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                    placeholder="Briefly describe your experience with hackathons"
                  />
                </div>

                <div>
                  <label
                    htmlFor="skills"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Skills/Technologies
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
                    placeholder="e.g., React, Node.js, Python, ML"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      terms and conditions
                    </a>{" "}
                    *
                  </label>
                </div>
              </div>

              <div>
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150">
                  Register for Hackathon
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Have questions? Contact us at{" "}
            <a
              href="mailto:contact@hackthefuture.dev"
              className="text-indigo-400 hover:text-indigo-300"
            >
              contact@hackthefuture.dev
            </a>
          </p>
          <p className="mt-1">Registration closes on October 30, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
