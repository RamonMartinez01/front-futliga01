import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getfixturesThunk } from './Store/slices/fixtures.slice'
import './App.css'
import HomePage from './Pages/HomePage'
import HeaderNav from './components/HeaderNav/HeaderNav'
import StatisticsPage from './Pages/StatisticsPage'
import { useEffect, useState } from 'react'
import LeagueTable from './Pages/LeagueTable'
import FixtureList from './Pages/FixtureList'
import FixtureSummary from './Pages/FixtureSumary'

function App()  {
  const [ loading, setLoading ] = useState(true)
  const fixtures = useSelector(store => store.fixtures)
  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch thunk to get fixtures
    dispatch(getfixturesThunk())
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }, [dispatch])

   
  if (loading) {
    // Render loading image while waiting for fixtures
    return (
      <div className='loading__container'>
        <div className='img__container'>
          <div className="loading__title">
            
            <h3>Cargando...</h3>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div className='APP'>
      <HeaderNav
      fixtures={fixtures}/>
      <Routes>
        <Route path='/' element={<HomePage 
         fixtures={fixtures}
        />}/>
        <Route path='/list' element={ <FixtureList 
        fixtures={fixtures}
        />}/>
        <Route path='/table' element={<LeagueTable 
        fixtures={fixtures}
        />}/>
        <Route path='/stats' element={<StatisticsPage
        fixtures={fixtures} />}/>
        <Route path='/fixture/:id' element={<FixtureSummary 
        fixtures={fixtures} />} />
      </Routes>
    </div>
  )

}

export default App
