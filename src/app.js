import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main/main';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Faq from './pages/faq';
import Services from './pages/services/main';
import Contact from './pages/contact';
import Privacy from './pages/privacy';
import About from './pages/about/about/main';
import P404 from './pages/404';
import Test from './pages/main/test';
import Webservice from './pages/services/web/main';
import Blockchain from './pages/services/web/blockchain/main';

const App = (props) => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Webservice" element={<Webservice />} />
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route path="/*" element={<P404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
