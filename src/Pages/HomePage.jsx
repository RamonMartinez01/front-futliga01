import { useNavigate } from 'react-router-dom';
import TopFive from '../components/TopFive';
import './styles/HomePage.css'
import TopSixTable from '../components/TopSixTable';


const HomePage = ({ fixtures }) => {
  const navigate = useNavigate()

  const handleList = () =>{
    navigate('/list')
  }
  const handleTable = () =>{
    navigate('/table')
  }
    
  return (
    <section className='home'>
      <div className="home__topfive-container">
        <TopFive
        fixtures={fixtures}/>
        <div className='topfive__complete'>
          <button className='gotolist__button' onClick={handleList}>Ver lista completa</button>
        </div>
      </div>
      <div className='home__topsix-container'>
        <TopSixTable
        fixtures={fixtures}/>
        <div className='topsix__complete'>
          <button className='gototable__button' onClick={handleTable}>Ver lista completa</button>
        </div>
      </div>
         
    </section>
        
  )
}

export default HomePage