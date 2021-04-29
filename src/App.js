import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Brands from './components/Brands/Brands';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Faq from './components/FAQ/Faq';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
export const FooterHeightContext = createContext();

function App() {
  const [height, setHeight] = useState(0);
  return (
    <FooterHeightContext.Provider value={[height, setHeight]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/brandsandagencies">
              <Brands />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/howitworks">
              <HowItWorks />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
    </FooterHeightContext.Provider>
  );
}

export default App;
