import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chats" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
