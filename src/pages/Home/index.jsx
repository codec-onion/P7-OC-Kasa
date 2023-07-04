import HousingCard from '../../components/HousingCard'
import Banner from '../../components/Banner'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
  const [housing, setHousing] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/housing.json')
      .then((response) => response.json())
      .then((data) => setHousing(data))
      .catch((error) => error)
  }, [])

  return (
    <div className="home">
      <Banner className="banner--home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="home__housing">
        {housing.length !== 0 &&
          housing.map((housing) => (
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
