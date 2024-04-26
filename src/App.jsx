import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getfixturesThunk } from './Store/slices/fixtures.slice'
import './App.css'
import HomePage from './Pages/HomePage'
import HeaderNav from './components/HeaderNav/HeaderNav'
import StatisticsPage from './Pages/StatisticsPage'
import { useEffect } from 'react'
import LeagueTable from './Pages/LeagueTable'


function App()  {
 
  const fixtures = useSelector(store => store.fixtures)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getfixturesThunk())
  }, [])

 /* const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // Por ahora, para simular datos de la API, trabajaremos con un JSON de ejemplo 
    const exampleData = [
      { //Partido 1
        "fixture": {
          "id": 867946,
          "referee": "H. Ibarra",
          "timezone": "UTC",
          "date": "2024-04-02T19:00:00+00:00",
          "timestamp": 1659726000,
          "periods": {
            "first": 1659726000,
            "second": 1659729600
          },
          "venue": {
            "id": 525,
            "name": "Sullivan 1",
            "city": "Ensenada"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "México",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2024,
          "round": "Friendly - 1"
        },
        "teams": {
          "home": {
            "id": 1,
            "name": "Alex FC",
            "logo": "https://raw.githubusercontent.com/nepito/fut_sal_front/develop/static/alex_fc.png",
            "winner": false
          },
          "away": {
            "id": 2,
            "name": "Meserios",
            "logo": "https://media-4.api-sports.io/football/teams/42.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 5
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 0,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 2 
        "fixture": {
          "id": 867947,
          "referee": "A. Madley",
          "timezone": "UTC",
          "date": "2022-08-06T11:30:00+00:00",
          "timestamp": 1659785400,
          "periods": {
            "first": 1659785400,
            "second": 1659789000
          },
          "venue": {
            "id": 535,
            "name": "Craven Cottage",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 36,
            "name": "Eco Pasto",
            "logo": "https://raw.githubusercontent.com/nepito/fut_sal_front/develop/static/eco_pasto.png",
            "winner": false
          },
          "away": {
            "id": 40,
            "name": "Troncos FC",
            "logo": "https://media-4.api-sports.io/football/teams/40.png",
            "winner": true
          }
        },
        "goals": {
          "home": 2,
          "away": 3
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 3
        "fixture": {
          "id": 867948,
          "referee": "P. Bankes",
          "timezone": "UTC",
          "date": "2022-08-06T14:00:00+00:00",
          "timestamp": 1659794400,
          "periods": {
            "first": 1659794400,
            "second": 1659798000
          },
          "venue": {
            "id": 504,
            "name": "Vitality Stadium",
            "city": "Bournemouth, Dorset"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 35,
            "name": "Los Konse",
            "logo": "https://media-4.api-sports.io/football/teams/35.png",
            "winner": false
          },
          "away": {
            "id": 66,
            "name": "Kingstone",
            "logo": "https://raw.githubusercontent.com/nepito/fut_sal_front/develop/static/kingstone.png",
            "winner": true
          }
        },
        "goals": {
          "home": 2,
          "away": 5
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 4
        "fixture": {
          "id": 867949,
          "referee": "R. Jones",
          "timezone": "UTC",
          "date": "2022-08-06T14:00:00+00:00",
          "timestamp": 1659794400,
          "periods": {
            "first": 1659794400,
            "second": 1659798000
          },
          "venue": {
            "id": 546,
            "name": "Elland Road",
            "city": "Leeds, West Yorkshire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 63,
            "name": "Kahomas",
            "logo": "https://media-4.api-sports.io/football/teams/63.png",
            "winner": true
          },
          "away": {
            "id": 39,
            "name": "Tumbados",
            "logo": "https://media-4.api-sports.io/football/teams/39.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 1
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 5
        "fixture": {
          "id": 867950,
          "referee": "J. Gillett",
          "timezone": "UTC",
          "date": "2022-08-07T13:00:00+00:00",
          "timestamp": 1659877200,
          "periods": {
            "first": 1659877200,
            "second": 1659880800
          },
          "venue": {
            "id": 547,
            "name": "King Power Stadium",
            "city": "Leicester, Leicestershire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 46,
            "name": "Alex FC",
            "logo": "https://raw.githubusercontent.com/nepito/fut_sal_front/develop/static/alex_fc.png",
            "winner": false
          },
          "away": {
            "id": 55,
            "name": "Eco Pasto",
            "logo": "https://raw.githubusercontent.com/nepito/fut_sal_front/develop/static/eco_pasto.png",
            "winner": true
          }
        },
        "goals": {
          "home": 4,
          "away": 8
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 6
        "fixture": {
          "id": 867951,
          "referee": "S. Hooper",
          "timezone": "UTC",
          "date": "2022-08-06T14:00:00+00:00",
          "timestamp": 1659794400,
          "periods": {
            "first": 1659794400,
            "second": 1659798000
          },
          "venue": {
            "id": 562,
            "name": "St. James' Park",
            "city": "Newcastle upon Tyne"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 34,
            "name": "Troncos FC",
            "logo": "https://media-4.api-sports.io/football/teams/34.png",
            "winner": false
          },
          "away": {
            "id": 65,
            "name": "Meserios",
            "logo": "https://media-4.api-sports.io/football/teams/65.png",
            "winner": true
          }
        },
        "goals": {
          "home": 2,
          "away": 7
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 7
        "fixture": {
          "id": 867952,
          "referee": "A. Marriner",
          "timezone": "UTC",
          "date": "2022-08-06T14:00:00+00:00",
          "timestamp": 1659794400,
          "periods": {
            "first": 1659794400,
            "second": 1659798000
          },
          "venue": {
            "id": 593,
            "name": "Tottenham Hotspur Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 47,
            "name": "Kingstone",
            "logo": "https://raw.githubusercontent.com/nepito/fut_sal_front/develop/static/kingstone.png",
            "winner": true
          },
          "away": {
            "id": 41,
            "name": "Cahomas",
            "logo": "https://media-4.api-sports.io/football/teams/41.png",
            "winner": false
          }
        },
        "goals": {
          "home": 9,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 1
          },
          "fulltime": {
            "home": 4,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 8
        "fixture": {
          "id": 867953,
          "referee": "C. Pawson",
          "timezone": "UTC",
          "date": "2022-08-06T16:30:00+00:00",
          "timestamp": 1659803400,
          "periods": {
            "first": 1659803400,
            "second": 1659807000
          },
          "venue": {
            "id": 8560,
            "name": "Goodison Park",
            "city": "Liverpool"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 45,
            "name": "Everton",
            "logo": "https://media-4.api-sports.io/football/teams/45.png",
            "winner": false
          },
          "away": {
            "id": 49,
            "name": "Chelsea",
            "logo": "https://media-4.api-sports.io/football/teams/49.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 0,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 9
        "fixture": {
          "id": 867954,
          "referee": "P. Tierney",
          "timezone": "UTC",
          "date": "2022-08-07T13:00:00+00:00",
          "timestamp": 1659877200,
          "periods": {
            "first": 1659877200,
            "second": 1659880800
          },
          "venue": {
            "id": 556,
            "name": "Old Trafford",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 33,
            "name": "Manchester United",
            "logo": "https://media-4.api-sports.io/football/teams/33.png",
            "winner": false
          },
          "away": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media-4.api-sports.io/football/teams/51.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 2
          },
          "fulltime": {
            "home": 1,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 10
        "fixture": {
          "id": 867955,
          "referee": "M. Oliver",
          "timezone": "UTC",
          "date": "2022-08-07T15:30:00+00:00",
          "timestamp": 1659886200,
          "periods": {
            "first": 1659886200,
            "second": 1659889800
          },
          "venue": {
            "id": 598,
            "name": "London Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 1"
        },
        "teams": {
          "home": {
            "id": 48,
            "name": "West Ham",
            "logo": "https://media-4.api-sports.io/football/teams/48.png",
            "winner": false
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 0,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 11
        "fixture": {
          "id": 867956,
          "referee": "D. England",
          "timezone": "UTC",
          "date": "2022-08-13T14:00:00+00:00",
          "timestamp": 1660399200,
          "periods": {
            "first": 1660399200,
            "second": 1660402800
          },
          "venue": {
            "id": 494,
            "name": "Emirates Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 42,
            "name": "Arsenal",
            "logo": "https://media-4.api-sports.io/football/teams/42.png",
            "winner": true
          },
          "away": {
            "id": 46,
            "name": "Leicester",
            "logo": "https://media-4.api-sports.io/football/teams/46.png",
            "winner": false
          }
        },
        "goals": {
          "home": 4,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 0
          },
          "fulltime": {
            "home": 4,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 12
        "fixture": {
          "id": 867957,
          "referee": "M. Oliver",
          "timezone": "UTC",
          "date": "2022-08-13T11:30:00+00:00",
          "timestamp": 1660390200,
          "periods": {
            "first": 1660390200,
            "second": 1660393800
          },
          "venue": {
            "id": 495,
            "name": "Villa Park",
            "city": "Birmingham"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 66,
            "name": "Aston Villa",
            "logo": "https://media-4.api-sports.io/football/teams/66.png",
            "winner": true
          },
          "away": {
            "id": 45,
            "name": "Everton",
            "logo": "https://media-4.api-sports.io/football/teams/45.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 13
        "fixture": {
          "id": 867958,
          "referee": "S. Attwell",
          "timezone": "UTC",
          "date": "2022-08-13T16:30:00+00:00",
          "timestamp": 1660408200,
          "periods": {
            "first": 1660408200,
            "second": 1660411800
          },
          "venue": {
            "id": 10503,
            "name": "Gtech Community Stadium",
            "city": "Brentford, Middlesex"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media-4.api-sports.io/football/teams/55.png",
            "winner": true
          },
          "away": {
            "id": 33,
            "name": "Manchester United",
            "logo": "https://media-4.api-sports.io/football/teams/33.png",
            "winner": false
          }
        },
        "goals": {
          "home": 4,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 4,
            "away": 0
          },
          "fulltime": {
            "home": 4,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 14
        "fixture": {
          "id": 867959,
          "referee": "G. Scott",
          "timezone": "UTC",
          "date": "2022-08-13T14:00:00+00:00",
          "timestamp": 1660399200,
          "periods": {
            "first": 1660399200,
            "second": 1660402800
          },
          "venue": {
            "id": 508,
            "name": "The American Express Community Stadium",
            "city": "Falmer, East Sussex"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media-4.api-sports.io/football/teams/51.png",
            "winner": null
          },
          "away": {
            "id": 34,
            "name": "Newcastle",
            "logo": "https://media-4.api-sports.io/football/teams/34.png",
            "winner": null
          }
        },
        "goals": {
          "home": 0,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 0,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 15
        "fixture": {
          "id": 867960,
          "referee": "A. Taylor",
          "timezone": "UTC",
          "date": "2022-08-14T15:30:00+00:00",
          "timestamp": 1660491000,
          "periods": {
            "first": 1660491000,
            "second": 1660494600
          },
          "venue": {
            "id": 519,
            "name": "Stamford Bridge",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 49,
            "name": "Chelsea",
            "logo": "https://media-4.api-sports.io/football/teams/49.png",
            "winner": null
          },
          "away": {
            "id": 47,
            "name": "Tottenham",
            "logo": "https://media-4.api-sports.io/football/teams/47.png",
            "winner": null
          }
        },
        "goals": {
          "home": 2,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 16
        "fixture": {
          "id": 867961,
          "referee": "P. Tierney",
          "timezone": "UTC",
          "date": "2022-08-15T19:00:00+00:00",
          "timestamp": 1660590000,
          "periods": {
            "first": 1660590000,
            "second": 1660593600
          },
          "venue": {
            "id": 550,
            "name": "Anfield",
            "city": "Liverpool"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 40,
            "name": "Liverpool",
            "logo": "https://media-4.api-sports.io/football/teams/40.png",
            "winner": null
          },
          "away": {
            "id": 52,
            "name": "Crystal Palace",
            "logo": "https://media-4.api-sports.io/football/teams/52.png",
            "winner": null
          }
        },
        "goals": {
          "home": 1,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 1,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 17
        "fixture": {
          "id": 867962,
          "referee": "D. Coote",
          "timezone": "UTC",
          "date": "2022-08-13T14:00:00+00:00",
          "timestamp": 1660399200,
          "periods": {
            "first": 1660399200,
            "second": 1660402800
          },
          "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          },
          "away": {
            "id": 35,
            "name": "Bournemouth",
            "logo": "https://media-4.api-sports.io/football/teams/35.png",
            "winner": false
          }
        },
        "goals": {
          "home": 4,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 3,
            "away": 0
          },
          "fulltime": {
            "home": 4,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 18
        "fixture": {
          "id": 867963,
          "referee": "R. Jones",
          "timezone": "UTC",
          "date": "2022-08-14T13:00:00+00:00",
          "timestamp": 1660482000,
          "periods": {
            "first": 1660482000,
            "second": 1660485600
          },
          "venue": {
            "id": 566,
            "name": "The City Ground",
            "city": "Nottingham, Nottinghamshire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 65,
            "name": "Nottingham Forest",
            "logo": "https://media-4.api-sports.io/football/teams/65.png",
            "winner": true
          },
          "away": {
            "id": 48,
            "name": "West Ham",
            "logo": "https://media-4.api-sports.io/football/teams/48.png",
            "winner": false
          }
        },
        "goals": {
          "home": 1,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 19
        "fixture": {
          "id": 867964,
          "referee": "T. Harrington",
          "timezone": "UTC",
          "date": "2022-08-13T14:00:00+00:00",
          "timestamp": 1660399200,
          "periods": {
            "first": 1660399200,
            "second": 1660402800
          },
          "venue": {
            "id": 585,
            "name": "St. Mary's Stadium",
            "city": "Southampton, Hampshire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 41,
            "name": "Southampton",
            "logo": "https://media-4.api-sports.io/football/teams/41.png",
            "winner": null
          },
          "away": {
            "id": 63,
            "name": "Leeds",
            "logo": "https://media-4.api-sports.io/football/teams/63.png",
            "winner": null
          }
        },
        "goals": {
          "home": 2,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 20
        "fixture": {
          "id": 867965,
          "referee": "J. Brooks",
          "timezone": "UTC",
          "date": "2022-08-13T14:00:00+00:00",
          "timestamp": 1660399200,
          "periods": {
            "first": 1660399200,
            "second": 1660402800
          },
          "venue": {
            "id": 600,
            "name": "Molineux Stadium",
            "city": "Wolverhampton, West Midlands"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 2"
        },
        "teams": {
          "home": {
            "id": 39,
            "name": "Wolves",
            "logo": "https://media-4.api-sports.io/football/teams/39.png",
            "winner": null
          },
          "away": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media-4.api-sports.io/football/teams/36.png",
            "winner": null
          }
        },
        "goals": {
          "home": 0,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 0,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 21
        "fixture": {
          "id": 867966,
          "referee": "C. Pawson",
          "timezone": "UTC",
          "date": "2022-08-20T16:30:00+00:00",
          "timestamp": 1661013000,
          "periods": {
            "first": 1661013000,
            "second": 1661016600
          },
          "venue": {
            "id": 504,
            "name": "Vitality Stadium",
            "city": "Bournemouth, Dorset"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 35,
            "name": "Bournemouth",
            "logo": "https://media-4.api-sports.io/football/teams/35.png",
            "winner": false
          },
          "away": {
            "id": 42,
            "name": "Arsenal",
            "logo": "https://media-4.api-sports.io/football/teams/42.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 3
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 2
          },
          "fulltime": {
            "home": 0,
            "away": 3
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 22
        "fixture": {
          "id": 867967,
          "referee": "A. Madley",
          "timezone": "UTC",
          "date": "2022-08-20T14:00:00+00:00",
          "timestamp": 1661004000,
          "periods": {
            "first": 1661004000,
            "second": 1661007600
          },
          "venue": {
            "id": 525,
            "name": "Selhurst Park",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 52,
            "name": "Crystal Palace",
            "logo": "https://media-4.api-sports.io/football/teams/52.png",
            "winner": true
          },
          "away": {
            "id": 66,
            "name": "Aston Villa",
            "logo": "https://media-4.api-sports.io/football/teams/66.png",
            "winner": false
          }
        },
        "goals": {
          "home": 3,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 1
          },
          "fulltime": {
            "home": 3,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 23
        "fixture": {
          "id": 867968,
          "referee": "A. Marriner",
          "timezone": "UTC",
          "date": "2022-08-20T14:00:00+00:00",
          "timestamp": 1661004000,
          "periods": {
            "first": 1661004000,
            "second": 1661007600
          },
          "venue": {
            "id": 8560,
            "name": "Goodison Park",
            "city": "Liverpool"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 45,
            "name": "Everton",
            "logo": "https://media-4.api-sports.io/football/teams/45.png",
            "winner": null
          },
          "away": {
            "id": 65,
            "name": "Nottingham Forest",
            "logo": "https://media-4.api-sports.io/football/teams/65.png",
            "winner": null
          }
        },
        "goals": {
          "home": 1,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 24
        "fixture": {
          "id": 867969,
          "referee": "P. Bankes",
          "timezone": "UTC",
          "date": "2022-08-20T14:00:00+00:00",
          "timestamp": 1661004000,
          "periods": {
            "first": 1661004000,
            "second": 1661007600
          },
          "venue": {
            "id": 535,
            "name": "Craven Cottage",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media-4.api-sports.io/football/teams/36.png",
            "winner": true
          },
          "away": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media-4.api-sports.io/football/teams/55.png",
            "winner": false
          }
        },
        "goals": {
          "home": 3,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 1
          },
          "fulltime": {
            "home": 3,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 25
        "fixture": {
          "id": 867970,
          "referee": "S. Attwell",
          "timezone": "UTC",
          "date": "2022-08-21T13:00:00+00:00",
          "timestamp": 1661086800,
          "periods": {
            "first": 1661086800,
            "second": 1661090400
          },
          "venue": {
            "id": 546,
            "name": "Elland Road",
            "city": "Leeds, West Yorkshire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 63,
            "name": "Leeds",
            "logo": "https://media-4.api-sports.io/football/teams/63.png",
            "winner": true
          },
          "away": {
            "id": 49,
            "name": "Chelsea",
            "logo": "https://media-4.api-sports.io/football/teams/49.png",
            "winner": false
          }
        },
        "goals": {
          "home": 3,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 0
          },
          "fulltime": {
            "home": 3,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 26
        "fixture": {
          "id": 867971,
          "referee": "M. Salisbury",
          "timezone": "UTC",
          "date": "2022-08-20T14:00:00+00:00",
          "timestamp": 1661004000,
          "periods": {
            "first": 1661004000,
            "second": 1661007600
          },
          "venue": {
            "id": 547,
            "name": "King Power Stadium",
            "city": "Leicester, Leicestershire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 46,
            "name": "Leicester",
            "logo": "https://media-4.api-sports.io/football/teams/46.png",
            "winner": false
          },
          "away": {
            "id": 41,
            "name": "Southampton",
            "logo": "https://media-4.api-sports.io/football/teams/41.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 27
        "fixture": {
          "id": 867972,
          "referee": "M. Oliver",
          "timezone": "UTC",
          "date": "2022-08-22T19:00:00+00:00",
          "timestamp": 1661194800,
          "periods": {
            "first": 1661194800,
            "second": 1661198400
          },
          "venue": {
            "id": 556,
            "name": "Old Trafford",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 33,
            "name": "Manchester United",
            "logo": "https://media-4.api-sports.io/football/teams/33.png",
            "winner": true
          },
          "away": {
            "id": 40,
            "name": "Liverpool",
            "logo": "https://media-4.api-sports.io/football/teams/40.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 1,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 28
        "fixture": {
          "id": 867973,
          "referee": "J. Gillett",
          "timezone": "UTC",
          "date": "2022-08-21T15:30:00+00:00",
          "timestamp": 1661095800,
          "periods": {
            "first": 1661095800,
            "second": 1661099400
          },
          "venue": {
            "id": 562,
            "name": "St. James' Park",
            "city": "Newcastle upon Tyne"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 34,
            "name": "Newcastle",
            "logo": "https://media-4.api-sports.io/football/teams/34.png",
            "winner": null
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": null
          }
        },
        "goals": {
          "home": 3,
          "away": 3
        },
        "score": {
          "halftime": {
            "home": 2,
            "away": 1
          },
          "fulltime": {
            "home": 3,
            "away": 3
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 29
        "fixture": {
          "id": 867974,
          "referee": "S. Hooper",
          "timezone": "UTC",
          "date": "2022-08-20T11:30:00+00:00",
          "timestamp": 1660995000,
          "periods": {
            "first": 1660995000,
            "second": 1660998600
          },
          "venue": {
            "id": 593,
            "name": "Tottenham Hotspur Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 47,
            "name": "Tottenham",
            "logo": "https://media-4.api-sports.io/football/teams/47.png",
            "winner": true
          },
          "away": {
            "id": 39,
            "name": "Wolves",
            "logo": "https://media-4.api-sports.io/football/teams/39.png",
            "winner": false
          }
        },
        "goals": {
          "home": 1,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 30
        "fixture": {
          "id": 867975,
          "referee": "A. Taylor",
          "timezone": "UTC",
          "date": "2022-08-21T13:00:00+00:00",
          "timestamp": 1661086800,
          "periods": {
            "first": 1661086800,
            "second": 1661090400
          },
          "venue": {
            "id": 598,
            "name": "London Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 3"
        },
        "teams": {
          "home": {
            "id": 48,
            "name": "West Ham",
            "logo": "https://media-4.api-sports.io/football/teams/48.png",
            "winner": false
          },
          "away": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media-4.api-sports.io/football/teams/51.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 0,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 31
        "fixture": {
          "id": 867976,
          "referee": "J. Gillett",
          "timezone": "UTC",
          "date": "2022-08-27T16:30:00+00:00",
          "timestamp": 1661617800,
          "periods": {
            "first": 1661617800,
            "second": 1661621400
          },
          "venue": {
            "id": 494,
            "name": "Emirates Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 42,
            "name": "Arsenal",
            "logo": "https://media-4.api-sports.io/football/teams/42.png",
            "winner": true
          },
          "away": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media-4.api-sports.io/football/teams/36.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 32
        "fixture": {
          "id": 867977,
          "referee": "D. Coote",
          "timezone": "UTC",
          "date": "2022-08-28T13:00:00+00:00",
          "timestamp": 1661691600,
          "periods": {
            "first": 1661691600,
            "second": 1661695200
          },
          "venue": {
            "id": 495,
            "name": "Villa Park",
            "city": "Birmingham"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 66,
            "name": "Aston Villa",
            "logo": "https://media-4.api-sports.io/football/teams/66.png",
            "winner": false
          },
          "away": {
            "id": 48,
            "name": "West Ham",
            "logo": "https://media-4.api-sports.io/football/teams/48.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 0,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 33
        "fixture": {
          "id": 867978,
          "referee": "J. Brooks",
          "timezone": "UTC",
          "date": "2022-08-27T14:00:00+00:00",
          "timestamp": 1661608800,
          "periods": {
            "first": 1661608800,
            "second": 1661612400
          },
          "venue": {
            "id": 10503,
            "name": "Gtech Community Stadium",
            "city": "Brentford, Middlesex"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media-4.api-sports.io/football/teams/55.png",
            "winner": null
          },
          "away": {
            "id": 45,
            "name": "Everton",
            "logo": "https://media-4.api-sports.io/football/teams/45.png",
            "winner": null
          }
        },
        "goals": {
          "home": 1,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 1,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 34
        "fixture": {
          "id": 867979,
          "referee": "M. Salisbury",
          "timezone": "UTC",
          "date": "2022-08-27T14:00:00+00:00",
          "timestamp": 1661608800,
          "periods": {
            "first": 1661608800,
            "second": 1661612400
          },
          "venue": {
            "id": 508,
            "name": "The American Express Community Stadium",
            "city": "Falmer, East Sussex"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media-4.api-sports.io/football/teams/51.png",
            "winner": true
          },
          "away": {
            "id": 63,
            "name": "Leeds",
            "logo": "https://media-4.api-sports.io/football/teams/63.png",
            "winner": false
          }
        },
        "goals": {
          "home": 1,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 1,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 35
        "fixture": {
          "id": 867980,
          "referee": "P. Tierney",
          "timezone": "UTC",
          "date": "2022-08-27T14:00:00+00:00",
          "timestamp": 1661608800,
          "periods": {
            "first": 1661608800,
            "second": 1661612400
          },
          "venue": {
            "id": 519,
            "name": "Stamford Bridge",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 49,
            "name": "Chelsea",
            "logo": "https://media-4.api-sports.io/football/teams/49.png",
            "winner": true
          },
          "away": {
            "id": 46,
            "name": "Leicester",
            "logo": "https://media-4.api-sports.io/football/teams/46.png",
            "winner": false
          }
        },
        "goals": {
          "home": 2,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 2,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 36
        "fixture": {
          "id": 867981,
          "referee": "S. Attwell",
          "timezone": "UTC",
          "date": "2022-08-27T14:00:00+00:00",
          "timestamp": 1661608800,
          "periods": {
            "first": 1661608800,
            "second": 1661612400
          },
          "venue": {
            "id": 550,
            "name": "Anfield",
            "city": "Liverpool"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 40,
            "name": "Liverpool",
            "logo": "https://media-4.api-sports.io/football/teams/40.png",
            "winner": true
          },
          "away": {
            "id": 35,
            "name": "Bournemouth",
            "logo": "https://media-4.api-sports.io/football/teams/35.png",
            "winner": false
          }
        },
        "goals": {
          "home": 9,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 5,
            "away": 0
          },
          "fulltime": {
            "home": 9,
            "away": 0
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 37
        "fixture": {
          "id": 867982,
          "referee": "D. England",
          "timezone": "UTC",
          "date": "2022-08-27T14:00:00+00:00",
          "timestamp": 1661608800,
          "periods": {
            "first": 1661608800,
            "second": 1661612400
          },
          "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "city": "Manchester"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media-4.api-sports.io/football/teams/50.png",
            "winner": true
          },
          "away": {
            "id": 52,
            "name": "Crystal Palace",
            "logo": "https://media-4.api-sports.io/football/teams/52.png",
            "winner": false
          }
        },
        "goals": {
          "home": 4,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 2
          },
          "fulltime": {
            "home": 4,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 38
        "fixture": {
          "id": 867983,
          "referee": "C. Pawson",
          "timezone": "UTC",
          "date": "2022-08-28T15:30:00+00:00",
          "timestamp": 1661700600,
          "periods": {
            "first": 1661700600,
            "second": 1661704200
          },
          "venue": {
            "id": 566,
            "name": "The City Ground",
            "city": "Nottingham, Nottinghamshire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 65,
            "name": "Nottingham Forest",
            "logo": "https://media-4.api-sports.io/football/teams/65.png",
            "winner": false
          },
          "away": {
            "id": 47,
            "name": "Tottenham",
            "logo": "https://media-4.api-sports.io/football/teams/47.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 1
          },
          "fulltime": {
            "home": 0,
            "away": 2
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      },
      { //Partido 39
        "fixture": {
          "id": 867984,
          "referee": "A. Madley",
          "timezone": "UTC",
          "date": "2022-08-27T11:30:00+00:00",
          "timestamp": 1661599800,
          "periods": {
            "first": 1661599800,
            "second": 1661603400
          },
          "venue": {
            "id": 585,
            "name": "St. Mary's Stadium",
            "city": "Southampton, Hampshire"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media-4.api-sports.io/football/leagues/39.png",
          "flag": "https://media-4.api-sports.io/flags/gb.svg",
          "season": 2022,
          "round": "Regular Season - 4"
        },
        "teams": {
          "home": {
            "id": 41,
            "name": "Southampton",
            "logo": "https://media-4.api-sports.io/football/teams/41.png",
            "winner": false
          },
          "away": {
            "id": 33,
            "name": "Manchester United",
            "logo": "https://media-4.api-sports.io/football/teams/33.png",
            "winner": true
          }
        },
        "goals": {
          "home": 0,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 0,
            "away": 0
          },
          "fulltime": {
            "home": 0,
            "away": 1
          },
          "extratime": {
            "home": null,
            "away": null
          },
          "penalty": {
            "home": null,
            "away": null
          }
        }
      }
    ]; // Aquí pondrías los datos de ejemplo
    setFixtures(exampleData);
  }, []);*/
  

  return(
    <div>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<HomePage 
        
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
