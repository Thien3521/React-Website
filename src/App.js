import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
