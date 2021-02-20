import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home(props) {
    return (
        <View style={{ marginTop: 10 ,flex: 1,padding: 15 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }} style={styles.scrollviewEver}>
        <Text style={styles.textHeader}>Para onde você deseja navegar</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.btnNavigation}>
        <Ionicons name="md-home" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Sobre")} style={styles.btnNavigation}>
        <Ionicons name="ios-information" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Portifolio")} style={styles.btnNavigation}>
        <Ionicons name="ios-list" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Portifolio</Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    scrollviewEver:
    {
      backgroundColor: 'white',
    },
    textHeader: 
    {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 24,
      textShadowColor: 'blue',
      textShadowRadius: 1
    },
    btnNavigation:
    {
      backgroundColor: 'purple',
      padding: 20,
      marginTop: 15,
    },
  })