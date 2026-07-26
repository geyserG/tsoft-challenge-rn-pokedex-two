import { PokemonRepository } from '../repositories/PokemonRepository';

export class GetPokemonDetailsUseCase {
  constructor(private readonly repository: PokemonRepository) {}

  execute(pokemonId: number) {
    return this.repository.getPokemonDetails(pokemonId);
  }
}
