import { Image } from 'expo-image';

import { Button, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#3F2A56', dark: '#3F2A56' }}
      headerImage={
        <Image 
          source={require('@/assets/images/JUNIA2025.png')}
          style={styles.reactLogo}
        />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Accueil</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.buttonContainer}>
        <Button title="IC1" color="#ff0000ff" onPress={() => router.navigate('../buildings/IC1')}>
            </Button>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button title="IC2" color="#981b1e" onPress={() => router.navigate('../buildings/IC2')}>
            </Button>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button title="ALG" color="#112e51" onPress={() => router.navigate('../buildings/ALG')}>
            </Button>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 62,
    top:12
  },
  buttonContainer: {
    gap: 10,
    height:50,
    width:50,
    fontWeight : 'bold', 
    alignSelf : 'center'
  },
  reactLogo: {
    height: 175,
    width: 175,
    bottom: 0,
    left: -10,
    position: 'absolute',
  },
});
