import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddExpPage from "./pages/AddExpPage";
import ArchivePageWrapper from "./pages/ArchivePage";
import DetailPageWrapper from "./pages/DetailPage";
import HomePageWrapper from "./pages/HomePage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Exp App</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/add" element={<AddExpPage />} />
          <Route path="/exps/:id" element={<DetailPageWrapper />} />
          <Route path="/archive" element={<ArchivePageWrapper />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
