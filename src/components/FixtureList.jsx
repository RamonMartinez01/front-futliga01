import { useEffect, useState } from "react";
import FixtureDetails from "./FixtureDetails";
import './styles/FixtureList.css'

const PAGE_SIZE = 20;
const FixtureList = ({ fixtures }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPageFixtures, setCurrentPageFixtures] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(fixtures?.length / PAGE_SIZE));
    setCurrentPageFixtures(getCurrentPageFixtures());
  }, [fixtures, currentPage]);

  const getCurrentPageFixtures = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, fixtures?.length);
    return fixtures.slice(startIndex, endIndex);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  if (!fixtures || fixtures?.length === 0) {
    return <div className="Warning__API">Por ahora no hay datos disponibles!</div>;
  }

  return (
    <div className="fixture-list">
     
      <div className="fixture__card">{
      currentPageFixtures?.map((fixture, index) => (
        <div className="fixture__card-container" key={index}>
          <FixtureDetails fixture={fixture} />
          
        </div>
      ))}
      </div>
      <div className="pagination">
        <button className="btn-prev" onClick={goToPreviousPage} disabled={currentPage === 1}>
           Anterior
        </button>
          <span className="pagination-span">{`Página ${currentPage} de ${totalPages}`}</span>
          <button className="btn-next" onClick={goToNextPage} disabled={currentPage === totalPages}>
            Siguiente
        </button>
      </div>
    </div>
  );
}

export default FixtureList