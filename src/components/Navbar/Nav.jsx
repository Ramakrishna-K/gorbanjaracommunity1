
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// function Nav({ onLoginClick, setShowRegisterPopup }) {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">GorBanjaraCommunity</h2>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li>
//           <span 
//             onClick={() => setShowRegisterPopup(true)}
//           >
//             Register
//           </span>
//         </li>
//         <li>
//           <span 
//             onClick={onLoginClick}
//           >
//             Login
//           </span>
//         </li>
//         <li><Link to="/aboutus">About Us</Link></li>
//         <li><Link to="/donation">Donate Now</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav({ onLoginClick, setShowRegisterPopup }) {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🍔 hamburger toggle

  const handleLogout = () => {
    localStorage.clear();
    alert("You have been logged out.");
    navigate("/");
    setMenuOpen(false);
  };

  const handleDonateClick = () => {
    if (!name) {
      alert("You are not registered! Please register/login first.");
      setShowRegisterPopup(true);
      setMenuOpen(false);
    } else {
      navigate("/donation");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      {/* 🌟 Logo */}
      <h2 className="logo" onClick={() => navigate("/")}>
        GorBanjaraCommunity
      </h2>

      {/* 🍔 Hamburger Button */}
      <div
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* 🔗 Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        {!name && (
          <>
            <li>
              <span
                onClick={() => {
                  setShowRegisterPopup(true);
                  setMenuOpen(false);
                }}
              >
                Register
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  onLoginClick();
                  setMenuOpen(false);
                }}
              >
                Login
              </span>
            </li>
          </>
        )}

        <li>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>

        <li>
          <span onClick={handleDonateClick} className="donate-link">
            Donate Now
          </span>
        </li>

        {name && (
          <li className="profile-dropdown">
            <span onClick={() => setShowDropdown(!showDropdown)}>
              {name} &#9662;
            </span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/profile" onClick={() => setMenuOpen(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <span onClick={handleLogout}>Logout</span>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
