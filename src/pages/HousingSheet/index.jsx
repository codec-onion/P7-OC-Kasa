import { useParams } from 'react-router-dom'
import { housing } from '../../utils/housing'
import Slideshow from '../../components/Slideshow'
import FullStar from '../../assets/full-star.png'
import EmptyStar from '../../assets/empty-star.png'
import Error from '../Error'

function HousingSheet() {
  const { idHousing } = useParams()
  const currentHousing = housing.find((element) => idHousing === element.id)

  if (!currentHousing) {
    return <Error />
  }

  const numberOfStars = parseInt(currentHousing.rating)
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
    <div className="housing-sheet">
      <Slideshow pictures={currentHousing.pictures} />
      <div className="housing-sheet__info">
        <div className="housing-sheet__info__title">
          <h1>{currentHousing.title}</h1>
          <p>{currentHousing.location}</p>
          {currentHousing.tags.map((element, index) => (
            <span key={`${element}-${index}`}>{element}</span>
          ))}
        </div>
        <div className="housing-sheet__info__host">
          <p>
            {currentHousing.host.name}
            <img
              src={currentHousing.host.picture}
              alt="L'hôte de ce logement"
            />
          </p>
          <div>
            {fullStars}
            {emptyStars}
          </div>
        </div>
      </div>
      <div className="housing-sheet__details"></div>
    </div>
  )
}

export default HousingSheet
