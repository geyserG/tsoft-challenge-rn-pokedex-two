import { GetPokemonDetails } from './GetPokemonDetails';
import { PokemonRepository } from '../repositories/PokemonRepository';

export class GetPokemonDetailsUseCase implements GetPokemonDetails {
  constructor(private readonly repository: PokemonRepository) {}

  execute(pokemonId: number) {
    return this.repository.getPokemonDetails(pokemonId);
  }
}
