import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getfixturesThunk } from './Store/slices/fixtures.slice'
import './App.css'
import HomePage from './Pages/HomePage'
import HeaderNav from './components/HeaderNav/HeaderNav'
import StatisticsPage from './Pages/StatisticsPage'
import { useEffect, useState } from 'react'
import LeagueTable from './Pages/LeagueTable'


function App()  {
 
  const fixtures = useSelector(store => store.fixtures)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getfixturesThunk())
  }, [])

  

  return(
    <div>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<HomePage 
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
