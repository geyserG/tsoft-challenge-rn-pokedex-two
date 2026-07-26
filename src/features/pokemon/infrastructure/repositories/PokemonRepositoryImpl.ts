import { Pokemon } from '../../domain/entities/PokemonDetails';
import { PokemonList } from '../../domain/entities/PokemonList';
import { PokemonRepository } from '../../domain/repositories/PokemonRepository';
import { PokemonRemoteDataSource } from '../datasource/PokemonRemoteDataSource';
import { PokemonListMapper } from '../mappers/PokemonListMapper';
import { PokemonMapper } from '../mappers/PokemonMapper';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private readonly remoteDataSource: PokemonRemoteDataSource) {}

  async getPokemonList(offset: number, limit: number): Promise<PokemonList> {
    const response = await this.remoteDataSource.getPokemonList(offset, limit);
    return PokemonListMapper.toDomain(response, offset);
  }

  async getPokemonDetails(pokemonId: number): Promise<Pokemon> {
    const response = await this.remoteDataSource.getPokemonDetails(pokemonId);
    return PokemonMapper.toDomain(response);
  }
}
