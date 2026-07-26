import { Pokemon } from '../entities/PokemonDetails';
import { PokemonList } from '../entities/PokemonList';

export interface PokemonRepository {
  getPokemonList(offset: number, limit: number): Promise<PokemonList>;
  getPokemonDetails(pokemonId: number): Promise<Pokemon>;
}
