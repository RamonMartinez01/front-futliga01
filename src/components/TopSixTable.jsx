import './styles/TopSixTable.css'

const TopSixTable = ({ fixtures }) => {

    //Función para contar la cantidad de veces que aparece cada equipo
    const counTeamOccurrencesAndWins = () => {
        const teamOccurrences = {};
        const wins ={};
        const points ={};

        fixtures?.forEach((fixture) => {
            const homeTeamName = fixture.teams.home.name;
            const awayTeamName = fixture.teams.away.name;
            const homeWinner = fixture.teams.home.winner;
            const awayWinner = fixture.teams.away.winner;
            const homeTeamPoints = fixture?.goals.home; 
            const awayTeamPoints = fixture?.goals.away;

            //Incrementar la occurrencia del equipo local
            teamOccurrences[homeTeamName] = (teamOccurrences[homeTeamName] || 0) + 1;
            //Incrementar la ocurrencia del equipo visitante 
            teamOccurrences[awayTeamName] = (teamOccurrences[awayTeamName] || 0) + 1;
            
            //Incrementar las victorias del equipo local
            if (homeWinner) {
                wins[homeTeamName] = (wins[homeTeamName] || 0) + 1;
            }
            //Incrementar las victorias del equipo visitante
            if (awayWinner) {
                wins[awayTeamName] = (wins[awayTeamName] || 0) +1;
            }

              // Almacenar los puntos de cada equipo
            points[homeTeamName] = (points[homeTeamName] || 0) + homeTeamPoints;
            points[awayTeamName] = (points[awayTeamName] || 0) + awayTeamPoints;
        });

        //Ordenar los equipos por número de victorias (en orden descendente)
        const allTeams = Object.keys(teamOccurrences);
        const sortedTeams = allTeams.sort((a, b) => (wins[b] ||0) - (wins[a] || 0));

        return { teamOccurrences, wins, points, sortedTeams };
    };

    // Obtener el objeto con las ocurrencias de los equipos y sus victorias, 
    //así como los equipos ordenados
    const { teamOccurrences, wins, points, sortedTeams } = counTeamOccurrencesAndWins();

    // Función para obtener el URL del logotipo de un equipo
  const getTeamLogoUrl = (teamName) => {
    const fixture = fixtures?.find(
      (fixture) => fixture.teams.home.name === teamName || fixture.teams.away.name === teamName
    );
    if (fixture) {
      return fixture.teams.home.name === teamName ? fixture.teams.home.logo : fixture.teams.away.logo;
    }
    return null; // Si no se encuentra el logotipo, retornar null
  };
   // Tomar solo las primeras seis posiciones
    const topSixTeams = sortedTeams.slice(0, 15);

  return (
    <div className="table__container">
      <table className="table__section">
        <thead className="table__header">
          <tr className="table__tr-header01">
            <th className="th__index"></th>
            <th className="th__logo">Equipo</th>
            <th className="th__name"></th>
          </tr>
          <tr className="table__tr-header02">
            <th className="th__played">J</th>
            <th className="th__wins">G</th>
            <th className="th__losses">P</th>
            <th className="th__points">Pts</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {topSixTeams.map((team, index) => (
            <tr className="table__tr-body" key={team}>
              <td className="td__index">{index + 1}</td>
              <td className="td__logo">
                {getTeamLogoUrl(team) && (
                  <img src={getTeamLogoUrl(team)} alt={`Logotipo ${team}`} style={{ width: 30 }} />
                )}
              </td>
              <td className="td__name">{team}</td>
              <td className="td__played">{teamOccurrences[team]}</td>
              <td className="td__wins">{wins[team] || 0}</td>
              <td className="td__losses">{teamOccurrences[team] - (wins[team] || 0)}</td>
              <td className="td__points">{points[team] || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSixTable