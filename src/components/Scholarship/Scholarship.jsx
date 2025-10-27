

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Scholarship.css";

function ScholarshipForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    dob: "",
    aadhar: "",
    course: "",
    income: "",
    marks: "",
    purpose: "",
    file: null,
  });

  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!agreed) {
      setMessage("⚠️ Please agree to Terms & Conditions before proceeding.");
      return;
    }

    navigate("/scholarship-review", { state: { formData } });
  };

  return (
    <div className="scholarship-container">
      <h2>🎓 Scholarship Application Form</h2>

      <form className="scholarship-form" onSubmit={handleNext}>
        <label>Full Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Father's Name:</label>
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

        <label>Mother's Name:</label>
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Aadhaar Number:</label>
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required pattern="\d{12}" />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Course / Class:</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />

        <label>Annual Income (₹):</label>
        <input type="number" name="income" value={formData.income} onChange={handleChange} required />

        <label>Marks / Percentage (%):</label>
        <input type="number" name="marks" value={formData.marks} onChange={handleChange} required />

        <label>Upload Marksheet (PDF/JPG/PNG):</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />

        <label>Purpose of Scholarship:</label>
        <textarea name="purpose" value={formData.purpose} onChange={handleChange} required></textarea>


        {/* 🧾 Terms Section */}
        <div id="terms" className="terms-section">
          <h3>📜 Terms & Conditions</h3>
          <ul>
            <li>Applicants must be Indian citizens currently enrolled in a recognized educational institution.</li>
            <li>Only one scholarship exam attempt is allowed per academic year.</li>
            <li>Applicants must provide accurate and verifiable information in the application form.</li>
            <li>Fake or misleading details will result in immediate disqualification.</li>
            <li>The exam will be conducted online/offline as per the official schedule.</li>
            <li>Applicants scoring above the qualifying marks will be shortlisted for scholarship benefits.</li>
            <li>Scholarship decisions are final and cannot be challenged.</li>
          </ul>

          <h3>🎯 Eligibility Criteria</h3>
          <ul>
            <li>Minimum 60% marks in the last academic year.</li>
            <li>Family annual income must be below ₹2,50,000.</li>
            <li>Students from Class 10 to Post-Graduation are eligible to apply.</li>
            <li>Applicants must not be receiving any other major scholarship.</li>
          </ul>

          <p className="note">
            <strong>Note:</strong> By submitting this form, you agree to the Terms & Conditions.
          </p>
        </div>
        {message && <p className="response-msg">{message}</p>}

        <div className="checkbox-section">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="agree">
            I agree to the{" "}
            <a href="#terms" className="terms-link">Terms & Conditions</a>.
          </label>
        </div>

        <button type="submit" className="submit-btn">Next → Review</button>
      </form>
    </div>
  );
}

export default ScholarshipForm;
