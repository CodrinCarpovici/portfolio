import { lazy, Suspense } from "react";
import "./App.scss";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import data from "./components/data";
import Loader from "./components/Loader";

const Header = lazy(() => import("./components/Header"));
const Projects = lazy(() => import("./components/Projects"));
const CasePage = lazy(() => import("./components/CasePage"));
const Footer = lazy(() => import("./components/Footer"));

//FIX Projects path

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
            <Suspense fallback={<Loader />}>
              <Header id="home" setOpenModal={setOpenModal} />
              <Projects id="projects-section" />
            </Suspense>
          }
        ></Route>

        {data.map((caseData) => (
          <Route
            key={caseData.title}
            path={`/projects/${caseData.title}`}
            element={
              <Suspense fallback={<Loader />}>
                <CasePage caseData={caseData} />
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Contact open={openModal} onClose={() => setOpenModal(false)} />
      <Suspense fallback={<Loader />}>
        <Footer setOpenModal={setOpenModal} />
      </Suspense>
    </div>
  );
}

export default App;
