import FullStar from '../../assets/full-star.png'
import EmptyStar from '../../assets/empty-star.png'

function HostProfile(props) {
  const hostNameSplit = props.hostName.split(' ')

  const numberOfStars = parseInt(props.hostRating)
  let fullStars = []
  for (let i = 0; i < numberOfStars; i++) {
    fullStars.push(
      <img key={`Etoile pleine ${i}`} src={FullStar} alt="étoile pleine" />
    )
  }
  let emptyStars = []
  for (let i = 0; i < 5 - numberOfStars; i++) {
    emptyStars.push(
      <img key={`Etoile vide ${i}`} src={EmptyStar} alt="étoile vide" />
    )
  }

  return (
    <div className="host-profile">
      <p>
        {hostNameSplit[0]}
        <br />
        {hostNameSplit[1]}
        <img src={props.hostPicture} alt="L'hôte de ce logement" />
      </p>
      <div>
        {fullStars}
        {emptyStars}
      </div>
    </div>
  )
}

export default HostProfile
