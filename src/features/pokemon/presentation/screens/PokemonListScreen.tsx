import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { usePokemonList } from '../hooks/usePokemonList';
import { SafeAreaView } from 'react-native-safe-area-context';

const PokemonListScreen = () => {
  const { data } = usePokemonList();
  console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>PokemonListScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  container: {},
});
