import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  // ✅ Fixed handleClick
  const handleClick = (e) => {
    e.preventDefault();  // ✅ Prevents page refresh
    addNote(note.title, note.description, note.tag);

    // ✅ Clear input fields after adding
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="card text-white shadow-lg p-4 w-75 max-w-600"
        style={{
          backgroundColor: "#000",
          border: "2px solid #28a745",
          borderRadius: "10px",
        }}
      >
        <div className="card-body">
          <h1 className="card-title text-success fw-bold text-center">Add a Note</h1>
          <form onSubmit={handleClick}>  {/* ✅ Form should handle submission */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                htmlFor="title"
                value={note.title}
                className="form-control"
                placeholder="Enter note title"
                style={{ backgroundColor: "#3a3a3a", color: "white", border: "none" }}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                htmlFor="description"
                value={note.description}
                rows="3"
                placeholder="Enter note description"
                style={{ backgroundColor: "#3a3a3a", color: "white", border: "none" }}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Tag</label>
              <input
                type="text"
                id="tag"
                name="tag"
                htmlFor="tag"
                value={note.tag}
                className="form-control"
                placeholder="Enter tag (optional)"
                style={{ backgroundColor: "#3a3a3a", color: "white", border: "none" }}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notes;
