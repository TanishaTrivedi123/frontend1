import React, { useEffect } from "react";
import styles from "../AdminAuthorized/EnterPage.module.css";
import { useNavigate } from "react-router-dom";

const EnterPage = () => {
  const navigate = useNavigate();

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
    <div>
      <div className={styles.enterPage}>
        <button onClick={() => navigate("/AddUpComingEvent")}>
          Add Upcoming Event
        </button>
        <button onClick={() => navigate("/AddEventPhoto")}>
          Add Event Photo
        </button>
        <button onClick={() => navigate("/ContactPageData")}>Get Data</button>
      </div>
    </div>
  );
};

export default EnterPage;
