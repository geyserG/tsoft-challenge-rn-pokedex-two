import { HttpClient } from '../../../../shared/http/HttpClient';
import { PokemonListResponseDto } from '../dtos/PokemonListResponseDto';
import { PokemonResponseDto } from '../dtos/PokemonResponseDto';
import { PokemonRemoteDataSource } from './PokemonRemoteDataSource';

export class PokemonRemoteDataSourceImpl implements PokemonRemoteDataSource {
  constructor(private readonly httpClient: HttpClient) {}

  getPokemonList(
    offset: number,
    limit: number,
  ): Promise<PokemonListResponseDto> {
    return this.httpClient.get(`/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetails(id: number): Promise<PokemonResponseDto> {
    return this.httpClient.get(`pokemon/${id}`);
  }
}
