import React, { useState } from "react";
import NoteContext from "./noteContext";

const host = "https://cloudnote-backend-huec.onrender.com/api/";
const authToken =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiYzQ1YTljMThjNGM2OTQwNGI5YTZkIn0sImlhdCI6MTc0MjMzNTk0OH0.qWwAegdanQcA2dLQ0TotQmHGoC3W5P_5PYDhSG46fo4";
const NoteState = (props) => {
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  // fetch notes
  const fetchNote = async (title, description, tag) => {
    // api
    const response = await fetch(`${host}notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // addNote function
  const addNote = async (title, description, tag) => {
    // api
    const response = await fetch(`${host}notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    // logic
    let note = {
      _id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5), // ✅ More unique ID
      user: "67bc45a9c18c4c69404b9a6d",
      title: title,
      description: description,
      tag: tag,
      date: Date.now().toString(),
      __v: 0,
    };

    setNotes((prevNotes) => [...prevNotes, note]); // ✅ Use spread operator instead of .concat()
  };

  // delete
  const deleteNote = async (id) => {
    // API call 
    const response = await fetch(`${host}notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
    });
    const json = await response.json();
    setNotes(json);
    // logic 
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };
  // update
  const updateNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json =await response.json();
    // setNotes(json);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      )
    );

    // logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
