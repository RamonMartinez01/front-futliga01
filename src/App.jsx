import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import LeagueTable from './Pages/LeagueTable'
const App = () => {


return(
<div>
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/table' element={<LeagueTable />}/>
  </Routes>
</div>
)

}

export default App
