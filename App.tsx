/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { PokemonDependencyProvider } from './src/features/pokemon/presentation/context/PokemonDependencyProvider';
import { dependencies } from './src/features/pokemon/di/pokemonContainer';
import PokemonListScreen from './src/features/pokemon/presentation/screens/PokemonListScreen';

function App() {
  return (
    <PokemonDependencyProvider dependencies={dependencies}>
      <AppContent />
    </PokemonDependencyProvider>
  );
}

function AppContent() {
  return (
    <>
      <PokemonListScreen />
    </>
  );
}

export default App;
