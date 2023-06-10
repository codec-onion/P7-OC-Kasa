import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.png'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header>
      <div>
        <img src={Logo} alt="logo de kasa" />
      </div>
      <nav>
        <Link
          to="/"
          className={
            location.pathname === '/' ? 'header-link active' : 'header-link'
          }
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === '/about'
              ? 'header-link active'
              : 'header-link'
          }
        >
          À propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
