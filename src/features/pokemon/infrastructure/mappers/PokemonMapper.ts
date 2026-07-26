import { Pokemon } from '../../domain/entities/PokemonDetails';
import { PokemonResponseDto } from '../dtos/PokemonResponseDto';

export class PokemonMapper {
  static toDomain(pokemonDto: PokemonResponseDto): Pokemon {
    return {
      pokemonId: pokemonDto.id,
      name: pokemonDto.name,
      imageUrl: pokemonDto.sprites.other['official-artwork'].front_default,
      heightInMeters: pokemonDto.height / 10,
      weightInKilograms: pokemonDto.weight / 10,
      description: 'Pokemon Description',
    };
  }
}
