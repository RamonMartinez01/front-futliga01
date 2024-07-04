import { useNavigate } from 'react-router-dom';
import './styles/LeagueTable.css'
import useFetch from '../hooks/useFetch';

const LeagueTable = ({ fixtures }) => {

  const navigate = useNavigate()

  const { data: generalTable, loading, error } = useFetch(`https://proxy-futliga01.onrender.com/api/general_table`);
  if (!fixtures) {
      return <div>Fixture not found</div>;
  }

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  const parsedTable = JSON.parse(generalTable);

  // Create a map of team names to their logos
  const teamLogos = {};
  fixtures.forEach(fixture => {
      const homeTeam = fixture.teams.home;
      const awayTeam = fixture.teams.away;
      if (!teamLogos[homeTeam.name]) {
          teamLogos[homeTeam.name] = homeTeam.logo;
      }
      if (!teamLogos[awayTeam.name]) {
          teamLogos[awayTeam.name] = awayTeam.logo;
      }
  });

  /*const handleTable = () =>{
      navigate('/table')
    }*/

      return (
        <section className="leaguetable__section">
            <section className="leaguetable__container">
                <table className="leaguetable__table01">
                    <thead className="leaguetable__head01"> 
                        <tr className="leaguetable__tr-head01">
                            <th className='leaguetable__logo'></th>
                            <th className='leaguetable__th01'>Equipo</th>
                        </tr>
                    </thead>
                    <tbody className="leaguetable__body01">
                        {parsedTable.map((team, index) => (
                            <tr className="leaguetable__tr-body01" key={index}>
                                <td className='td__logo'>
                                    <img src={teamLogos[team.Equipo]} alt={`${team.Equipo} logo`} />
                                </td>
                                <td>{team.Equipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='leaguetable__table-scroll'>
                    <table className="leaguetable__table">
                        <thead className="leaguetable__head"> 
                            <tr className="leaguetable__tr-head">
                                <th>JJ</th>
                                <th>JG</th>
                                <th>JE</th>
                                <th>JP</th>
                                <th>Pts</th>
                                <th>DG</th>
                                <th>GF</th>
                                <th>GC</th>
                            </tr>
                        </thead>
                        <tbody className="leaguetable__body">
                            {parsedTable.map((team, index) => (
                                <tr className="leaguetable__tr-body" key={index}>
                                    <td>{team.JJ}</td>
                                    <td>{team.JG}</td>
                                    <td>{team.JE}</td>
                                    <td>{team.JP}</td>
                                    <td>{team.Pts}</td>
                                    <td>{team.DG}</td>
                                    <td>{team.GF}</td>
                                    <td>{team.GC}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    )
}
   
   export default LeagueTable;