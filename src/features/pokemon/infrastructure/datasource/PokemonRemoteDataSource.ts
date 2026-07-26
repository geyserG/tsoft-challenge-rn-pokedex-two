import { PokemonResponseDto } from '../dtos/PokemonResponseDto';
import { PokemonListResponseDto } from '../dtos/PokemonListResponseDto';

export interface PokemonRemoteDataSource {
  getPokemonList(
    offset: number,
    limit: number,
  ): Promise<PokemonListResponseDto>;
  getPokemonDetails(id: number): Promise<PokemonResponseDto>;
}
