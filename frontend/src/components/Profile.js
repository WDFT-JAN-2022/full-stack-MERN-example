import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { get } from "../http/service";

const Profile = () => {
  const navigate = useNavigate("/");

  React.useEffect(() => {
    get("/api/auth/loggedIn")
      .then((results) => {
        console.log("Are you logged in?", results.data);
      })
      .catch((err) => {
        console.error(err.message);
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <h2>Welcome to your profile</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Profile;
