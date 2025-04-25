import React, { useRef, useState, useEffect } from "react";
import styles from "../AddEvent/AddEventPhoto.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/EventSlice";
import { useNavigate } from "react-router-dom";

const AddEventPhoto = () => {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate(); // ✅ FIXED here

  const inputDateRef = useRef();
  const inputDesRef = useRef();
  const titleRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
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

  const handleImageClick = () => {
    imgRef.current.click();
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const date = inputDateRef.current.value;
    const description = inputDesRef.current.value;

    if (!title || !date || !description || !image) {
      toast.error("All fields are required");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", image);

    try {
      // Make API request to the backend
      const response = await axios.post(
        "https://backend-ebon-theta-80.vercel.app/addevent", // Replace with your backend URL
        formData,
        { headers: { "Content-Type": "multipart/form-data" } } // Ensure correct header for file upload
      );
      console.log("Event added:", response.data);
      toast.success("Event added successfully!");
      dispatch(addEvent(response.data.event)); // Optionally dispatch to Redux store if needed
    } catch (error) {
      // ✅ Log detailed Axios error
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      toast.error("Failed to add event. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.imageInput}>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={imgRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          <img
            src={previewUrl || "dummy.jpg"}
            alt="Uploaded"
            onClick={handleImageClick}
            className={styles.imagePreview}
          />

          <p className={styles.clickText}>Click image to upload</p>
        </div>

        <div className={styles.content}>
          <input type="text" placeholder="Enter the title" ref={titleRef} />
          <input type="date" ref={inputDateRef} />
          <textarea placeholder="Enter the description" ref={inputDesRef} />
          <button type="submit">Add Event</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventPhoto;
