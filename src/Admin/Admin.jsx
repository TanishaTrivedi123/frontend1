import React, { useRef, useState } from "react";
import styles from "../Admin/Admin.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Admin = () => {
  const [showP, setShowp] = useState(false);
  const SecretKeyRef = useRef();
  const navigate = useNavigate(); // ✅ Initialize navigate

  const passwordHandler = () => {
    setShowp((prev) => !prev);
  };

  const onSecretKeyHandler = async (event) => {
    event.preventDefault();
    const secretKey = SecretKeyRef.current.value.trim();

    if (!secretKey) {
      toast.warning("Please enter the secret key! ⚠️");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/verify-admin", {
        secretKey: secretKey,
      });

      if (response.data.success) {
        toast.success("Welcome to the authorized panel! 🚀");

        const expireTime = new Date().getTime() + 5 * 60 * 1000;
        // ✅ Save admin authentication status
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("expireTime", expireTime);

        // ✅ Redirect to EnterPage
        navigate("/EnterPage");
      } else {
        toast.error("Invalid key entered! ❌");
      }
    } catch (error) {
      console.error("Error verifying secret key:", error);
      toast.error("Server error! Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={onSecretKeyHandler}>
        <div className={styles.adminContainer}>
          <h3>Enter the Secret Key</h3>

          <div className={styles.inputContainer}>
            <input
              ref={SecretKeyRef}
              type={showP ? "text" : "password"}
              placeholder="Enter the secret key"
            />
            {showP ? (
              <FaEyeSlash onClick={passwordHandler} className={styles.icons} />
            ) : (
              <FaEye onClick={passwordHandler} className={styles.icons} />
            )}
          </div>

          <button className="font-inter" type="submit">
            Enter
          </button>
        </div>
      </form>
    </>
  );
};

export default Admin;
