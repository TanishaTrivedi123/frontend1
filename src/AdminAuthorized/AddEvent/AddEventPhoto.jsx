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

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/addevent",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Successfully added on the page");

        const savedEvent = response.data.event;
        dispatch(addEvent(savedEvent));

        // ✅ Clear all inputs and preview
        titleRef.current.value = "";
        inputDateRef.current.value = "";
        inputDesRef.current.value = "";
        setImage(null);
        setPreviewUrl(null);

        // ✅ Navigate to home
        navigate("/");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      toast.error("Server error");
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
