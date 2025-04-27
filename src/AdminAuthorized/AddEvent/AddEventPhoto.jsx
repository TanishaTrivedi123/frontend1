import React, { useRef, useState, useEffect } from "react";
import styles from "../AddEvent/AddEventPhoto.module.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/EventSlice"; // ✅ Import Redux action
import { useNavigate } from "react-router-dom";

const AddEventPhoto = () => {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  const inputDateRef = useRef();
  const inputDesRef = useRef();
  const titleRef = useRef();

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(file);

    const imageURL = URL.createObjectURL(file);
    setPreviewUrl(imageURL);
  };

  const handleImageClick = () => {
    imgRef.current.click();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const date = inputDateRef.current.value.trim();
    const description = inputDesRef.current.value.trim();

    if (!title || !date || !description || !image) {
      toast.error("All fields are required");
      return;
    }

    // 🛑 Backend nahi, sirf Redux me dispatch
    const eventData = {
      id: Date.now(), // unique id
      title,
      date,
      description,
      imageUrl: previewUrl, // Local preview URL ko store kar rahe
    };

    console.log("EventData being dispatched:", eventData);

    dispatch(addEvent(eventData));

    toast.success("Event added locally! 🚀");

    // Reset form fields
    titleRef.current.value = "";
    inputDateRef.current.value = "";
    inputDesRef.current.value = "";
    setImage(null);
    setPreviewUrl(null);

    // Navigate to events list (optional)
    navigate("/events"); // 🔥 Ya jahan tum list dikha rahe ho
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
            src={previewUrl || "/dummy.jpg"}
            alt="Upload Preview"
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
