import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert} from 'react-native';

export default function ExploreScreen() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher..."
        value={query}
        onChangeText={setQuery}
         returnKeyType="search"        // affiche un bouton "Rechercher" sur le clavier
         onSubmitEditing={() => {
             Alert.alert('Résultat', `Tu as cherché: ${query}`);
         }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
});
