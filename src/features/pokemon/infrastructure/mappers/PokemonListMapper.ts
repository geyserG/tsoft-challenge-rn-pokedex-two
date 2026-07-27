import Config from 'react-native-config';
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
      list: pokemonListDto.results.map((item, index) => {
        const id = this.setPokemonId(offset, index);
        return {
          id,
          name: item.name,
          imageUrl: `${Config.POKEMON_IMAGE_BASE_URL}/${id}`,
        };
      }),
    };
  }

  static setPokemonId(offset: number, currentIndex: number) {
    return offset + currentIndex + 1;
  }
}
