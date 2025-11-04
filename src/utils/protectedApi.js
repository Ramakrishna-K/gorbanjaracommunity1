// // Protected API call helper
// export const protectedFetch = async (endpoint, options = {}) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     alert("You are not logged in!");
//     throw new Error("No token found");
//   }

//   try {
//     const res = await fetch(endpoint, {
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`, // attach JWT
//         ...(options.headers || {}),
//       },
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       if (res.status === 401 || res.status === 403) {
//         localStorage.removeItem("token");
//         localStorage.removeItem("userId");
//         localStorage.removeItem("name");
//         alert("⚠️ Unauthorized! Please login again.");
//       }
//       throw new Error(data.message || "Error fetching protected data");
//     }

//     return data;
//   } catch (err) {
//     console.error("Protected fetch error:", err);
//     throw err;
//   }
// };



// front/src/utils/api.js

// 🌐 Base backend URL (update this to your actual domain)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3200";

/**
 * 🔐 Protected API call helper — used for secured routes that need a JWT
 */
export const protectedFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("⚠️ You are not logged in!");
    throw new Error("No token found");
  }

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // attach JWT
        ...(options.headers || {}),
      },
      credentials: "include", // include cookies if backend uses them
    });

    const data = await res.json();

    if (!res.ok) {
      // Handle expired or invalid token
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("name");
        alert("⚠️ Unauthorized! Please login again.");
      }
      throw new Error(data.message || "Error fetching protected data");
    }

    return data;
  } catch (err) {
    console.error("Protected fetch error:", err);
    throw err;
  }
};

/**
 * 🌍 Google Login API call — public route, no token needed
 */
export async function callGoogleLogin() {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/google-login`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // credentials: "include" // enable if backend sets cookies
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("callGoogleLogin failed:", err);
    throw err;
  }
}
