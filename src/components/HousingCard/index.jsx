import { Link } from 'react-router-dom'

function HousingCard(props) {
  return (
    <Link
      className="housing-card"
      to={`/housingsheet/${props.id}`}
      style={{
        backgroundImage: `linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0.7) 100%), url(${props.cover})`,
      }}
    >
      <p>{props.title}</p>
    </Link>
  )
}

export default HousingCard
