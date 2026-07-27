import { PokemonSummary } from './PokemonSummary';

export interface PokemonList {
  total: number;
  nextList: string | null;
  previousList: string | null;
  list: PokemonSummary[];
}
