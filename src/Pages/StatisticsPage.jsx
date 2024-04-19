
const StatisticsPage = ({ fixtures }) => {

   // Función para contar la cantidad de veces que aparece cada equipo
   const countTeamOccurrences = () => {
    const teamOccurrences = {};
    fixtures.forEach(fixture => {
      const homeTeamName = fixture.teams.home.name;
      const awayTeamName = fixture.teams.away.name;
      // Incrementar la ocurrencia del equipo local
      teamOccurrences[homeTeamName] = (teamOccurrences[homeTeamName] || 0) + 1;
      // Incrementar la ocurrencia del equipo visitante
      teamOccurrences[awayTeamName] = (teamOccurrences[awayTeamName] || 0) + 1;
    });
    return teamOccurrences;
  };

  // Obtener el objeto con las ocurrencias de los equipos
  const teamOccurrences = countTeamOccurrences();

  return (
    <section className="fixture__details-info">
      <h2>Estdisticas</h2>
      <h2>Tabla de equipos y ocurrencias</h2>
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Ocurrencias</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterar sobre el objeto teamOccurrences y construir las filas de la tabla */}
          {Object.entries(teamOccurrences).map(([teamName, occurrences]) => (
            <tr key={teamName}>
              <td>{teamName}</td>
              <td>{occurrences}</td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* <p>Árbitro: {fixture.fixture.referee}</p>
        <p>Estadio: {fixture.fixture.venue.name}, {fixture.fixture.venue.city}</p>
        
        {/* Otros detalles del partido */}
      </section>
  )
}

export default StatisticsPage