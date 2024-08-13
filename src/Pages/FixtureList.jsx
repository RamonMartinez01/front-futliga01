import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import FixtureDetails from "../components/FixtureDetails";
import './styles/FixtureList.css'

const PAGE_SIZE = 20;
const FixtureList = ({ fixtures }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [groupedFixtures, setGroupedFixtures] = useState({});
  const [viewMode, setViewMode] = useState('all'); // State to manage view mode
  const [selectedDate, setSelectedDate] = useState(null); // State to manage selected date
  const [dates, setDates] = useState([]); // State to store unique dates
  const navigate = useNavigate();

  useEffect(() => {
    const grouped = groupFixturesByDate(fixtures);
    setGroupedFixtures(grouped);
    setDates(Object.keys(grouped));
  }, [fixtures]);

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

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleViewModeChange = (mode, date = null) => {
    setViewMode(mode);
    setSelectedDate(date);
    setCurrentPage(1); // Reset to the first page when view mode changes
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(
    viewMode === 'all'
      ? fixtures?.length
      : viewMode === 'byDate'
        ? Object.keys(groupedFixtures).length
        : groupedFixtures[selectedDate]?.length / PAGE_SIZE
  );

  // Calculate current page fixtures
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const currentPageFixtures =
    viewMode === 'all'
      ? fixtures?.slice(startIndex, endIndex)
      : viewMode === 'byDate'
        ? Object.keys(groupedFixtures).slice(startIndex, endIndex)
        : groupedFixtures[selectedDate]?.slice(startIndex, endIndex);

  //renders date on the byDate option
  const renderizarFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    const options = { day: 'numeric', month: 'long' };
    return fecha.toLocaleDateString('es-ES', options);
  };

  //navigate buttons in the "banner-dates-buttons" 
  const scrollDates = (direction) => {
    const scrollContainer = document.querySelector('.banner-dates-buttons');
    const scrollAmount = 200; // Adjust this value as needed
    scrollContainer.scrollLeft += direction * scrollAmount;
  };

  const handleFixtureClick = (id) => {
    navigate(`/fixture/${id}`);
  };


  return (
    <section className="fixturelist__body">
      <div className="view-mode-banner">
        <div className="banner-main-buttons">
          <button onClick={() => handleViewModeChange('all')}>All Fixtures</button>
          <button onClick={() => handleViewModeChange('byDate')}>By Date</button>
        </div>
        <div className="banner-navigation">
          <button className="prev-button" onClick={() => scrollDates(-1)}>atrás</button>
            <div className="banner-dates-buttons">
              {dates.map((date, index) => (
                <button key={index} onClick={() => handleViewModeChange('date', date)}>
                  {renderizarFecha(date)}
                </button>
              ))}
            </div>
          <button className="next-button" onClick={() => scrollDates(1)}>siguiente</button>
        </div>
      </div>
      <div className="fixturelist__container">
        <div className="fixture-list">
          {viewMode === 'all' && (
            <div className="fixture__card">
              {currentPageFixtures.map((fixture, index) => (
                <div
                  className="fixture__card-container"
                  key={index}
                  onClick={() => handleFixtureClick(fixture.fixture.id)}>
                  <FixtureDetails fixture={fixture} />
                </div>
              ))}
            </div>
          )}
          {viewMode === 'byDate' && (
            <div className="fixture__grouped-container">
              {currentPageFixtures.map((date, index) => (
                <div className="fixture__group-date" key={index}>
                  <div className="fixture__title">
                    <h3>Jugados el {renderizarFecha(date)}</h3>
                  </div>
                  <div className="fixture__match-container">
                    {groupedFixtures[date].map((fixture, idx) => (
                      <div
                        className="fixture__card-container"
                        key={idx}
                        onClick={() => handleFixtureClick(fixture.fixture.id)}
                      >
                        <FixtureDetails fixture={fixture} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {viewMode === 'date' && (
            <div className="fixture__grouped-container">
              <div className="fixture__group-date">
                <div className="fixture__title">
                  <h3>Jugados el {renderizarFecha(selectedDate)}</h3>
                </div>
                <div className="fixture__match-container">
                  {currentPageFixtures.map((fixture, index) => (
                    <div
                      className="fixture__card-container"
                      key={index}
                      onClick={() => handleFixtureClick(fixture.fixture.id)}
                    >
                      <FixtureDetails fixture={fixture} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
      </div>
    </section>
  );
}

export default FixtureList