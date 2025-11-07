
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Home.css";
// import img from "../images/banjarapic1.png";
// import image from "../images/banjarapic2.png";
// import imgb1 from "../images/banjarab1.png"
// import imgb2 from "../images/banjarab2.png"
// import imgb3 from "../images/banjarab3.png"
// import imgb4 from "../images/banjarab4.png"
// function Home({ showLoginPopup, setShowLoginPopup, showRegisterPopup, setShowRegisterPopup}) {
//   const navigate = useNavigate();

//   // ---------------- SLIDER DATA ----------------
//   const slides = [
//     {
//       color: "#9ea920ff",
//       image: imgb4,
//       title: " Welcome to the GorBanjara Community ",
//       text: `"Sen Ram Ram"
//          Welcome to GorBanjara Community, a place to celebrate our vibrant culture.
//         Explore the traditions, colors, and music of the Banjara community.
//         Join us in empowering Banjara youth and preserving our heritage!`
//     },
//     {
//       color: "#8d2b0a",
//       image: imgb3,
//       title: " Explore Traditional Banjara Life ",
//       text: `Immerse yourself in the beauty of our ancient traditions.
//              Hear the songs that echo through generations.
//             See the colors that paint the story of our people.
//              Celebrate the soul of a culture that never fades..`
//     },
//     {
//       color: "#ac7631ff",
//       image: imgb2,
//       title: " Folk Songs and Dances ",
//       text: `The heart of the Banjara community beats in their folk tunes.
//              Their dances reflect joy, unity, and the beauty of tradition.
//              Every song carries the voice of their ancestors and stories untold.
//              The rhythm, the colors, and the passion — all speak of their soul.`
//     },
//     {
//       color: "#713522ff",
//       image: imgb1,

//       title: " Rich Culture and Craft ",
//       text: `The Banjara community shines with vibrant art and timeless traditions.
//              Every stitch, bead, and mirror tells a story of heritage.
//              Their handmade crafts reflect love, pride, and creativity.
//             Together, they preserve a culture as colorful as their attire.`
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ---------------- LOGIN STATE ----------------
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   // ---------------- REGISTER STATE ----------------
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [regError, setRegError] = useState("");
//   const [regSuccess, setRegSuccess] = useState("");

//   // ---------------- AUTO SLIDER ----------------
//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % slides.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // ---------------- LOGIN HANDLER ----------------
//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//     setShowSuccessPopup(true);
//     setTimeout(() => {
//       setShowSuccessPopup(false);
//       setShowLoginPopup(false);
//       navigate("/");
//     }, 2000);
//   };

//   // ---------------- REGISTER HANDLER ----------------
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleRegister = (e) => {
//     e.preventDefault();
//     setRegError("");
//     setRegSuccess("");

//     const { name, email, phone, password, confirmPassword } = formData;

//     if (!name || !email || !phone || !password || !confirmPassword) {
//       setRegError("All fields are required!");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setRegError("Passwords do not match!");
//       return;
//     }

//     console.log("Registered user:", formData);
//     setRegSuccess("Registration successful! 🎉");
//     setTimeout(() => {
//       setShowRegisterPopup(false);
//       setShowLoginPopup(true);
//     }, 1500);
//   };

//   // ---------------- SOCIAL LOGIN HANDLERS ----------------
//   const handleGoogleRegister = () => {
//     console.log("Google registration clicked");
//     alert("Google registration will be implemented soon!");
//   };

//   const handleFacebookRegister = () => {
//     console.log("Facebook registration clicked");
//     alert("Facebook registration will be implemented soon!");
//   };

//   // ---------------- OFFICER DATA ----------------
//   const officers = [
//     {
//       name: "Satyavathi Rathod (Mangli)",
//       position: "Folk Singer & Cultural Influencer",
//       story:
//         "Mangli’s distinctive Banjara attire and powerful vocals set her apart in the Telugu folk music industry. She embraced her Lambadi heritage, incorporating traditional elements into her performances.",
//       color: "#FFD700",
//       image:
//         "https://tse4.mm.bing.net/th/id/OIP.lQNRDAy6OzDebU31pZHIVAHaE7?pid=Api&P=0&h=180",
//       link: "https://en.wikipedia.org/wiki/Mangli",
//     },
//     {
//       name: "Ramesh Karthik Nayak",
//       position: "Writer and Poet",
//       story:
//         "Born in Jakranpally Tanda, Nizamabad District, Ramesh writes about the lifestyle of the Banjara community. His short story collection, Dhavlo, won him the Yuva Puraskar for Telugu in 2024.",
//       color: "#FFB6C1",
//       image:
//         "https://www.hydlitfest.org/wp-content/uploads/2023/01/Ramesh-Naik-e1674199175125.jpg",
//       link: "https://en.wikipedia.org/wiki/Ramesh_Karthik_Nayak",
//     },
//     {
//       name: "Soumya Guguloth",
//       position: "Indian Professional Football Player",
//       story:
//         "Soumya represented India at U-14, U-16, and U-19 levels, captained the Indian side in the 2018 BRICS U-17 Football Cup, and played for Gokulam Kerala in the 2021 AFC Women’s Club Championship.",
//       color: "#ADD8E6",
//       image:
//         "https://media.telanganatoday.com/wp-content/uploads/2022/09/football.jpg",
//       link: "https://en.wikipedia.org/wiki/Soumya_Guguloth",
//     },
//   ];

//   return (
//     <>
//       {/* ---------------- SLIDER ---------------- */}
//       <section
//         className="sec1"
//         style={{
//           backgroundImage: `url(${slides[currentIndex].image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="overlay"></div>
//         <div className="content-wrapper">
//           <h3>{slides[currentIndex].title}</h3>
//           <p>
//             {slides[currentIndex].text.split('\n').map((line, index) => (
//               <span key={index}>
//                 {line}
//                 <br />
//               </span>
//             ))}
//           </p>

//         </div>

//         <div className="buttons">
//           <button
//             onClick={() => navigate("/scholarship")}
//             className="scholarship-link-btn"
//           >
//             ScholarShip
//           </button>

//           <button
//             onClick={() => navigate("/donation")}
//             className="donate-link-btn"
//           >
//             Donate Now
//           </button>


//           <button
//             onClick={() => navigate("/contact")}
//             className="contact-link-btn"
//           >
//             Contact Us
//           </button>

//         </div>
//       </section>

//       {/* ---------------- ABOUT SECTION ---------------- */}
//       <section className="sec2">
//         <div className="overlay1"></div>

//         <h2>Main Purpose of the App</h2>
//         <div className="divsec1">
//           <p>
//             Our mission is to support the <b>Banjara community </b> by providing quality education, scholarships, and skill development opportunities. <br />
//             We aim to empower Banjara children and youth to overcome financial barriers and build a better future. <br />
//             <b> <Link to='donation' style={{ textDecoration: 'none', color: 'blue' }}>Donations play a vital role</Link></b>,helping fund scholarships, educational materials, and training programs for those in need. <br />
//             We are dedicated to preserving and promoting the rich culture and traditions of the Banjara people. <br />
//             Our vision is to create an educated, skilled, and culturally proud Banjara community where every child gets equal opportunities to succeed.
//           </p>
//           <div className="divsec3">
//             <img src={img} alt="Banjara culture" />
//           </div>
//         </div>
//       </section>

//       {/* ---------------- ICONS SECTION ---------------- */}
//       <section className="sec4">
//         <h2 className="officer-heading">✨ Banjara Icons ✨</h2>
//         <div className="officer-container">
//           {officers.map((officer, index) => (
//             <div
//               key={index}
//               className="officer-card"
//               style={{ backgroundColor: officer.color }}
//             >
//               <img
//                 src={officer.image}
//                 alt={officer.name}
//                 className="officer-img"
//               />
//               <h3>{officer.name}</h3>
//               <h4>{officer.position}</h4>
//               <p>{officer.story}</p>
//               <a href={officer.link} target="_blank" rel="noopener noreferrer">
//                 Read more on Wikipedia
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- FESTIVAL SECTION ---------------- */}
//       <section className="sec5">
//         <h2 className="festivel">About the Banjara culture</h2>

//         <div className="festival-container">
//           {/* Festival Text */}
//           <div className="festival-text">
//             <h3>1. History & Background</h3>
//             <p>
//               The Banjara Festival is an annual celebration of the heritage, traditions, and vibrant culture of the Banjara community, also known as the Lambadi community.
//               Historically, Banjaras were nomadic traders and transporters, moving across India. The festival was established to preserve and showcase their rich culture, colorful attire, music, dance, and handicrafts.
//             </p>

//             <h3>2. Purpose of the Festival</h3>
//             <ul>
//               <li>To celebrate the unique culture, lifestyle, and customs of the Banjara community.</li>
//               <li>To promote traditional music, folk dance, and storytelling among the younger generation.</li>
//               <li>To strengthen community bonds and unity across different Banjara groups.</li>
//               <li>To showcase traditional embroidery, jewelry, and handicrafts to a wider audience.</li>
//             </ul>

//             <h3>3. Main Highlights</h3>
//             <ul>
//               <li><strong>Lambadi Dance:</strong> Vibrant group dances in traditional attire with jewelry and mirrors, showcasing intricate movements.</li>
//               <li><strong>Folk Music:</strong> Performances of traditional Banjara songs narrating daily life, history, and folklore.</li>
//               <li><strong>Competitions:</strong> Best costume contests, storytelling competitions, and traditional craft demonstrations.</li>
//               <li><strong>Food Stalls:</strong> Traditional Banjara cuisine and snacks reflecting local flavors.</li>
//               <li><strong>Craft Exhibitions:</strong> Showcasing embroidery, mirror work, jewelry, and handwoven textiles unique to the community.</li>
//               <li><strong>Workshops & Learning:</strong> Interactive workshops for visitors to learn Lambadi language, crafts, and folk dances.</li>
//             </ul>

//             <h3>4. Cultural Significance</h3>
//             <p>
//               The festival is not only a celebration but also an educational platform that preserves Banjara heritage.
//               It provides an opportunity for youth to connect with their roots, learn traditional crafts, and develop pride in their cultural identity.
//               It also promotes tourism and cultural awareness by inviting people from all communities to experience Banjara traditions.
//             </p>
//           </div>

//           {/* Festival Image */}
//           <div className="festival-img">
//             <img src={image} alt="Banjara Festival" />
//           </div>
//         </div>
//       </section>


//       {/* ---------------- FOOTER ---------------- */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-section">
//             <h3>GorBanjara</h3>
//             <p>
//               Preserving the rich heritage and culture of the Banjara community.
//             </p>
//           </div>
//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/Donation">Donate Now</Link></li>
//               <li><Link to="/aboutus">About Us</Link></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Contact</h4>
//             <p>Email: info@gorbanjara.org</p>
//             <p>Phone: +91 9876543210</p>
//             <div className="social-links">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
//               <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           &copy; {new Date().getFullYear()} GorBanjara. All Rights Reserved.
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Home;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import img from "../images/banjarapic1.png";
import image from "../images/banjarapic2.png";
import imgb1 from "../images/banjarab1.png";
import imgb2 from "../images/banjarab2.png";
import imgb3 from "../images/banjarab3.png";
import imgb4 from "../images/banjarab4.png";

function Home({ setShowRegisterPopup }) {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const handleDonationClick = (e) => {
    if (!name) {
      e.preventDefault(); // stop navigation
      alert("You are not registered! Please register/login first.");
      // navigate("/"); 
       setShowRegisterPopup(true);
    }
  };
  // ---------------- SLIDER DATA ----------------
  const slides = [
    {
      color: "#9ea920ff",
      image: imgb4,
      title: " Welcome to the GorBanjara Community ",
      text: `"Sen Ram Ram"
         Welcome to GorBanjara Community, a place to celebrate our vibrant culture.
        Explore the traditions, colors, and music of the Banjara community.
        Join us in empowering Banjara youth and preserving our heritage!`,
    },
    {
      color: "#8d2b0a",
      image: imgb3,
      title: " Explore Traditional Banjara Life ",
      text: `Immerse yourself in the beauty of our ancient traditions.
             Hear the songs that echo through generations.
            See the colors that paint the story of our people.
             Celebrate the soul of a culture that never fades..`,
    },
    {
      color: "#ac7631ff",
      image: imgb2,
      title: " Folk Songs and Dances ",
      text: `The heart of the Banjara community beats in their folk tunes.
             Their dances reflect joy, unity, and the beauty of tradition.
             Every song carries the voice of their ancestors and stories untold.
             The rhythm, the colors, and the passion all speak of their soul.`,
    },
    {
      color: "#713522ff",
      image: imgb1,
      title: " Rich Culture and Craft ",
      text: `The Banjara community shines with vibrant art and timeless traditions.
             Every stitch, bead, and mirror tells a story of heritage.
             Their handmade crafts reflect love, pride, and creativity.
            Together, they preserve a culture as colorful as their attire.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ---------------- AUTO SLIDER ----------------
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  // ---------------- USER LOGIN CHECK ----------------
  const isUserRegistered = !!localStorage.getItem("token"); // check JWT token

  const handleProtectedClick = (route) => {
    if (!isUserRegistered) {
      alert("You are not registered! Please register/login first.");
      setShowRegisterPopup(true);
    } else {
      navigate(route);
    }
  };

  // ---------------- OFFICER DATA ----------------
  const officers = [
    {
      name: "Satyavathi Rathod (Mangli)",
      position: "Folk Singer & Cultural Influencer",
      story:
        "Mangli’s distinctive Banjara attire and powerful vocals set her apart in the Telugu folk music industry. She embraced her Lambadi heritage, incorporating traditional elements into her performances.",
      color: "#FFD700",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.lQNRDAy6OzDebU31pZHIVAHaE7?pid=Api&P=0&h=180",
      link: "https://en.wikipedia.org/wiki/Mangli",
    },
    {
      name: "Ramesh Karthik Nayak",
      position: "Writer and Poet",
      story:
        "Born in Jakranpally Tanda, Nizamabad District, Ramesh writes about the lifestyle of the Banjara community. His short story collection, Dhavlo, won him the Yuva Puraskar for Telugu in 2024.",
      color: "#FFB6C1",
      image:
        "https://www.hydlitfest.org/wp-content/uploads/2023/01/Ramesh-Naik-e1674199175125.jpg",
      link: "https://en.wikipedia.org/wiki/Ramesh_Karthik_Nayak",
    },
    {
      name: "Soumya Guguloth",
      position: "Indian Professional Football Player",
      story:
        "Soumya represented India at U-14, U-16, and U-19 levels, captained the Indian side in the 2018 BRICS U-17 Football Cup, and played for Gokulam Kerala in the 2021 AFC Women’s Club Championship.",
      color: "#ADD8E6",
      image:
        "https://media.telanganatoday.com/wp-content/uploads/2022/09/football.jpg",
      link: "https://en.wikipedia.org/wiki/Soumya_Guguloth",
    },
  ];

  return (
    <>
      {/* ---------------- SLIDER ---------------- */}
      <section
        className="sec1"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width:"100%",
          aspectRatio:"16/9",
        }}
      >
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h3>{slides[currentIndex].title}</h3>
          <p>
            {slides[currentIndex].text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="buttons">
          <button
            onClick={() => handleProtectedClick("/scholarship")}
            className="scholarship-link-btn"
          >
            Scholarship
          </button>

          <button
            onClick={() => handleProtectedClick("/donation")}
            className="donate-link-btn"
          >
            Donate Now
          </button>

          <button onClick={() => navigate("/contact")} className="contact-link-btn">
            Contact Us
          </button>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="sec2">
        <div className="overlay1"></div>
        <h2>Main Purpose of the App</h2>
        <div className="divsec2">
          <p>
            Our mission is to support the <b>Banjara community </b> by providing
            quality education, scholarships, and skill development opportunities. <br />
            We aim to empower Banjara children and youth to overcome financial
            barriers and build a better future. <br />
            {/* <b>
              {" "}
              <Link to="donation" style={{ textDecoration: "none", color: "blue" }}>
                Donations play a vital role
              </Link>
            </b> */}
            <b>
              <Link
                to="/donation"
                onClick={handleDonationClick}
                style={{ textDecoration: "none", color: "blue" }}
              >
                Donations play a vital role
              </Link>
            </b>
            , helping fund scholarships, educational materials, and training programs for those in need. <br />
            We are dedicated to preserving and promoting the rich culture and traditions of the Banjara people. <br />
            Our vision is to create an educated, skilled, and culturally proud Banjara community where every child gets equal opportunities to succeed.
          </p>
          <div className="divsec2">
            <img src={img} alt="Banjara culture" />
          </div>
        </div>
      </section>

      {/* ---------------- ICONS SECTION ---------------- */}
      <section className="sec4">
        <h2 className="officer-heading">✨ Banjara Icons ✨</h2>
        <div className="officer-container">
          {officers.map((officer, index) => (
            <div
              key={index}
              className="officer-card"
              style={{ backgroundColor: officer.color }}
            >
              <img src={officer.image} alt={officer.name} className="officer-img" />
              <h3>{officer.name}</h3>
              <h4>{officer.position}</h4>
              <p>{officer.story}</p>
              <a href={officer.link} target="_blank" rel="noopener noreferrer">
                Read more on Wikipedia
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FESTIVAL SECTION ---------------- */}
      <section className="sec5">
        <h2 className="festivel">About the Banjara culture</h2>
        <div className="festival-container">
          <div className="festival-text">
            <h3>1. History & Background</h3>
            <p>
              The Banjara Festival is an annual celebration of the heritage, traditions, and vibrant culture of the Banjara community, also known as the Lambadi community. Historically, Banjaras were nomadic traders and transporters, moving across India. The festival was established to preserve and showcase their rich culture, colorful attire, music, dance, and handicrafts.
            </p>
            <h3>2. Purpose of the Festival</h3>
            <ul>
              <li>To celebrate the unique culture, lifestyle, and customs of the Banjara community.</li>
              <li>To promote traditional music, folk dance, and storytelling among the younger generation.</li>
              <li>To strengthen community bonds and unity across different Banjara groups.</li>
              <li>To showcase traditional embroidery, jewelry, and handicrafts to a wider audience.</li>
            </ul>
            <h3>3. Main Highlights</h3>
            <ul>
              <li><strong>Lambadi Dance:</strong> Vibrant group dances in traditional attire with jewelry and mirrors, showcasing intricate movements.</li>
              <li><strong>Folk Music:</strong> Performances of traditional Banjara songs narrating daily life, history, and folklore.</li>
              <li><strong>Competitions:</strong> Best costume contests, storytelling competitions, and traditional craft demonstrations.</li>
              <li><strong>Food Stalls:</strong> Traditional Banjara cuisine and snacks reflecting local flavors.</li>
              <li><strong>Craft Exhibitions:</strong> Showcasing embroidery, mirror work, jewelry, and handwoven textiles unique to the community.</li>
              <li><strong>Workshops & Learning:</strong> Interactive workshops for visitors to learn Lambadi language, crafts, and folk dances.</li>
            </ul>
            <h3>4. Cultural Significance</h3>
            <p>
              The festival is not only a celebration but also an educational platform that preserves Banjara heritage. It provides an opportunity for youth to connect with their roots, learn traditional crafts, and develop pride in their cultural identity. It also promotes tourism and cultural awareness by inviting people from all communities to experience Banjara traditions.
            </p>
          </div>
          <div className="festival-img">
            <img src={image} alt="Banjara Festival" />
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>GorBanjara</h4>
            <p>Preserving the rich heritage and culture of the Banjara community.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/donation">Donate Now</Link></li> */}
              <Link
                to="/donation"
                onClick={handleDonationClick}
              > Donate Now
              </Link>
              <li><Link to="/aboutus">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="email">Contact</h4>
            <p>Email:gorbanjaracommunity2025@gmail.com</p>
            <p>Phone: +91 9177860862, 9989295591</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">&copy; {new Date().getFullYear()} GorBanjara. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Home;
