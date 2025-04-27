import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaComment, FaCalendarAlt } from "react-icons/fa";

const ContactPageData = () => {
  const navigate = useNavigate();

  const { name, email, message } = useSelector(
    (state) => state.contact.contactData
  );
  // 👆 Sirf contactData ke andar se name, email, message nikaal rahe hai

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    const expireTime = localStorage.getItem("expireTime");
    const currentTime = new Date().getTime();

    if (admin !== "true" || !expireTime || currentTime > parseInt(expireTime)) {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("expireTime");
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-indigo-700 to-gray-800 pt-20 pb-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg mt-6">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-black mb-6 text-center">
            <span className="text-blue-600 font-poppins">
              Contact Form Submission
            </span>
          </h2>

          {name || email || message ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaUser className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-black">Name</h4>
                  <p className="text-gray-700">{name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-black">Email</h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaComment className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-black">Message</h4>
                  <p className="text-gray-700">{message}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-black">
                    Submitted On
                  </h4>
                  <p className="text-gray-700">{new Date().toLocaleString()}</p>
                  {/* 👆 Kyunki abhi createdAt nahi mil raha, isliye current time show kar diya */}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-6 bg-gray-200 rounded-lg border border-dashed border-gray-400">
              <FaEnvelope className="text-4xl text-blue-600 mb-3 mx-auto" />
              <h3 className="text-lg font-medium text-black">
                No submission available
              </h3>
              <p className="text-sm text-gray-600">
                Fill the contact form to see the data here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPageData;
