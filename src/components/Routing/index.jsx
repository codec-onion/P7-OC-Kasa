import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../../pages/Home'
import HousingSheet from '../../pages/HousingSheet'
import About from '../../pages/About'
import Error from '../../pages/Error'

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housingsheet/:idHousing" element={<HousingSheet />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing
