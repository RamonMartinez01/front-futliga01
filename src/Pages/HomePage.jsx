import { useEffect, useState } from 'react';
import FixtureList from '../components/FixtureList';
import LeagueTable from './LeagueTable';
import './styles/HomePage.css'
import { useNavigate } from 'react-router-dom';
    
const HomePage = () => {

      const [fixtures, setFixtures] = useState([]);
      const navigate = useNavigate()


      const handleTable = () =>{
       
            navigate('/table')
       
    }

      useEffect(() => {
        // Aquí podrías realizar la llamada a la API para obtener los datos de los partidos
        // y luego establecer esos datos en el estado utilizando setFixtures
        // Ejemplo de llamada a la API:
        // fetch('url_de_la_api')
        //   .then(response => response.json())
        //   .then(data => setFixtures(data.response));
        
        // Por ahora, para simular datos de ejemplo, utilizaremos un array vacío
        const exampleData = [// Aquí van los datos de ejemplo
          {//primer partido
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
                "logo": "https://media-4.api-sports.io/football/teams/52.png",
                "winner": false
              },
              "away": {
                "id": 2,
                "name": "NIES",
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
          {//segundo partido
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
                "logo": "https://media-4.api-sports.io/football/teams/36.png",
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
          {//tercer partido
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
                "logo": "https://media-4.api-sports.io/football/teams/66.png",
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
          {//cuarto partido
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
          {//quinto partido
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
                "logo": "https://media-4.api-sports.io/football/teams/46.png",
                "winner": false
              },
              "away": {
                "id": 55,
                "name": "Eco Pasto",
                "logo": "https://media-4.api-sports.io/football/teams/55.png",
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
          {// 6 partido
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
          {// 7 partido
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
                "logo": "https://media-4.api-sports.io/football/teams/47.png",
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
          {// 8 partido
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          {
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
          }
        ]; 
        setFixtures(exampleData);
      }, []);


    
      return (
        <section>
           <h2>FUTSAL NIES</h2>
            <h3>Partidos Jugados</h3>
          <div>
            <button>Partidos</button>
            <button onClick={handleTable}>Tabla</button>
            <button>Estadísticas</button>
          </div>
        <div className="home__list-container">
          <FixtureList fixtures={fixtures} />
        </div>

        <div className='home__table'>
          <LeagueTable fixtures={fixtures}/>
        </div>
        </section>
        
      )
    }

export default HomePage