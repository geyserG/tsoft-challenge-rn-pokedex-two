import { createContext, PropsWithChildren } from 'react';
import { GetPokemonDetails } from '../../domain/usecases/GetPokemonDetails';
import { GetPokemonList } from '../../domain/usecases/GetPokemonList';

interface PokemonDependencies {
  getPokemonList: GetPokemonList;
  getPokemonDetails: GetPokemonDetails;
}

const PokemonDependencyContext = createContext<PokemonDependencies | null>(
  null,
);

interface PokemonDependencyProviderProps extends PropsWithChildren {
  dependencies: PokemonDependencies;
}

const PokemonDependencyProvider = ({
  children,
  dependencies,
}: PokemonDependencyProviderProps) => {
  return (
    <PokemonDependencyContext.Provider value={dependencies}>
      {children}
    </PokemonDependencyContext.Provider>
  );
};

export default PokemonDependencyProvider;
