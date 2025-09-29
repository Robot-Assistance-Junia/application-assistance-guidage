import { Link, router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
//6 étages
export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Ceci est un plan d'IC1.</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link"></ThemedText>
      </Link>
      <Button title="Accueil" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
        </Button>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});