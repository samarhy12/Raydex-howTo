import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{ color: "#8B2C2C", fontSize: "48px", margin: "0 0 20px 0" }}
        >
          ✅ React is Working!
        </h1>
        <p style={{ fontSize: "18px", color: "#333", marginBottom: "10px" }}>
          Raydex How-To Platform
        </p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          If you see this, the frontend is loading correctly.
        </p>
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            <strong>Next Steps:</strong>
          </p>
          <ol
            style={{
              textAlign: "left",
              fontSize: "12px",
              color: "#666",
              marginTop: "10px",
            }}
          >
            <li>Check browser console (F12) for errors</li>
            <li>
              Verify all dependencies are installed: <code>npm install</code>
            </li>
            <li>Check if backend is running on port 5000</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
