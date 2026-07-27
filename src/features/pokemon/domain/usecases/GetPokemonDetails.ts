import { Pokemon } from '../entities/PokemonDetails';

export interface GetPokemonDetails {
  execute(pokemonId: number): Promise<Pokemon>;
}
