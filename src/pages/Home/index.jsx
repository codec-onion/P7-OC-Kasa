import HousingCard from '../../components/HousingCard'
import Banner from '../../components/Banner'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
  const [housingData, setHousingData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/housing.json')
      .then((response) => response.json())
      .then((data) => setHousingData(data))
      .catch((error) => error)
  }, [])

  return (
    <div className="home">
      <Banner className="banner--home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="home__housing">
        {housingData.length !== 0 &&
          housingData.map((housing) => (
            <HousingCard
              id={housing.id}
              cover={housing.cover}
              title={housing.title}
              key={`${housing.id}`}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
