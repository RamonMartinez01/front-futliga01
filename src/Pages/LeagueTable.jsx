
const LeagueTable = ({ fixtures }) => {
  // Paso 1: Calcular el número de partidos jugados por cada equipo
  const gamesPlayed = {};
 /* fixtures.forEach(fixture => {
    const homeTeamId = fixture.teams.home.id;
    const awayTeamId = fixture.teams.away.id;

    if (!gamesPlayed[homeTeamId]) {
      gamesPlayed[homeTeamId] = 1;
    } else {
      gamesPlayed[homeTeamId]++;
    }

    if (!gamesPlayed[awayTeamId]) {
      gamesPlayed[awayTeamId] = 1;
    } else {
      gamesPlayed[awayTeamId]++;
    }
  });*/

  /*// Paso 2: Calcular el número de partidos ganados por cada equipo
  const wins = {};
  fixtures.forEach(fixture => {
    const homeTeamId = fixture.teams.home.id;
    const awayTeamId = fixture.teams.away.id;
    const homeTeamWon = fixture.teams.home.winner;
    const awayTeamWon = fixture.teams.away.winner;

    if (homeTeamWon) {
      if (!wins[homeTeamId]) {
        wins[homeTeamId] = 1;
      } else {
        wins[homeTeamId]++;
      }
    }

    if (awayTeamWon) {
      if (!wins[awayTeamId]) {
        wins[awayTeamId] = 1;
      } else {
        wins[awayTeamId]++;
      }
    }
  });*/

  // Paso 3: Construir la tabla de posiciones
  /*const sortedTeams = Object.keys(wins).sort((a, b) => wins[b] - wins[a]);

  return (
    <div className="league-table">
      <h2>League Table</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Games Played</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map(teamId => (
            <tr key={teamId}>
              <td>{fixtures.find(fixture => fixture.teams.home.id === parseInt(teamId)).teams.home.name}</td>
              <td>{gamesPlayed[teamId]}</td>
              <td>{wins[teamId] || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );*/
};

export default LeagueTable;