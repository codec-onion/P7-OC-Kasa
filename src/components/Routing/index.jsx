import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Error from '../../pages/Error'

function Routing(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing
