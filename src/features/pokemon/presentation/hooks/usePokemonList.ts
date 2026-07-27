import { useCallback, useEffect, useState } from 'react';
import { usePokemonDependencies } from '../context/PokemonDependencyProvider';
import { PokemonList } from '../../domain/entities/PokemonList';

const usePokemonList = () => {
  const [data, setData] = useState<PokemonList | null>(null);
  const { getPokemonList } = usePokemonDependencies();

  const loadPokemonList = useCallback(async () => {
    const response = await getPokemonList.execute(0, 20);
    console.log(response);

    setData(response);
  }, []);

  useEffect(() => {
    loadPokemonList();
  }, []);

  return {
    data,
  };
};

export { usePokemonList };
