import { PokemonRepository } from '../repositories/PokemonRepository';
import { GetPokemonList } from './GetPokemonList';

export class GetPokemonListUseCase implements GetPokemonList {
  constructor(private readonly repository: PokemonRepository) {}

  execute(offset: number, limit: number) {
    return this.repository.getPokemonList(offset, limit);
  }
}
