import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import NoteState from "./context/notes/NoteState";
import UserNotes from "./components/Usernotes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notes" element={<Notes/>} />
            <Route path="/Usernotes" element={<UserNotes/>} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
