import { Link, router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';


import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ModalScreen() {
  let button_color;
  if (useColorScheme()==='light'){ // if the app theme is light set the button color to dark
    button_color="rgba(38, 38, 38, 1)";
  }
  else {
    button_color="rgba(217, 217, 217, 1)";// if the app theme is dark set the button color to light
  }

  return (
    <ThemedView style={styles.container}>
          <ThemedText style={styles.title} type="title" >Albert Le Grand (ALG)</ThemedText>
          <Link href="/" dismissTo style={styles.link}>
            <ThemedText type="link"></ThemedText>
          </Link>
          
          <TouchableOpacity style={{backgroundColor:"rgba(217, 217, 217, 1)", borderRadius: 5, borderWidth: 5, borderColor:"rgba(217, 217, 217, 1)"}} 
            onPress = {()=>router.navigate('/(tabs)')}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Accueil</Text>
          </TouchableOpacity>
          
          <SafeAreaProvider>
            <SafeAreaProvider style={{flexDirection:'row', alignSelf: 'flex-start',}}>
    
            <SafeAreaView style={{flex:5, width: '10%', justifyContent: 'space-evenly',}}>
              
              <TouchableOpacity style={{backgroundColor:button_color, borderRadius: 5, borderWidth: 5, borderColor:button_color}} 
                onPress = {()=>router.navigate('/(tabs)')}>
                  <Text style={styles.floor}>Etage 4</Text>
                </TouchableOpacity>
                
              <TouchableOpacity style={{backgroundColor:button_color, borderRadius: 5, borderWidth: 5, borderColor:button_color}} 
                onPress = {()=>router.navigate('/(tabs)')}>
                  <Text style={styles.floor}>Etage 3</Text>
                </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:button_color, borderRadius: 5, borderWidth: 5, borderColor:button_color}} 
                onPress = {()=>router.navigate('/(tabs)')}>
                  <Text style={styles.floor}>Etage 2</Text>
                </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:button_color, borderRadius: 5, borderWidth: 5, borderColor:button_color}} 
                onPress = {()=>router.navigate('/(tabs)')}>
                  <Text style={styles.floor}>Etage 1</Text>
                </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:button_color, borderRadius: 5, borderWidth: 5, borderColor:button_color}} 
                onPress = {()=>router.navigate('/(tabs)')}>
                  <Text style={styles.floor}>Rez de Chaussée</Text>
                </TouchableOpacity>
              
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
  floor: {
    fontSize: 15, 
    textAlign:'center'
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