import React from "react";
import gambar from "./assets/profile.jpeg";
import animationGif from "./assets/Animation - 1719045376335.gif"; // Import GIF
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Nila Ayu C.W 😎 </h1>
        <p>Welcome to my React application!</p>
      </div>
      
      <div className="profile-container">
        <div className="image-wrapper">
          <h2>Profile Picture</h2>
          <img src={gambar} alt="Profile" />
        </div>
        
        <div className="card">
          <h3>Profile Description</h3>
          <p>
            This is Nila Ayu Citra Wulan's profile. 
            She is a dedicated individual with a passion for technology and development. 
            Her skills include React development, web design, and creating interactive applications.
          </p>
        </div>
      </div>
      
      <div className="gif-wrapper">        
        <img src={animationGif} alt="Animated Logo" className="logo large-logo" /> {/* Gunakan GIF dan tambahkan class large-logo */}
      </div>
      
      <div className="footer">
        <p>Thank you for visiting!</p>
      </div>
    </div>
  );
}

export default App;
