import { createContext, PropsWithChildren, useContext } from 'react';
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

export const PokemonDependencyProvider = ({
  children,
  dependencies,
}: PokemonDependencyProviderProps) => {
  return (
    <PokemonDependencyContext.Provider value={dependencies}>
      {children}
    </PokemonDependencyContext.Provider>
  );
};

export const usePokemonDependencies = (): PokemonDependencies => {
  const value = useContext(PokemonDependencyContext);

  if (!value)
    throw new Error(
      'usePokemonDependencies solo debe usarse dentro PokemonDependencyProvider',
    );

  return value;
};
