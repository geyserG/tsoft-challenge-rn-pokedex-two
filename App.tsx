/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import PokemonDependencyProvider from './src/features/pokemon/presentation/providers/PokemonDependencyProvider';
import { dependencies } from './src/features/pokemon/di/pokemonContainer';

function App() {
  return (
    <PokemonDependencyProvider dependencies={dependencies}>
      <AppContent />
    </PokemonDependencyProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
