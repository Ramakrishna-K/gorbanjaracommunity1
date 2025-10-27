// import React from "react";
// import "./Donation.css";

// function Donation() {
//   return (
//     <div className="donation-container">
//       {/* 🌸 Header Section */}
//       <section className="donation-header">
//         <h1> Support the Banjara Community </h1>
//         <p>
//           Every contribution you make helps preserve our rich Banjara heritage,
//           empower our youth, and promote cultural programs that celebrate our
//           traditions and unity.
//         </p>
//       </section>

//       {/* ❤️ Explanation Section */}
//       <section className="donation-about">
//         <h2>Why Your Support Matters</h2>
//         <p>
//           The Banjara community is one of India’s oldest and most vibrant
//           groups, known for its colorful attire, art, and music. Through your
//           donation, we can:
//         </p>
//         <ul>
//           <li>🎓 Provide education support for underprivileged Banjara children</li>
//           <li>🎭 Organize cultural events and traditional dance festivals</li>
//           <li>🏡 Help preserve Banjara language, art, and handicrafts</li>
//           <li>💊 Support healthcare drives and welfare programs</li>
//         </ul>

//         <h2>మీ మద్దతు ఎందుకు అవసరం?</h2>
//         <p>
//             బంజారా సమాజం భారత్‌లోని అత్యంత పూరాతన మరియు రంగారంగాలైన సమూహాల్లో ఒకటి.
//              వీరి ప్రత్యేకత రంగుల తుప్పకట్టలు, కళ, సంగీతం ద్వారా తెలుస్తుంది.
//              మీ దానంతో, మనం ఈ క్రింది పనులు చేయగలము:
//         </p>
//         <ul>
//           <li>🎓 విద్యా మద్దతు: ఆర్ధిక సమస్యల కారణంగా చదువుకోలేని బంజారా పిల్లల కోసం విద్యా సహాయం అందించడం</li>
//           <li>🎭 సాంస్కృతిక కార్యక్రమాలు: సాంప్రదాయ నృత్య ఉత్సవాలు మరియు సాంస్కృతిక కార్యక్రమాలను నిర్వహించడం</li>
//           <li>🏡 భాష, కళలు, హస్తకళలను రక్షించడం: బంజారా భాష, కళలు, మరియు హస్తకళలను నిలుపుకోవడం</li>
//           <li>💊 ఆరోగ్య మరియు సంక్షేమ కార్యక్రమాలు: ఆరోగ్య శిబిరాలు, సంక్షేమ కార్యక్రమాలను నిర్వహించడం</li>
//         </ul>
//       </section>

//       {/* 💰 Donation Form Section */}
//       <section className="donation-form">
//         <h2>Make a Donation</h2>
//         <form>
//           <div className="form-group">
//             <label>Full Name</label>
//             <input type="text" placeholder="Enter your name" required />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input type="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label>Donation Amount (₹)</label>
//             <input type="number" placeholder="Enter amount" required />
//           </div>

//           <button type="submit" className="donate-btn">
//             Donate Now
//           </button>
//         </form>
//       </section>

//       {/* 🌿 Footer */}
//       <footer className="donation-footer">
//         <p>Thank you for supporting our cause. Together, we can make a difference!</p>
//       </footer>
//     </div>
//   );
// }

// export default Donation;




// import React from "react";
// import "./Donation.css";

// function Donation() {
//   // Form submit handler
//   const handleDonate = async (e) => {
//     e.preventDefault();
//     const name = e.target[0].value;
//     const email = e.target[1].value;
//     const amount = e.target[2].value;

//     try {
//       const res = await fetch("http://localhost:3200/api/donations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, amount }),
//       });

//       const data = await res.json();
//       alert(data.message);
//       if (data.receiptUrl) window.open(data.receiptUrl, "_blank");
//     } catch (err) {
//       alert("Failed to donate. Try again.");
//     }
//   };

//   return (
//     <div className="donation-container">
//       {/* 🌸 Header Section */}
//       <section className="donation-header">
//         <h1> Support the Banjara Community </h1>
//         <p>
//           Every contribution you make helps preserve our rich Banjara heritage,
//           empower our youth, and promote cultural programs that celebrate our
//           traditions and unity.
//         </p>
//       </section>

//       {/* ❤️ Explanation Section */}
//       <section className="donation-about">
//         <h2>Why Your Support Matters</h2>
//         <p>
//           The Banjara community is one of India’s oldest and most vibrant
//           groups, known for its colorful attire, art, and music. Through your
//           donation, we can:
//         </p>
//         <ul>
//           <li>🎓 Provide education support for underprivileged Banjara children</li>
//           <li>🎭 Organize cultural events and traditional dance festivals</li>
//           <li>🏡 Help preserve Banjara language, art, and handicrafts</li>
//           <li>💊 Support healthcare drives and welfare programs</li>
//         </ul>

//         <h2>మీ మద్దతు ఎందుకు అవసరం?</h2>
//         <p>
//           బంజారా సమాజం భారత్‌లోని అత్యంత పూరాతన మరియు రంగారంగాలైన సమూహాల్లో ఒకటి.
//           వీరి ప్రత్యేకత రంగుల తుప్పకట్టలు, కళ, సంగీతం ద్వారా తెలుస్తుంది.
//           మీ దానంతో, మనం ఈ క్రింది పనులు చేయగలము:
//         </p>
//         <ul>
//           <li>🎓 విద్యా మద్దతు: ఆర్ధిక సమస్యల కారణంగా చదువుకోలేని బంజారా పిల్లల కోసం విద్యా సహాయం అందించడం</li>
//           <li>🎭 సాంస్కృతిక కార్యక్రమాలు: సాంప్రదాయ నృత్య ఉత్సవాలు మరియు సాంస్కృతిక కార్యక్రమాలను నిర్వహించడం</li>
//           <li>🏡 భాష, కళలు, హస్తకళలను రక్షించడం: బంజారా భాష, కళలు, మరియు హస్తకళలను నిలుపుకోవడం</li>
//           <li>💊 ఆరోగ్య మరియు సంక్షేమ కార్యక్రమాలు: ఆరోగ్య శిబిరాలు, సంక్షేమ కార్యక్రమాలను నిర్వహించడం</li>
//         </ul>
//       </section>

//       {/* 💰 Donation Form Section */}
//       <section className="donation-form">
//         <h2>Make a Donation</h2>
//         <form onSubmit={handleDonate}>
//           <div className="form-group">
//             <label>Full Name</label>
//             <input type="text" placeholder="Enter your name" required />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input type="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label>Donation Amount (₹)</label>
//             <input type="number" placeholder="Enter amount" required />
//           </div>

//           <button type="submit" className="donate-btn">
//             Donate Now
//           </button>
//         </form>
//       </section>

//       {/* 🌿 Footer */}
//       <footer className="donation-footer">
//         <p>Thank you for supporting our cause. Together, we can make a difference!</p>
//       </footer>
//     </div>
//   );
// }

// export default Donation;



import React, { useState } from "react";
import "./Donation.css";

function Donation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [receiptLink, setReceiptLink] = useState("");


  const handleDonate = async (e) => {
    e.preventDefault();

    if (!name || !email || !amount) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3200/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      });

      // Only read body once
      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text); // try parse JSON
      } catch {
        console.error("Server response is not JSON:", text);
        setMessage("Server error: invalid response");
        return;
      }

      if (res.ok) {
        setMessage(data.message || "Donation successful!");
        const link = data.receipt.replace(
          "C:\\Users\\katra\\OneDrive\\Desktop\\Banjara1\\backend",
          "http://localhost:3200"
        );
        setReceiptLink(link);

        setName("");
        setEmail("");
        setAmount("");
      } else {
        setMessage(data.error || "Donation failed");
        setReceiptLink("");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again later");
      setReceiptLink("");
    }
  };

  return (
    <div className="donation-container">
      {/* 🌸 Header Section */}
      <section className="donation-header">
        <h1> Support the Banjara Community </h1>
        <p>
          Every contribution you make helps preserve our rich Banjara heritage,
          empower our youth, and promote cultural programs that celebrate our
          traditions and unity.
        </p>
      </section>

      {/* ❤️ Explanation Section */}
      <section className="donation-about">
        <h2>Why Your Support Matters</h2>
        <p>
          The Banjara community is one of India’s oldest and most vibrant
          groups, known for its colorful attire, art, and music. Through your
          donation, we can:
        </p>
        <ul>
          <li>🎓 Provide education support for underprivileged Banjara children</li>
          <li>🎭 Organize cultural events and traditional dance festivals</li>
          <li>🏡 Help preserve Banjara language, art, and handicrafts</li>
          <li>💊 Support healthcare drives and welfare programs</li>
        </ul>

        <h2>మీ మద్దతు ఎందుకు అవసరం?</h2>
        <p>
          బంజారా సమాజం భారత్‌లోని అత్యంత పూరాతన మరియు రంగారంగాలైన సమూహాల్లో ఒకటి.
          వీరి ప్రత్యేకత రంగుల తుప్పకట్టలు, కళ, సంగీతం ద్వారా తెలుస్తుంది.
          మీ దానంతో, మనం ఈ క్రింది పనులు చేయగలము:
        </p>
        <ul>
          <li>🎓 విద్యా మద్దతు: ఆర్ధిక సమస్యల కారణంగా చదువుకోలేని బంజారా పిల్లల కోసం విద్యా సహాయం అందించడం</li>
          <li>🎭 సాంస్కృతిక కార్యక్రమాలు: సాంప్రదాయ నృత్య ఉత్సవాలు మరియు సాంస్కృతిక కార్యక్రమాలను నిర్వహించడం</li>
          <li>🏡 భాష, కళలు, హస్తకళలను రక్షించడం: బంజారా భాష, కళలు, మరియు హస్తకళలను నిలుపుకోవడం</li>
          <li>💊 ఆరోగ్య మరియు సంక్షేమ కార్యక్రమాలు: ఆరోగ్య శిబిరాలు, సంక్షేమ కార్యక్రమాలను నిర్వహించడం</li>
        </ul>
      </section>

      {/* 💰 Donation Form Section */}
      <section className="donation-form">
        <h2>Make a Donation</h2>
        <form onSubmit={handleDonate}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Donation Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="donate-btn">
            Donate Now
          </button>
        </form>

        {message && <p className="donation-message">{message}</p>}

        {receiptLink && (
          <a
            href={receiptLink}
            target="_blank"
            rel="noopener noreferrer"
            className="donation-receipt-link"
          >
            Download Receipt
          </a>
        )}
      </section>

      {/* 🌿 Footer */}
      <footer className="donation-footer">
        <p>Thank you for supporting our cause. Together, we can make a difference!</p>
      </footer>
    </div>
  );
}

export default Donation;
