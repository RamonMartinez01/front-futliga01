import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/FixtureSummary.css'; 

const FixtureSummary = ({ fixtures }) => {
  const { id } = useParams();
  const fixture = fixtures.find((f) => f.fixture.id === parseInt(id));

  const { data: matchNote, loading, error } = useFetch(`https://proxy-futliga01.onrender.com/api/match_note`);
  
  if (!fixture) {
    return <div>Fixture not found</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    
  return (
    <div className="fixture-summary">
        <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/list">Partidos</Link> / <span>Resumen del Partido</span>
      </nav>
      <div className="fixture-summary__header">
        <span className="fixture-summary__logo">
                <img src={fixture.teams.home.logo} alt="" />
        </span>
        <h1>{fixture.teams.home.name} vs {fixture.teams.away.name}</h1>
        <span className="fixture-summary__logo">
              <img src={fixture.teams.away.logo} alt="" />
        </span>
      </div>
      <div className="fixture-summary__details">
        <div className="fixture-summary__details-item">
          <span>Fecha:</span> <span>{new Date(fixture.fixture.date).toLocaleString()}</span>
        </div>
        <div className="fixture-summary__details-item">
          <span>Sede:</span> <span>{fixture.fixture.venue.name}, {fixture.fixture.venue.city}</span>
        </div>
        <div className="fixture-summary__details-item">
          <span>Árbitro:</span> <span>{fixture.fixture.referee}</span>
        </div>
        <div className="fixture-summary__details-item">
          <span>Marcador:</span> <span>{fixture.goals.home} - {fixture.goals.away}</span>
        </div>
       {/* Render additional match note details */}
        <div className="fixture-summary__match-note">
          <span className="fixture-summary__match-note-title">Nota del Parido:</span>
          <div className="fixture-summary__match-note-content">
             {matchNote}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixtureSummary;