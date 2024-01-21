import "./App.css"
import Header from './components/common/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home"
import About from "./components/about/About"
import RepositoryHome from "./components/repositories/RepositoryHome"
import Footer from "./components/common/footer/Footer"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Team from "./components/team/Team"
import Login from "./components/login/Login"

const App = () => {
  return (
    <>
      <Router>
      <Header />
      <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/repositories" element={<RepositoryHome/>} />
             <Route path="/blog" element={<Blog/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/developer" element={<Team/>} />

  </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;