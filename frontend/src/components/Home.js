import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>HOME</h2>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Home;
