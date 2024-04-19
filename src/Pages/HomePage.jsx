import FixtureList from '../components/FixtureList';
import './styles/HomePage.css'


const HomePage = ({ fixtures }) => {
  

    
  return (
    <section>
      <div className="home__list-container">
        <FixtureList fixtures={fixtures} />
      </div>

         
    </section>
        
  )
}

export default HomePage