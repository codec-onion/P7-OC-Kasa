import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import HousingInfo from '../../components/HousingInfo'
import HostProfile from '../../components/HostProfile'
import Collapse from '../../components/Collapse'
import Error from '../Error'
import { useState, useEffect } from 'react'

function HousingSheet() {
  const { idHousing } = useParams()
  const [currentHousingData, setCurrentHousingData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/housing.json')
      .then((response) => response.json())
      .then((data) => {
        const currentHousing = data.find((element) => idHousing === element.id)
        setCurrentHousingData(currentHousing)
      })
      .catch((error) => error)
  }, [idHousing])

  if (!currentHousingData) {
    return <Error />
  }

  return (
    <div className="housing-sheet">
      {Object.keys(currentHousingData).length !== 0 && (
        <>
          <Slideshow pictures={currentHousingData.pictures} />
          <div className="housing-sheet__info">
            <HousingInfo
              housingTitle={currentHousingData.title}
              housingLocation={currentHousingData.location}
              housingTags={currentHousingData.tags}
            />
            <HostProfile
              hostName={currentHousingData.host.name}
              hostPicture={currentHousingData.host.picture}
              hostRating={currentHousingData.rating}
            />
          </div>
          <div className="housing-sheet__details">
            <Collapse
              title="Description"
              content={currentHousingData.description}
              globalClassName="collapse collapse--housing-sheet"
            />
            <Collapse
              title="Équipements"
              content={currentHousingData.equipments}
              globalClassName="collapse collapse--housing-sheet"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default HousingSheet
