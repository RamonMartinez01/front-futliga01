import FixtureDetails from "./FixtureDetails";

const TopFive = ({ fixtures }) => {
  // Tomar solo los primeros cinco partidos
  const topFiveFixtures = fixtures.slice(0, 5);

  return (
    <div className="top-five-fixtures">

      <span className="title">Últimos partidos</span>
      <div className="fixture__card">
        {topFiveFixtures.map((fixture, index) => (
          <div className="fixture__card-container" key={index}>
            <FixtureDetails fixture={fixture} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFive;