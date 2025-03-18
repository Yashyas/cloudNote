import React,{ useContext} from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
    const a = useContext(noteContext)
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 p-2"
      style={{ background: "linear-gradient(to right, #0a0a0a, #1e1e1e)" }}
    >
      <div
        className="text-white text-center p-5 shadow-lg animate__animated animate__fadeIn"
        style={{
          background: "rgba(46, 46, 46, 0.8)", // Glassmorphism effect
          borderRadius: "15px",
          maxWidth: "700px",
          width: "90%",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 0px 20px rgba(40, 167, 69, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h1 className="mb-3 fw-bold text-success">Welcome to iNoteBook</h1>
        <p className="mb-4 fs-5" style={{ lineHeight: "1.8", color: "#ddd" }}>
          iNoteBook is a modern, secure, and efficient online notebook designed
          to help you capture, organize, and access your notes anytime,
          anywhere.
        </p>

        <div className="mb-4">
          <span className="badge bg-success fs-6 mx-1 px-3 py-2">Secure</span>
          <span className="badge bg-success fs-6 mx-1 px-3 py-2">Fast</span>
          <span className="badge bg-success fs-6 mx-1 px-3 py-2">
            Cloud Sync
          </span>
          <span className="badge bg-success fs-6 mx-1 px-3 py-2">
            User-Friendly
          </span>
        </div>

        <p className="fs-5" style={{ color: "#ccc" }}>
          Whether you're a student, professional, or creative thinker, iNoteBook
          keeps your ideas safe, organized, and always accessible. Name: {a.name} and he is in Class: {a.class}
        </p>

        <button className="btn btn-outline-success px-4 py-2 mt-4">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default About;
