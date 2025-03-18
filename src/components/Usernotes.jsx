import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const UserNotes = () => {
  const context = useContext(noteContext);
  const { notes, deleteNote, fetchNote, updateNote } = context;

  // Fetch notes on component mount
  useEffect(() => {
    fetchNote();
  }, []);

  // State for the selected note
  const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" });

  // Function to set selected note when "Update" or "View" is clicked
  const handleEditClick = (currentNote) => {
    setNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag });
  };

  // Function to handle updates
  const handleUpdate = () => {
    updateNote(note.id, note.title, note.description, note.tag);
  };

  // Function to update input fields
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div 
      className="d-flex flex-column align-items-center min-vh-100 py-5"
      style={{ background: "linear-gradient(to right, #0a0a0a, #1e1e1e)", color: "white" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-success">Your Notes</h2>
          <Link to="/notes" className="btn btn-success">+ Create New Note</Link> 
        </div>

        <div className="row">
          {notes.length > 0 ? (
            notes.map((note) => (
              <div key={note._id} className="col-md-4 mb-4">
                <div className="card h-100 shadow p-3"
                  style={{
                    backgroundColor: "#2e2e2e",
                    border: "2px solid #28a745",
                    borderRadius: "10px",
                  }}
                >
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-success">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <span className="badge bg-success px-1 mb-3">{note.tag}</span>
                    <div className="mt-auto d-flex justify-content-between">
                      {/* View button to open View Modal */}
                      <button className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#viewNoteModal" onClick={() => handleEditClick(note)}>
                        View
                      </button>

                      {/* Update button to open Update Modal */}
                      <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editNoteModal" onClick={() => handleEditClick(note)}>
                        Edit
                      </button>

                      {/* Delete button */}
                      <button className="btn btn-danger btn-sm" onClick={() => deleteNote(note._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-center text-white mt-4">No notes available. Click "Create New Note" to add one.</h4>
          )}
        </div>
      </div>

      {/* View Note Modal */}
      <div className="modal fade" id="viewNoteModal" tabIndex="-1" aria-labelledby="viewNoteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-white" style={{ backgroundColor: "#2e2e2e", border: "2px solid #28a745", borderRadius: "10px" }}>
            <div className="modal-header border-success">
              <h5 className="modal-title text-success" id="viewNoteModalLabel">View Note</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5 className="text-success">{note.title}</h5>
              <p>{note.description}</p>
              <span className="badge bg-success px-2">{note.tag}</span>
            </div>
            <div className="modal-footer border-success">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              {/* Edit button inside View Modal → Opens Edit Modal */}
              <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editNoteModal">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Note Modal */}
      <div className="modal fade" id="editNoteModal" tabIndex="-1" aria-labelledby="editNoteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-white" style={{ backgroundColor: "#2e2e2e", border: "2px solid #28a745", borderRadius: "10px" }}>
            <div className="modal-header border-success">
              <h5 className="modal-title text-success" id="editNoteModalLabel">Edit Note</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control bg-dark text-white border-0" name="title" value={note.title} onChange={onChange} placeholder="Enter note title" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control bg-dark text-white border-0" name="description" value={note.description} onChange={onChange} placeholder="Enter note description"></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Tag</label>
                <input type="text" className="form-control bg-dark text-white border-0" name="tag" value={note.tag} onChange={onChange} placeholder="Enter tag (optional)" />
              </div>
            </div>
            <div className="modal-footer border-success">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserNotes;
