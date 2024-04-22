import { useNavigate } from "react-router-dom"
import './styles/HeaderNav.css'

const HeaderNav = () => {

    const navigate = useNavigate()


  const handleTable = () =>{
    navigate('/table')
  }
  const handlePartidos = () =>{
    navigate('/')
  }
  const handleStats = () =>{
    navigate('/stats')
  }

  return (
    <section className="headernav__container">
        <header className="headernav__header">
           <h2 className="headernav__tittle">FUTSAL NIES</h2>
           
        </header>
        <section className="headernav__section">
        <div className="headernav__buttons">
            <button onClick={handlePartidos}>Partidos</button>
            <button onClick={handleTable}>Tabla</button>
            <button onClick={handleStats}>Estadísticas</button>
          </div>
        </section>
    </section>
  )
}

export default HeaderNav