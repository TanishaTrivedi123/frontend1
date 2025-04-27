import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ContactPageData = () => {
  const navigate = useNavigate();
  const contactData = useSelector((state) => state.contact.contactData);

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
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg mt-6 p-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600 font-poppins">
          Contact Form Submissions
        </h2>

        {Array.isArray(contactData) && contactData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b-2 text-left">Name</th>
                  <th className="py-3 px-4 border-b-2 text-left">Email</th>
                  <th className="py-3 px-4 border-b-2 text-left">Message</th>
                  <th className="py-3 px-4 border-b-2 text-left">
                    Submitted On
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">{data.name}</td>
                    <td className="py-3 px-4 border-b">
                      <a
                        href={`mailto:${data.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {data.email}
                      </a>
                    </td>
                    <td className="py-3 px-4 border-b">{data.message}</td>
                    <td className="py-3 px-4 border-b">
                      {/* Ensure data.submittedOn is in a valid timestamp format */}
                      {data.submittedOn
                        ? new Date(data.submittedOn).toLocaleString()
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center p-6 bg-gray-200 rounded-lg border border-dashed border-gray-400">
            <FaEnvelope className="text-4xl text-blue-600 mb-3 mx-auto" />
            <h3 className="text-lg font-medium text-black">
              No submissions yet
            </h3>
            <p className="text-sm text-gray-600">
              Fill the contact form to see data here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPageData;
