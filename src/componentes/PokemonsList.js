import React,{Component} from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';


export default class PokemonList extends Component{
render(){
    return(
        <div>
         
      {this.props.pokemons ? (
        <div>
          <Grid container justify="center">
            {
              this.props.pokemons.map((poke, index) => (
            <div  key={index}>
              {/*               <h2>Nombre: {poke.name}</h2>
              <h2>
                {<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+poke.url.split('/')[poke.url.split('/').length -2]+'.png?raw=true'} alt="team-thumbnail" height="200" width="200" />}
              </h2> */}
              <PokeCard  name = {poke.name} image = {'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/'+poke.url.split('/')[poke.url.split('/').length -2]+'.png?raw=true'}/>
            </div>
            ))
             
            }
            </Grid>
        </div>
        ) : (
        <p>Try searching for a pokémon</p>
        )}
  
    </div>
    
    ); 

    }

}