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
        <header>
           <h2>FUTSAL NIES</h2>
           <h3>Partidos Jugados</h3>
        </header>
        <section>
        <div>
            <button onClick={handlePartidos}>Partidos</button>
            <button onClick={handleTable}>Tabla</button>
            <button onClick={handleStats}>Estadísticas</button>
          </div>
        </section>
    </section>
  )
}

export default HeaderNav