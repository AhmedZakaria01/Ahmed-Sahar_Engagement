import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FormModal from "./components/FormModal"; // Ensure this path is correct
import Login from "./components/Auth/Login";
import MessagesViewer from "./components/MessagesViewer";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/private-login-boyka-sahar" element={<Login />} />
      <Route path="/messageViewer" element={<MessagesViewer />} />
    </Routes>
  );
}
