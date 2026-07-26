import { PokemonRepository } from '../repositories/PokemonRepository';

export class GetPokemonListUseCase {
  constructor(private readonly repository: PokemonRepository) {}

  execute(offset: number, limit: number) {
    return this.repository.getPokemonList(offset, limit);
  }
}
