import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
    private urlFormPokemon = 'https://pokeapi.co/api/v2/pokemon-form'

    constructor(private http: HttpService) { }

    retornaListaPokemon() {
        return this.http.get<any>(this.urlPokemon);
    }

    retornaPokemon(id: string) {
        return this.http.get<any>(`${this.urlFormPokemon}/${id}`)
    }
}