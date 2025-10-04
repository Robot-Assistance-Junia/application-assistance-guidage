import { Image } from 'expo-image';

import { StyleSheet, TouchableOpacity } from 'react-native';

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
          style={styles.JuniaLogo}
        />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Accueil</ThemedText>

      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity onPress = {()=>router.navigate('/buildings/IC1')}>
              <Image 
              style={styles.button}
              source={require('@/assets/icons/IC1.png' )}
            />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity onPress = {()=>router.navigate('/buildings/IC2')}>
              <Image 
              style={styles.button}
              source={require('@/assets/icons/IC2.png' )}
            />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity onPress = {()=>router.navigate('/buildings/ALG')}>
              <Image 
              style={styles.button}
              source={require('@/assets/icons/ALG.png' )}
            />
        </TouchableOpacity>
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
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    gap: 10,
    height:50,
    width:200,
    fontWeight : 'bold',
    alignSelf : 'center'
  },
  button: {
    height: 60,
    width: 160,
    top:0,
    bottom: 0,
    position: 'absolute',
    alignSelf:'center'
  },
  JuniaLogo: {
    height: 175,
    width: 175,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});