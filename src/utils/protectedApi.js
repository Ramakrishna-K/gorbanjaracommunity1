// Protected API call helper
export const protectedFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You are not logged in!");
    throw new Error("No token found");
  }

  try {
    const res = await fetch(endpoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // attach JWT
        ...(options.headers || {}),
      },
    });

    const data = await res.json();

    if (!res.ok) {
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
