import { useParams } from 'react-router-dom'
import { housing } from '../../utils/housing'
import Slideshow from '../../components/Slideshow'
import HousingInfo from '../../components/HousingInfo'
import HostProfile from '../../components/HostProfile'
import Collapse from '../../components/Collapse'
import Error from '../Error'

function HousingSheet() {
  const { idHousing } = useParams()
  const currentHousing = housing.find((element) => idHousing === element.id)

  if (!currentHousing) {
    return <Error />
  }

  return (
    <div className="housing-sheet">
      <Slideshow pictures={currentHousing.pictures} />
      <div className="housing-sheet__info">
        <HousingInfo
          housingTitle={currentHousing.title}
          housingLocation={currentHousing.location}
          housingTags={currentHousing.tags}
        />
        <HostProfile
          hostName={currentHousing.host.name}
          hostPicture={currentHousing.host.picture}
          hostRating={currentHousing.rating}
        />
      </div>
      <div className="housing-sheet__details">
        <Collapse
          title="Description"
          content={currentHousing.description}
          globalClassName="collapse collapse--housing-sheet"
          id={`collapse-0`}
        />
        <Collapse
          title="Équipements"
          content={currentHousing.equipments}
          globalClassName="collapse collapse--housing-sheet"
          id={`collapse-1`}
        />
      </div>
    </div>
  )
}

export default HousingSheet
