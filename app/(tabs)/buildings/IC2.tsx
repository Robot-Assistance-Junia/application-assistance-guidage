import { Link, router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title" >Ilôt Colson 2 (IC2)</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link"></ThemedText>
      </Link>
      <Button title="Accueil" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
        </Button>
      
      <SafeAreaProvider>
        <SafeAreaProvider style={{flexDirection:'row', alignSelf: 'flex-start',}}>

        <SafeAreaView style={{flex:5, width: '10%', justifyContent: 'space-evenly',}}>
          
          <Button title="Etage 9" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>

          <Button title="Etage 8" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>
          
          <Button title="Etage 7" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>

          <Button title="Etage 6" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>
          
          <Button title="Etage 4" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>
          
          <Button title="Etage 3" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>
          
          <Button title="Etage 2" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>
          
          <Button title="Etage 1" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button>

          <Button title="Rez de Chaussée" color="#272727ff" onPress={() => router.navigate('/(tabs)')}>
            </Button> 
          
                    </SafeAreaView>
          <SafeAreaView style={{justifyContent: 'center', alignItems:'center', width:'90%', height:'100%'}}>
          
          {/* <Image1/> */}
          
          </SafeAreaView>
        </SafeAreaProvider>
      
      </SafeAreaProvider>
      
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
  title: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  map:{
    justifyContent: 'space-between',
    marginTop: 5,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});