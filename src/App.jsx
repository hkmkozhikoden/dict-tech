import './App.css'
import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Blog from './pages/blog';
import Protfolio from './pages/protfolio';
import Contact from './pages/contact';
import '../src/assets/style/modules/aos/aos.css'
import '../src/assets/style/modules/boostrap/bootstrap.css'
function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/portfolio" element={<Protfolio/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
