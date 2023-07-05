import "./App.scss";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CasePage from "./components/CasePage";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [openModal]);

  return (
    <div className="App">
      <Navbar setOpenModal={setOpenModal} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header id="home" setOpenModal={setOpenModal} />
              <Projects />
            </>
          }
        ></Route>
      </Routes>

      <CasePage />
      <Contact open={openModal} onClose={() => setOpenModal(false)} />
      <Footer />
    </div>
  );
}

export default App;
