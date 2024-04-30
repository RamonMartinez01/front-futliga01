import { useState } from "react";
import FixtureDetails from "./FixtureDetails";
import './styles/FixtureList.css'
import useFetch from "../hooks/useFetch";

const PAGE_SIZE = 20;
const FixtureList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetch('fixtures');

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(data?.length / PAGE_SIZE);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Calculate current page fixtures
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentPageFixtures = data.slice(startIndex, endIndex);


  return (
    <div className="fixture-list">
     
      <div className="fixture__card">{
      currentPageFixtures.map((fixture, index) => (
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
          <button className="btn-next" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Siguiente
        </button>
      </div>
    </div>
  );
}

export default FixtureList