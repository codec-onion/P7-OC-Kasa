import { housing } from '../../utils/housing'
import CardHousing from '../../components/CardHousing'
import Banner from '../../components/Banner'

function Home() {
  return (
    <div className="home">
      <Banner className="banner--home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="home__housing">
        {housing.map((housing) => (
          <CardHousing
            className="housing-card"
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
