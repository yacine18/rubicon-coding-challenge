import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
