import { Link, router } from 'expo-router';
import { Button, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';


import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//6 étages
export default function ModalScreen() {
  // const image = require("@/assets/image1.svg") as string;
  let button_color;
  if (useColorScheme()==='light'){ // if the app theme is light set the button color to dark
    button_color="rgba(38, 38, 38, 1)";
  }
  else {
    button_color="rgba(217, 217, 217, 1)";// if the app theme is dark set the button color to light
  }

  return (
    <ThemedView style={styles.container}>
          <ThemedText style={styles.title} type="title" >Ilôt Colson 1 (IC1)</ThemedText>
          <Link href="/" dismissTo style={styles.link}>
            <ThemedText type="link"></ThemedText>
          </Link>
          
          <TouchableOpacity onPress = {()=>router.navigate('/buildings/ALG')}>
              <Text style={{backgroundColor:"rgba(217, 217, 217, 1)", fontSize: 20}}>Accueil</Text>
            </TouchableOpacity>
            
          
          <SafeAreaProvider>
            <SafeAreaProvider style={{flexDirection:'row', alignSelf: 'flex-start',}}>
    
            <SafeAreaView style={{flex:5, width: '10%', justifyContent: 'space-evenly',}}>
    
              <Button title="Etage 6" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                </Button>
              <Button title="Etage 5" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                </Button>
              <Button title="Etage 4" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                    </Button>
              <Button title="Etage 3" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                </Button>
              <Button title="Etage 2" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                </Button>
              <Button title="Etage 1" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                </Button>
              <Button title="Rez de Chaussée" color={button_color} onPress={() => router.navigate('/(tabs)')}>
                </Button> 
              
              </SafeAreaView>
              <SafeAreaView style={{justifyContent: 'center', alignItems:'center', width:'90%', height:'100%'}}>
                


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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});