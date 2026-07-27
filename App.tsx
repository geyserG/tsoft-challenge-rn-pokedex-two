/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { PokemonDependencyProvider } from './src/features/pokemon/presentation/context/PokemonDependencyProvider';
import { dependencies } from './src/features/pokemon/di/pokemonContainer';
import PokemonListScreen from './src/features/pokemon/presentation/screens/PokemonListScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <PokemonDependencyProvider dependencies={dependencies}>
        <AppContent />
      </PokemonDependencyProvider>
    </SafeAreaProvider>
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
