import { useNavigate } from 'react-router-dom';
import TopFive from '../components/TopFive';
import './styles/HomePage.css'
import TopSixTable from '../components/TopSixTable';
import { useEffect, useRef, useState } from 'react';
import FixturePc from '../components/FixturePc/FixturePc';
import FullTable from '../components/FullTable/FullTable';


const HomePage = ({ fixtures }) => {
  const navigate = useNavigate()
  const [isScrollable, setIsScrollable] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const isContentScrollable = container.scrollHeight > container.clientHeight;
      setIsScrollable(isContentScrollable);
    }
  }, []);

  const handleList = () =>{
    navigate('/list')
  }
  const handleTable = () =>{
    navigate('/table')
  }
    
  return (
    <section className='home'>
      <section className='home__main'>
        <div className='fixturepc__container'>
          <div className='fixturepc__grouped-list'>
           <FixturePc
           fixtures={fixtures} />
          </div>
        </div>
        <div className='full-table__container'>
          <FullTable
          fixtures={fixtures} />
        </div>
        <div className="home__topfive-container">
          <span className='topfive__title'>Últimos partidos</span>
          <div className={`topfive__cards-container ${isScrollable ? 'scrollable' : ''}`} ref={containerRef}>
            <TopFive
            fixtures={fixtures}/>
          </div>
          <div className='topfive__button-container'>
            <button className='topfive__gotolist-button' onClick={handleList}>Ver lista completa</button>
          </div>
        </div>
        <div className='home__toptable-container'>
          <span className='toptable__title'>Tabla</span>
          <div className='toptable__table'>
            <TopSixTable
            fixtures={fixtures}/>
          </div> 
          <div className='toptable__button-container'>
            <button className='gototable__button' onClick={handleTable}>Ver tabla completa</button>
          </div>
        </div>
      </section>
    </section>
        
  )
}

export default HomePage