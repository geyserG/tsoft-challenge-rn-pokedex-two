import { PokemonList } from '../../domain/entities/PokemonList';
import { PokemonListResponseDto } from '../dtos/PokemonListResponseDto';

export class PokemonListMapper {
  static toDomain(
    pokemonListDto: PokemonListResponseDto,
    offset: number,
  ): PokemonList {
    return {
      total: pokemonListDto.count,
      nextList: pokemonListDto.next,
      previousList: pokemonListDto.previous,
      list: pokemonListDto.results.map((item, index) => ({
        id: offset + index,
        name: item.name,
        imageUrl: item.url,
      })),
    };
  }
}
