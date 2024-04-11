
const StatisticsPage = () => {
  return (
    <section className="fixture__details-info">
      
        <p>Árbitro: {fixture.fixture.referee}</p>
        <p>Estadio: {fixture.fixture.venue.name}, {fixture.fixture.venue.city}</p>
        
        {/* Otros detalles del partido */}
      </section>
  )
}

export default StatisticsPage