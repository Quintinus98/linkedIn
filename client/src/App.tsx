// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import MyNetwork from "./pages/MyNetwork";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/feed" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
}

export default App;
