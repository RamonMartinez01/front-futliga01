import './styles/LeagueTable.css'

const LeagueTable = ({ fixtures }) => {

    // Función para contar la cantidad de veces que aparece cada equipo
    const countTeamOccurrencesAndWins = () => {
     const teamOccurrences = {};
     const wins = {};
     //const losses = {}; 

     fixtures?.forEach(fixture => {
      const homeTeamName = fixture?.teams.home.name;
      const awayTeamName = fixture?.teams.away.name;
      const homeWinner = fixture?.teams.home.winner;
      const awayWinner = fixture?.teams.away.winner; 

      // Incrementar la ocurrencia del equipo local
      teamOccurrences[homeTeamName] = (teamOccurrences[homeTeamName] || 0) + 1;
      // Incrementar la ocurrencia del equipo visitante
      teamOccurrences[awayTeamName] = (teamOccurrences[awayTeamName] || 0) + 1;
    // Incrementar las victorias del equipo local
    if (homeWinner) {
      wins[homeTeamName] = (wins[homeTeamName] || 0) + 1;
  } 
  // Incrementar las victorias del equipo visitante
  if (awayWinner) {
      wins[awayTeamName] = (wins[awayTeamName] || 0) + 1;
  }
});

// Ordenar los equipos por número de victorias (en orden descendente)
const allTeams = Object.keys(teamOccurrences)
const sortedTeams = allTeams.sort((a, b) => (wins[b] || 0) - (wins[a] || 0));

return { teamOccurrences, wins, sortedTeams };
};

// Obtener el objeto con las ocurrencias de los equipos y sus victorias, así como los equipos ordenados
const { teamOccurrences, wins, sortedTeams } = countTeamOccurrencesAndWins();

// Función para obtener la URL del logotipo de un equipo
const getTeamLogoUrl = (teamName) => {
  const fixture = fixtures?.find(
      (fixture) => fixture.teams.home.name === teamName || fixture.teams.away.name === teamName
  );
  if (fixture) {
      return fixture.teams.home.name === teamName ? fixture.teams.home.logo : fixture.teams.away.logo;
  }
  return null; // Si no se encuentra el logotipo, retornar null
};

   
   return (
     <div className="table__container">
       <h2 className="table__tittle"></h2>
       <table className="table__section">
         <thead className="table__header">
           <tr className="table__tr-header">
            <th className="th__index"></th>
            <th className="th__logo">Equipo</th>
            <th className="th__name"></th>
            <th className="th__played">J</th>
            <th className="th__wins">G</th>
            <th className="th__losses">P</th>
           </tr>
         </thead>
         <tbody className="table__body">
          {/* Iterar sobre los equipos ordenados y construir las filas de la tabla */}
                    {sortedTeams.map((team, index) => (
                        <tr className="table__tr-body" key={team}>
                            <td className="td__index">{(index + 1).toString()}</td>
                            <td className="td__logo">
                                {getTeamLogoUrl(team) && (
                                    <img src={getTeamLogoUrl(team)} alt={`Logotipo ${team}`} style={{ width: 30 }} />
                                )}
                            </td>
                            <td className="td__name">{(team).toString()}</td>
                            <td className="td__played">{(teamOccurrences[team]).toString()}</td>
                            <td className="td__wins">{(wins[team] || 0).toString()}</td>
                            <td className="td__losses">{(teamOccurrences[team] - (wins[team] || 0)).toString()}</td>
                        </tr>
                    ))}
         </tbody>
       </table>
     </div>
   );
   };
   
   export default LeagueTable;