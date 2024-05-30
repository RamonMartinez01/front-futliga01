import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/FixtureSummary.css'; 

const FixtureSummary = ({ fixtures }) => {
  const { id } = useParams();
  const fixture = fixtures.find((f) => f.fixture.id === parseInt(id));

  const { data: matchNote, loading, error } = useFetch(`http://64.23.243.233:6969/v1/match_note`);
    console.log(matchNote);
  if (!fixture) {
    return <div>Fixture not found</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    
    /*// Function to render match note details
const renderMatchNote = (note) => {
    // Check if note is defined and contains the note property
    if (!note || !note.note) {
      // If note is undefined or does not contain the note property, return a default message
      return <p>No additional notes available</p>;
    }
  
    // Split the text based on the newline character '\n'
    const paragraphs = note.note.split('\n') || [];
  
    // Map over the resulting array, wrapping each segment in a <p> tag and assigning a unique key
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };*/

  return (
    <div className="fixture-summary">
        <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/list">Partidos</Link> / <span>Resumen del Partido</span>
      </nav>
      <div className="fixture-summary__header">
        <h1>{fixture.teams.home.name} vs {fixture.teams.away.name}</h1>
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