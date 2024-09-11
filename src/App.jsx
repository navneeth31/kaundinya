import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Contact from './components/contact/contact';
import Volunteer from './components/volunteer/Volunteer';
import Footer from './components/footer/Footer';
import GoToTop from './components/GoToTop/GoToTop';
import Headroom from 'react-headroom';

const App = () => {
  return (
    <Router>
    <Headroom>
      <Header />
    </Headroom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <GoToTop />
      <Footer/>
    </Router>
  );
};

export default App;
