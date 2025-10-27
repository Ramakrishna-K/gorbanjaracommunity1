

// import React, { useState, useRef, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// // import { signInWithPopup } from "firebase/auth";
// // import { auth, googleProvider } from "./config/FirebaseConfig";
// import Nav from "./components/Navbar/Nav";
// import Home from "./components/Home/Home";
// import Contact from "./components/Contact/Contact";
// import AboutUs from "./components/Aboutus/About";
// import Donation from "./components/Donation/Donation";
// import Scholarship from "./components/Scholarship/Scholarship";

// import "./App.css";

// function App() {
//   const navigate = useNavigate();

//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [showRegisterPopup, setShowRegisterPopup] = useState(false);

//   const [registerForm, setRegisterForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [registeredUserId, setRegisteredUserId] = useState("");

//   const [showLoginPassword, setShowLoginPassword] = useState(false);
//   const [showRegisterPassword, setShowRegisterPassword] = useState(false);

//   const [autoLoginData, setAutoLoginData] = useState({
//     emailOrUserId: "",
//     password: "",
//   });

//   const passwordInputRef = useRef(null);

//   useEffect(() => {
//     if (showLoginPopup && passwordInputRef.current) {
//       passwordInputRef.current.focus();
//     }
//   }, [showLoginPopup]);

//   // ====================== Input Handlers ======================
//   const handleInputChange = (e) => {
//     setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
//     setError("");
//     setRegisteredUserId("");
//   };

//   const copyUserId = () => {
//     navigator.clipboard.writeText(registeredUserId);
//     alert(`User ID ${registeredUserId} copied!`);
//   };

//   // ====================== Register ======================
//   useEffect(() => {
//     let timer;
//     if (registeredUserId) {
//       setAutoLoginData({
//         emailOrUserId: registeredUserId,
//         password: registerForm.password,
//       });

//       timer = setTimeout(() => {
//         setShowRegisterPopup(false);
//         setShowLoginPopup(true);
//         setRegisteredUserId("");
//         setRegisterForm({
//           name: "",
//           email: "",
//           phone: "",
//           password: "",
//           confirmPassword: "",
//         });
//       }, 3000);
//     }
//     return () => clearTimeout(timer);
//   }, [registeredUserId]);

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!passwordRegex.test(registerForm.password)) {
//       setError(
//         "⚠️ Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
//       );
//       return;
//     }

//     if (registerForm.password !== registerForm.confirmPassword) {
//       setError("⚠️ Passwords do not match");
//       return;
//     }

//     // Simulate user registration without API
//     const simulatedUserId = `user${Math.floor(Math.random() * 10000)}`;
//     setRegisteredUserId(simulatedUserId);
//     localStorage.setItem("userId", simulatedUserId);
//     localStorage.setItem("name", registerForm.name);
//   };

//   // ====================== Login ======================
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const emailOrUserId = e.target.emailOrUserId.value;
//     const password = e.target.password.value;

//     // Simulate login without API
//     if (emailOrUserId && password) {
//       localStorage.setItem("token", "simulated-jwt-token");
//       localStorage.setItem("userId", emailOrUserId);
//       localStorage.setItem("name", "Demo User");

//       alert(`Login Successful! Welcome Demo User\nUser ID: ${emailOrUserId}`);
//       setShowLoginPopup(false);
//       setAutoLoginData({ emailOrUserId: "", password: "" });
//     } else {
//       alert("Please enter valid credentials");
//     }
//   };

//   // ====================== Google Login ======================
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Simulate backend response
//       const simulatedToken = "simulated-google-jwt";
//       localStorage.setItem("token", simulatedToken);
//       localStorage.setItem("name", user.displayName);
//       localStorage.setItem("userId", `google-${user.uid}`);

//       alert(`Welcome ${user.displayName}! You are now logged in.`);
//       setShowLoginPopup(false);
//       setShowRegisterPopup(false);
//     } catch (err) {
//       console.error(err);
//       alert("Google login failed");
//     }
//   };

//   // ====================== Protected Navigation ======================
//   const handleProtectedAction = (path) => {
//     const isRegistered = !!localStorage.getItem("token");
//     if (!isRegistered) {
//       alert("You are not registered. Please register first.");
//       setShowRegisterPopup(true);
//     } else {
//       navigate(path);
//     }
//   };

//   return (
//     <>
//       <Nav
//         onLoginClick={() => setShowLoginPopup(true)}
//         setShowRegisterPopup={setShowRegisterPopup}
//       />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               onScholarshipClick={() => handleProtectedAction("/scholarship")}
//               onDonateClick={() => handleProtectedAction("/donation")}
//               setShowRegisterPopup={setShowRegisterPopup}
//             />
//           }
//         />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/donation" element={<Donation />} />
//         <Route path="/scholarship" element={<Scholarship />} />
//       </Routes>

//       {/* ====================== Login Popup ====================== */}
//       {showLoginPopup && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <button
//               className="close-btn"
//               onClick={() => {
//                 setShowLoginPopup(false);
//                 setAutoLoginData({ emailOrUserId: "", password: "" });
//               }}
//             >
//               ✖
//             </button>
//             <h2>Login</h2>
//             <form className="popup-form" onSubmit={handleLoginSubmit}>
//               <div className="input-group">
//                 <label>Email or User ID</label>
//                 <input
//                   type="text"
//                   name="emailOrUserId"
//                   placeholder="Email/User ID"
//                   required
//                   value={autoLoginData.emailOrUserId}
//                   onChange={(e) =>
//                     setAutoLoginData({
//                       ...autoLoginData,
//                       emailOrUserId: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Password</label>
//                 <div className="password-wrapper">
//                   <input
//                     type={showLoginPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={autoLoginData.password}
//                     onChange={(e) =>
//                       setAutoLoginData({
//                         ...autoLoginData,
//                         password: e.target.value,
//                       })
//                     }
//                     ref={passwordInputRef}
//                   />
//                   <button
//                     type="button"
//                     className="show-hide-btn"
//                     onClick={() => setShowLoginPassword(!showLoginPassword)}
//                   >
//                     {showLoginPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>
//               <button type="submit" className="login-popup-btn">
//                 Login
//               </button>
//               <div className="social-buttons">
//                 <button
//                   type="button"
//                   className="google-btn"
//                   onClick={handleGoogleLogin}
//                 >
//                   Continue with Google
//                 </button>
//               </div>
//               <p className="login-register-text">
//                 Don’t have an account?{" "}
//                 <span
//                   className="link-span"
//                   onClick={() => {
//                     setShowLoginPopup(false);
//                     setShowRegisterPopup(true);
//                   }}
//                 >
//                   Register here
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ====================== Register Popup ====================== */}
//       {showRegisterPopup && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <button
//               className="close-btn"
//               onClick={() => setShowRegisterPopup(false)}
//             >
//               ✖
//             </button>
//             <h2>Create Account</h2>
//             <form className="popup-form" onSubmit={handleRegisterSubmit}>
//               <div className="input-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={registerForm.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={registerForm.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={registerForm.phone}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Password</label>
//                 <div className="password-wrapper">
//                   <input
//                     type={showRegisterPassword ? "text" : "password"}
//                     name="password"
//                     value={registerForm.password}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="show-hide-btn"
//                     onClick={() => setShowRegisterPassword(!showRegisterPassword)}
//                   >
//                     {showRegisterPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>
//               <div className="input-group">
//                 <label>Confirm Password</label>
//                 <div className="password-wrapper">
//                   <input
//                     type={showRegisterPassword ? "text" : "password"}
//                     name="confirmPassword"
//                     value={registerForm.confirmPassword}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="show-hide-btn"
//                     onClick={() => setShowRegisterPassword(!showRegisterPassword)}
//                   >
//                     {showRegisterPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               {error && <p className="error-message">{error}</p>}

//               <button type="submit" className="popup-btn">
//                 Register
//               </button>

//               {registeredUserId && (
//                 <div className="success-message">
//                   🎉 Your User ID: <strong>{registeredUserId}</strong>
//                   <button onClick={copyUserId} className="copy-btn">
//                     Copy
//                   </button>
//                   <p style={{ fontSize: "14px", marginTop: "5px" }}>
//                     Redirecting to login in 3 seconds...
//                   </p>
//                 </div>
//               )}

//               <div className="social-buttons">
//                 <button
//                   type="button"
//                   className="google-btn"
//                   onClick={handleGoogleLogin}
//                 >
//                   Continue with Google
//                 </button>
//               </div>

//               <p className="login-register-text">
//                 Already have an account?{" "}
//                 <span
//                   className="link-span"
//                   onClick={() => {
//                     setShowRegisterPopup(false);
//                     setShowLoginPopup(true);
//                   }}
//                 >
//                   Login here
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;








import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config/FirebaseConfig";
import { FcGoogle } from "react-icons/fc";



import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/Aboutus/About";
import Donation from "./components/Donation/Donation";
import Scholarship from "./components/Scholarship/Scholarship";
import Profile from "./components/Profile/Profile";
import ScholarshipReview from "./components/Scholarship/Scholarship-review";
import { protectedFetch } from "./utils/protectedApi";

import "./App.css";

function App() {
  const navigate = useNavigate();

  // ------------------- POPUPS -------------------
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  // ------------------- FORMS -------------------
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [autoLoginData, setAutoLoginData] = useState({
    emailOrUserId: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [registeredUserId, setRegisteredUserId] = useState("");

  // ------------------- PASSWORD TOGGLES -------------------
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordInputRef = useRef(null);

  // ------------------- INPUT HANDLERS -------------------
  const handleInputChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    setError("");
    setRegisteredUserId("");
  };

  // ------------------- AUTO-FOCUS LOGIN PASSWORD -------------------
  useEffect(() => {
    if (showLoginPopup && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, [showLoginPopup]);

  // ------------------- AUTO LOGIN AFTER REGISTER -------------------
  useEffect(() => {
    let timer;
    if (registeredUserId) {
      setAutoLoginData({
        emailOrUserId: registeredUserId,
        password: registerForm.password,
      });

      timer = setTimeout(() => {
        setShowRegisterPopup(false);
        setShowLoginPopup(true);
        setRegisteredUserId("");
        setRegisterForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [registeredUserId]);

  // ------------------- COPY USER ID -------------------
  const copyUserId = () => {
    navigator.clipboard.writeText(registeredUserId);
    alert(`User ID ${registeredUserId} copied!`);
  };

  // ====================== REGISTER ======================
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = registerForm;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "⚠️ Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("⚠️ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:3200/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setRegisteredUserId(data.userId);
        localStorage.setItem("name", name);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("token", data.token);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Server not responding");
    }
  };

  // ====================== LOGIN ======================
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { emailOrUserId, password } = autoLoginData;

    if (!emailOrUserId || !password) {
      alert("Please enter valid credentials");
      return;
    }

    try {
      const res = await fetch("http://localhost:3200/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrUserId, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("name", data.user.name);

        alert(`✅ Login Successful! Welcome ${data.user.name}`);
        setShowLoginPopup(false);
        setAutoLoginData({ emailOrUserId: "", password: "" });
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server not responding");
    }
  };

  // ====================== GOOGLE LOGIN ======================



  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      const res = await fetch("http://localhost:3200/api/auth/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.name);
        localStorage.setItem("userId", data.userId);
        alert(`✅ Welcome ${data.name}!`);
        setShowLoginPopup(false);
        setShowRegisterPopup(false);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Google login failed");
    }
  };

  // ====================== PROTECTED NAVIGATION ======================
  const handleProtectedAction = async (path) => {
    try {
      const data = await protectedFetch("http://localhost:3200/api/auth/protected");
      console.log("Protected data:", data);
      navigate(path);
    } catch (err) {
      setShowLoginPopup(true);
    }
  };

  return (
    <>
      <Nav onLoginClick={() => setShowLoginPopup(true)} setShowRegisterPopup={setShowRegisterPopup} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onScholarshipClick={() => handleProtectedAction("/scholarship")}
              onDonateClick={() => handleProtectedAction("/donation")}
              setShowRegisterPopup={setShowRegisterPopup}
            />
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/profile" element={<Profile />} /> {/* ✅ new route */}
        <Route path="/scholarship-review" element={<ScholarshipReview />} />


      </Routes>

      {/* ====================== Login Popup ====================== */}
      {showLoginPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button
              className="close-btn"
              onClick={() => {
                setShowLoginPopup(false);
                setAutoLoginData({ emailOrUserId: "", password: "" });
              }}
            >
              ✖
            </button>
            <h2>Login</h2>
            <form className="popup-form" onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label>Email or User ID</label>
                <input
                  type="text"
                  name="emailOrUserId"
                  placeholder="Email/User ID"
                  required
                  value={autoLoginData.emailOrUserId}
                  onChange={(e) =>
                    setAutoLoginData({ ...autoLoginData, emailOrUserId: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                    value={autoLoginData.password}
                    onChange={(e) =>
                      setAutoLoginData({ ...autoLoginData, password: e.target.value })
                    }
                    ref={passwordInputRef}
                  />
                  <button
                    type="button"
                    className="show-hide-btn"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    {showLoginPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button type="submit" className="login-popup-btn">
                Login
              </button>


              <div className="social-buttons">
                <button type="button" className="google-btn" onClick={handleGoogleLogin}>
                  <FcGoogle size={24} /> {/* Google logo */}
                  Continue with Google
                </button>
              </div>

              <p className="login-register-text">
                Don’t have an account?{" "}
                <span
                  className="link-span"
                  onClick={() => {
                    setShowLoginPopup(false);
                    setShowRegisterPopup(true);
                  }}
                >
                  Register here
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ====================== Register Popup ====================== */}

      {showRegisterPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={() => setShowRegisterPopup(false)}>
              ✖
            </button>
            <h2>Create Account</h2>
            <form className="popup-form" onSubmit={handleRegisterSubmit}>
              {["name", "email", "phone", "password", "confirmPassword"].map((field) => (
                <div className="input-group" key={field}>
                  <label>{field === "confirmPassword" ? "Confirm Password" : field}</label>
                  <div className={`password-wrapper ${field.includes("password") ? "has-button" : ""}`}>
                    <input
                      type={
                        field === "password"
                          ? showRegisterPassword
                            ? "text"
                            : "password"
                          : field === "confirmPassword"
                            ? showConfirmPassword
                              ? "text"
                              : "password"
                            : field === "email"
                              ? "email"
                              : "text"
                      }
                      name={field}
                      value={registerForm[field]}
                      onChange={handleInputChange}
                      required
                    />
                    {(field === "password" || field === "confirmPassword") && (
                      <button
                        type="button"
                        className="show-hide-btn"
                        onClick={() =>
                          field === "password"
                            ? setShowRegisterPassword(!showRegisterPassword)
                            : setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {field === "password"
                          ? showRegisterPassword
                            ? "Hide"
                            : "Show"
                          : showConfirmPassword
                            ? "Hide"
                            : "Show"}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="popup-btn">
                Register
              </button>

              {registeredUserId && (
                <div className="success-message">
                  🎉 Your User ID: <strong>{registeredUserId}</strong>
                  <button onClick={copyUserId} className="copy-btn">
                    Copy
                  </button>
                  <p style={{ fontSize: "14px", marginTop: "5px" }}>
                    Redirecting to login in 3 seconds...
                  </p>
                </div>
              )}


              <div className="social-buttons">
                <button type="button" className="google-btn" onClick={handleGoogleLogin}>
                  <FcGoogle size={24} /> {/* Google logo */}
                  Continue with Google
                </button>
              </div>


              <p className="login-register-text">
                Already have an account?{" "}
                <span
                  className="link-span"
                  onClick={() => {
                    setShowRegisterPopup(false);
                    setShowLoginPopup(true);
                  }}
                >
                  Login here
                </span>
              </p>
            </form>
          </div>
        </div>
      )}




    </>
  );
}

export default App;



