import React, { useEffect, useState } from "react";
import profile from "../images/profile.jpg";

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    user_type: "",
  });

  useEffect(() => {
    fetch("/me", {
      headers: {
        Authorization: "Bearer " + userInfo.jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div className="profile" style={{paddingTop: "40px", fontStyle: "italic" , paddingRight: "20px"}}>
      <h4>Profile</h4>
      <div>
        <img src={profile} alt="Avatar" class="avatar" style={{ width: 10 + "rem" }} />
      </div>
      <div>
        <p>
          <b>Name: </b>
          {user.first_name} {user.last_name}
        </p>
        <p>
          <b>Username: </b>
          {user.username}
        </p>
        <p>
          <b>Email: </b>
          {user.email}
        </p>
        <p>
          <b>User-Type: </b>
          {user.user_type}
        </p>
      </div>
    </div>
  );
}
export default Profile;
