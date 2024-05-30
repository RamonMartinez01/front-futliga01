import { useNavigate } from "react-router-dom";
import FixtureDetails from "./FixtureDetails";


const TopFive = ({ fixtures }) => {
  // Tomar solo los primeros cinco partidos
  const topFiveFixtures = fixtures.slice(0, 15);
  const navigate = useNavigate()

  const handleFixtureClick = (id) => {
    navigate(`/fixture/${id}`);
  }; 


  return (
    <div className="top-five-fixtures">
      <div className="fixture__card">
        {topFiveFixtures.map((fixture, index) => (
          <div className="fixture__card-container" key={index}
          onClick={() => handleFixtureClick(fixture.fixture.id)}>
            <FixtureDetails fixture={fixture} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFive;