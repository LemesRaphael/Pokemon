import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  pokemons = <any>[]

  constructor(private pokemonList: PokemonService) { }

  ngOnInit(): void {
    this.carregarListaPokemons()
  }

  carregarListaPokemons() {
    this.pokemonList.retornaListaPokemon().subscribe(response => {
      this.carregarPokemon(response['body']['results'])
    });
  }

  carregarPokemon(pokemons: any) {
    for (let i = 0; i < pokemons.length; i++) {
      this.pokemonList.retornaPokemon(pokemons[i].name).subscribe(response => {
        this.pokemons.push(response['body'])
        this.ordenarPokemons();
      });
    }
  }

  ordenarPokemons() {
    debugger
    this.pokemons.sort(function(a: any, b: any) { 
      return a.id - b.id
    });
  }
}
