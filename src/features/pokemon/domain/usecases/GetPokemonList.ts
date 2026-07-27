import { PokemonList } from '../entities/PokemonList';

export interface GetPokemonList {
  execute(offset: number, limit: number): Promise<PokemonList>;
}
