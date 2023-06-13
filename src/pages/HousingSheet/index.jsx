import { useParams } from 'react-router-dom'
import { housing } from '../../utils/housing'
import Slideshow from '../../components/Slideshow'

function HousingSheet() {
  const { idHousing } = useParams()
  const currentHousing = housing.find((element) => idHousing === element.id)

  return (
    <div className="housing-sheet">
      <Slideshow pictures={currentHousing.pictures} />
    </div>
  )
}

export default HousingSheet
