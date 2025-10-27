import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Review.css";

function ScholarshipReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    return <p>No data found. Please fill the form first.</p>;
  }

  const handleFinalSubmit = async () => {
    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:3200/api/scholarship/apply", {
        method: "POST",
        body: dataToSend,
      });

      const data = await response.json();
      alert(data.message);
      navigate("/"); // Redirect after success
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Failed to submit. Try again.");
    }
  };

  return (
    <div className="review-container">
      <h2>📝 Review Your Application</h2>

      <div className="review-details">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Father’s Name:</strong> {formData.fatherName}</p>
        <p><strong>Mother’s Name:</strong> {formData.motherName}</p>
        <p><strong>DOB:</strong> {formData.dob}</p>
        <p><strong>Aadhaar:</strong> {formData.aadhar}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Course:</strong> {formData.course}</p>
        <p><strong>Income:</strong> ₹{formData.income}</p>
        <p><strong>Marks:</strong> {formData.marks}%</p>
        <p><strong>Purpose:</strong> {formData.purpose}</p>
        <p><strong>File:</strong> {formData.file?.name}</p>
      </div>

      <div className="review-buttons">
        <button onClick={() => navigate(-1)} className="back-btn">← Edit</button>
        <button onClick={handleFinalSubmit} className="final-btn">✅ Final Submit</button>
      </div>
    </div>
  );
}

export default ScholarshipReview;
