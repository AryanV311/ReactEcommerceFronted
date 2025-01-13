import { useState } from "react";
import "./Css/Myprofile.css";

export const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    image:
      localStorage.getItem("profileImage") || "https://via.placeholder.com/150",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("profileImage", reader.result);
        setUserData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    alert("Edit functionality to be implemented!");
  };
  

  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <img src={userData.image} alt="User" className="user-profile-image" />
        <label htmlFor="upload-image" className="upload-button">
            Change Image
          </label>
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        <h1 className="user-profile-name">{userData.name}</h1>
      </div>
      <hr />
      <div className="user-profile-section">
        <h2>CONTACT INFORMATION</h2>
        <p>
          <strong>Email id:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong>Address:</strong> <br /> {userData.address}
        </p>
      </div>
      <div className="user-profile-section">
        <h2>BASIC INFORMATION</h2>
        <p>
          <strong>Gender:</strong> {userData.gender}
        </p>
        <p>
          <strong>Birthday:</strong> {userData.birthday}
        </p>
      </div>
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};
