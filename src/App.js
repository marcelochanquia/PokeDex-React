import React,{Component} from 'react';
import logo from './pokemon_logo.jpg';
import './App.css';
import PokemonList from './componentes/PokemonsList'

class App extends Component {

 constructor(){ 
  super();
  this.state = {searchValue: '',
        pokemons: []
     //     
       // ]
    }; 
  }

  
handleOnChange = event => {               
  this.setState({ searchValue: event.target.value }); 
  };

handleSearch = () => {
  this.makeApiCall(this.state.searchValue);
  };

makeApiCall = searchInput => {

    var searchUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=950`;


     fetch(searchUrl)
         
         .then(response => {
                    return response.json();            
                })
         .then(jsonData => {

              let _pokemons = jsonData.results; //variable para la lista de pokemons devuelta por el api
              let search = this.state.searchValue.trim().toLowerCase(); // el text a buiscar se convierte todo en minúscula

              //if (search.length > 0) {
                _pokemons = _pokemons.filter(function(pokemon) { //recargo la variable _pokemons con la lista ya filtrada con los coincidentes
                  return pokemon.name.toLowerCase().match(search);
                });

              //}*/
                console.log(_pokemons);
             this.setState({ pokemons: _pokemons }) //actualizo la variable de estado pokemons
         })
         .catch(function(error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message)
        });
};


render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{ color: 'white' }}>Bienvenido al buscador de Pokémons</h2>
                        <input 
                               className="App-search"
                               name="text" 
                               type="text" 
                               placeholder="nombre pokémon" 
                               onChange={event => this.handleOnChange(event)} 
                               value={this.state.searchValue}
                        
                        />
                        <button onClick={this.handleSearch} className="App-buscar">Buscar</button>
      </header>

        <div >
          <PokemonList pokemons={this.state.pokemons}/> 
        </div>
    
    </div>); 
  }
}
export default App;
