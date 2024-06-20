import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import './Styles/FullTable.css'

const FullTable = ({ fixtures }) => {
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

    const handleTable = () =>{
        navigate('/table')
      }

    return (
        <section className="fulltable__section">
            <table className="fulltable__table">
                <thead className="fulltable__head"> 
                    <tr className="fulltable__tr-head">
                        <th></th>
                        <th>Equipo</th>
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
                <tbody className="fulltable__body">
                    {parsedTable.map((team, index) => (
                        <tr className="fulltable__tr-body" key={index}>
                            <td>
                               <img src={teamLogos[team.Equipo]} alt={`${team.Equipo} logo`}  />
                            </td>
                            <td>{team.Equipo}</td>
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
            <div className='fulltable__button-container'>
                <button className='totable__button' onClick={handleTable}>Ver tabla completa</button>
          </div>
        </section>
    )
}

export default FullTable   