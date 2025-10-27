

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";
// import regImg from "../images/banjarapic3.jpg";

// function Register({ setShowLoginPopup }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     const { name, email, phone, password, confirmPassword } = formData;

//     if (!name || !email || !phone || !password || !confirmPassword) {
//       setError("All fields are required!");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     console.log("Registered user:", formData);
//     setSuccess("Registration successful! 🎉");

//     // Wait 1.5s before showing login popup
//     setTimeout(() => {
//       setShowLoginPopup(true); // Open login popup
//       navigate("/"); // Go to Home page
//     }, 1500);
//   };

//   const handleLoginHere = () => {
//     setShowLoginPopup(true); // Trigger login popup
//     navigate("/"); // Go to Home page
//   };

//   return (
//     <section className="register-section">
//       <div className="register-container">
//         <div className="register-img">
//           <img src={regImg} alt="Register illustration" />
//         </div>

//         <div className="register-form">
//           <h2>Create Account</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your full name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="input-group">
//               <label>Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="input-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="input-group">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//             </div>

//             {error && <p className="error-text">{error}</p>}
//             {success && <p className="success-text">{success}</p>}

//             <button type="submit" className="register-btn">
//               Register
//             </button>

//             <p className="login-text">
//               Already have an account?{" "}
//               <span
//                 style={{ color: "blue", cursor: "pointer" }}
//                 onClick={handleLoginHere}
//               >
//                 Login here
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Register;
