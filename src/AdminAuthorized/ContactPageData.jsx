import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactPageData = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/contact-data");
        setContactData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contact data:", err);
        setError("Failed to load contact submissions");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-indigo-700 to-gray-800 pt-20 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg mt-6">
        <div className="p-5 sm:p-6">
          <h2 className="text-2xl font-semibold text-black mb-6 text-center">
            <span className="text-blue-600 font-poppins">
              Contact Form Submissions
            </span>
          </h2>

          {loading ? (
            <div className="flex justify-center items-center gap-3 py-12 text-center">
              <FaSpinner className="animate-spin text-2xl text-blue-600" />
              <span className="text-gray-700">Loading data...</span>
            </div>
          ) : error ? (
            <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 text-red-700 rounded-lg justify-center text-center">
              <FaExclamationTriangle className="text-red-400" />
              <span>{error}</span>
            </div>
          ) : contactData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-center">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider border-b border-white/10">
                      <div className="flex justify-center items-center gap-2 font-inter">
                        <FaUser className="text-white" />
                        <span>Name</span>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider border-b border-white/10">
                      <div className="flex justify-center items-center gap-2">
                        <FaEnvelope className="text-white" />
                        <span>Email</span>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider border-b border-white/10">
                      <div className="flex justify-center items-center gap-2">
                        <FaComment className="text-white" />
                        <span>Message</span>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider border-b border-white/10">
                      <div className="flex justify-center items-center gap-2">
                        <FaCalendarAlt className="text-white" />
                        <span>Date</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contactData.map((entry) => (
                    <tr
                      key={entry._id}
                      className="hover:bg-blue-100 transition-colors font-inter"
                    >
                      <td className="px-4 py-4 border-b border-gray-200 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <FaUser className="text-blue-600" />
                          <span className="text-sm font-medium text-black">
                            {entry.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 border-b border-gray-200 text-center">
                        <a
                          href={`mailto:${entry.email}`}
                          className="text-sm text-blue-600 hover:text-blue-500 hover:underline flex justify-center items-center gap-2"
                        >
                          <FaEnvelope className="text-blue-600" />
                          {entry.email}
                        </a>
                      </td>
                      <td className="px-4 py-4 border-b border-gray-200 text-center">
                        <p className="text-sm text-gray-700">{entry.message}</p>
                      </td>
                      <td className="px-4 py-4 border-b border-gray-200 text-center">
                        <div className="flex justify-center items-center gap-2">
                          <FaCalendarAlt className="text-blue-600" />
                          <span className="text-sm text-gray-600">
                            {formatDate(entry.createdAt || entry.date)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center bg-gray-200 rounded-lg border border-dashed border-gray-300">
              <div className="flex flex-col items-center justify-center">
                <FaEnvelope className="text-3xl text-blue-600 mb-3" />
                <h3 className="text-lg font-medium text-black">
                  No submissions yet
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Your contact form submissions will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPageData;
