import { Link } from 'react-router-dom'
import K from '../../assets/logo/k.png'
import House from '../../assets/logo/house.png'
import S from '../../assets/logo/s.png'
import A from '../../assets/logo/a.png'
import '../../index.css'

function Header() {
  return (
    <header>
      <div>
        <img src={K} alt="le k du logo" />
        <img src={House} alt="la maison du logo" />
        <img src={S} alt="le s du logo" />
        <img src={A} alt="le dernier du logo" />
      </div>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
      </div>
    </header>
  )
}

export default Header
