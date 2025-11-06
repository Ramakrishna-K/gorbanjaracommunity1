import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        window.location.href = "/";
        return;
      }

      try {
        const res = await fetch("https://gorbanjaracommunity-production.up.railway.app/api/auth/profile", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          alert(data.message || "Failed to fetch profile");
        }
      } catch (err) {
        alert("Server not responding");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-card">
            <p><strong>User ID:</strong> {user.user_id}</p> 

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Created On:</strong> {new Date(user.created_at).toLocaleString()}</p>
        </div>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
}

export default Profile;
