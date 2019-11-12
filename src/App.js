import React,{Component} from 'react';
import logo from './pokemon_logo.jpg';

import './App.css';

class App extends Component {

 constructor(){ 
  super();
  this.state = {searchValue: '',
        pokemons: []
     //     
       // ]
    }; 
  }

  
handleOnChange = event => {               //Metodo de la clasee con funcion flecha
  this.setState({ searchValue: event.target.value }); //
  };

handleSearch = () => {
  this.makeApiCall(this.state.searchValue);
  };

makeApiCall = searchInput => {

    var searchUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=950`;


    //var searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

     fetch(searchUrl)
         
         .then(response => {
                    return response.json();            
                })
         .then(jsonData => {

              let _pokemons = jsonData.results;
              let search = this.state.searchValue.trim().toLowerCase();

              //if (search.length > 0) {
                _pokemons = _pokemons.filter(function(pokemon) {
                  return pokemon.name.toLowerCase().match(search);
                });

              //}*/
                console.log(_pokemons);
             this.setState({ pokemons: _pokemons })
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
                        <input name="text" 
                               type="text" 
                               placeholder="nombre pokémon" 
                               onChange={event => this.handleOnChange(event)} 
                               value={this.state.searchValue}
                        
                        />
                        <button onClick={this.handleSearch}>Buscar</button>
      </header>



      {this.state.pokemons ? (
        <div>
            {

              this.state.pokemons.map((poke, index) => (
            <div  key={index}>
              <h2>Nombre: {poke.name}</h2>
              <h2>
                {<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+poke.url.split('/')[poke.url.split('/').length -2]+'.png?raw=true'} alt="team-thumbnail" height="200" width="200" />}
              </h2>
            </div>
            ))
             
            }
        </div>
        ) : (
        <p>Try searching for a pokémon</p>
        )}
  
    </div>); 
}
}
export default App;
