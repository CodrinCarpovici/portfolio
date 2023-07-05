import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import CasePage from './components/CasePage';
import { useState, useEffect } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [openModal]);

  return (
    <div className="App">
      <Navbar setOpenModal={setOpenModal}/>
      <Header setOpenModal={setOpenModal}/>
      <Projects />
      <CasePage />
      <Contact open={openModal} onClose={() => setOpenModal(false)}/>
      <Footer />
    </div>
  );
}

export default App;
