import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FixtureDetails from "../components/FixtureDetails";
import './styles/FixtureList.css'

const PAGE_SIZE = 20;
const FixtureList = ({ fixtures }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
 
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(fixtures?.length / PAGE_SIZE);

  // Calculate current page fixtures
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentPageFixtures = fixtures?.slice(startIndex, endIndex);

  const handleFixtureClick = (id) => {
    navigate(`/fixture/${id}`);
  }; 


  return (
    <div className="fixture-list">
     
      <div className="fixture__card">{
      currentPageFixtures.map((fixture, index) => (
        <div className="fixture__card-container"
         key={index}
         onClick={() => handleFixtureClick(fixture.fixture.id)}>
          <FixtureDetails fixture={fixture} />
          
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

export default FixtureList