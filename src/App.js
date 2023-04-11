import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Case from './components/Case';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Case />
      <Footer />
    </div>
  );
}

export default App;
