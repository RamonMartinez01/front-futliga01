import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MatchPcDetails from "./MatchPcDetails";
import "./Styles/FixturePc.css"
 
const PAGE_SIZE = 20;
const FixturePc = ({ fixtures }) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [groupedFixtures, setGroupedFixtures] = useState({});
    const navigate = useNavigate();

    const groupFixturesByDate = (fixtures) => {
      return fixtures.reduce((acc, fixture) => {
          const date = fixture.fixture.date.split('T')[0]; // Extract only the date part
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(fixture);
          return acc;
      }, {});
    };

    function renderizarFecha(fechaStr) {
      const fecha = new Date(fechaStr);
      const options = { day: 'numeric', month: 'long' };
      return fecha.toLocaleDateString('es-ES', options);
    }

    useEffect(() => {
        const grouped = groupFixturesByDate(fixtures);
        setGroupedFixtures(grouped)
    }, [fixtures]);
     
    const goToPage = (page) => {
      setCurrentPage(page);
    };
    
    const goToPreviousPage = () => {
      setCurrentPage(currentPage - 1);
    };
    
    const handleFixtureClick = (id) => {
      navigate(`/fixture/${id}`);
    }; 
    
    // Get the array of dates (keys of groupedFixtures (from the useState)) fro pagination
    const dates = Object.keys(groupedFixtures);
    const totalPages = Math.ceil(dates.length / PAGE_SIZE);
    
    // Calculate current page fixtures grouped by dates
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentPageDates = dates.slice(startIndex, endIndex);
    
    
    return (
      <div className="fixture-list">
        <div className="list__title">
          <h3>Partidos</h3>
        </div> 
        <div className="fixture__grouped-container">{
          currentPageDates.map((date, index) => (
          <div className="fixture__group-date"
            key={index}>
              <div className="fixture__title">
                  <h3>Jugados el {renderizarFecha(date)}</h3>
              </div>
              <div className="fixture__match-container">
                  {groupedFixtures[date].map((fixture, idx) => (
                      <div className="single__match-card"
                      key={idx}
                      onClick={() => handleFixtureClick(fixture.fixture.id)}
                      >
                          <MatchPcDetails 
                          fixture={fixture} />
                      </div>
                  ))} 
              </div>
          </div>
        ))}
        </div>
        <div className="pagination">
          <button className="btn-prev" onClick={goToPreviousPage} disabled={currentPage === 1}>
              Anterior
          </button>
            <span className="pagination-span">{`Página ${currentPage} de ${totalPages}`}</span>
            <button className="btn-next" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Siguiente
          </button>
        </div>
      </div>
    );
  }
   
export default FixturePc