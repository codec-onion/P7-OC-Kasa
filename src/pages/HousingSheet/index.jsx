import { useParams } from 'react-router-dom'

function HousingSheet() {
  const { idHousing } = useParams()

  return (
    <div>
      <p>Ceci est la page du logement ayant pour id: {idHousing}</p>
    </div>
  )
}

export default HousingSheet
