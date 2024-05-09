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
      <div className='container'>
        <div className="img-wrapper">
          
           <h3>Cargando...</h3>
        </div>
      </div>
    );
  }

  return(
    <div>
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
      </Routes>
    </div>
  )

}

export default App
