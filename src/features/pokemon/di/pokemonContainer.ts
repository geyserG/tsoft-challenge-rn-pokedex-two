import { httpClient } from '../../../app/di/container';
import { GetPokemonDetailsUseCase } from '../domain/usecases/GetPokemonDetailsUseCase';
import { GetPokemonListUseCase } from '../domain/usecases/GetPokemonListUseCase';
import { PokemonRemoteDataSourceImpl } from '../infrastructure/datasource/PokemonRemoteDataSourceImpl';
import { PokemonRepositoryImpl } from '../infrastructure/repositories/PokemonRepositoryImpl';

const pokemonRemoteDataSourceImpl = new PokemonRemoteDataSourceImpl(httpClient);

const pokemonRepository = new PokemonRepositoryImpl(
  pokemonRemoteDataSourceImpl,
);

const getPokemonListUseCase = new GetPokemonListUseCase(pokemonRepository);

const getPokemonDetailsUseCase = new GetPokemonDetailsUseCase(
  pokemonRepository,
);

export const dependencies = {
  getPokemonList: getPokemonListUseCase,
  getPokemonDetails: getPokemonDetailsUseCase,
};
