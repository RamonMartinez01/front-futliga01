import FixtureDetails from "./FixtureDetails";
import './styles/FixtureList.css'

const FixtureList = ({ fixtures }) => {


  return (
    <div className="fixture-list">
     
      <div className="fixture__card">{
      fixtures.map((fixture, index) => (
        <div className="fixture__card-container" key={index}>
          <FixtureDetails fixture={fixture} />
          
        </div>
      ))}
      </div>
    </div>
  );
}

export default FixtureList