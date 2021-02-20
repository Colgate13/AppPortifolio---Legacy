import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Modal from "../utils/Modal";

export default function Sobre(props) {

  
  const [showModal, setModal] = useState(false);


  const openModalContato = () => 
  {
    setModal(!showModal);
  }


  let windowWidthThis = Dimensions.get('window').width -30 - 40;



  return (
    <View style={{ flex: 1 }}>
      {
        (showModal)?
        <Modal showModal={showModal} setModal={setModal} ></Modal>
        :
        <View></View>
      }


    <View style={{marginTop: 15,flex: 1, padding: 15}}>
        <ScrollView contentContainerStyle={{padding: 20}} style={styles.scrollviewEver}>

      <Text style={styles.textHeader}>Sobre</Text>
      <View style={{ backgroundColor: 'black' }}>
      <Image style={{width: windowWidthThis, height: windowWidthThis}} source={{uri: 'https://avatars.githubusercontent.com/u/54006467'}} />
      <Text style={styles.bio}>Gabriel Barros / CTO</Text>
      </View>
          <View style={{ marginTop: 12}}>
            <Text style={styles.biolong}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu facilisis enim, vel accumsan metus. Vestibulum eu pulvinar urna, non feugiat tortor. Suspendisse eget luctus quam. Donec vel diam ac turpis laoreet sagittis ac ut est. Mauris volutpat sagittis pulvinar. Proin porttitor id justo ac vestibulum. Phasellus id sem at ex iaculis suscipit eget sed justo.

Sed vel velit ligula. Vestibulum condimentum bibendum ultricies. Nullam dignissim, lectus a consectetur ornare, leo leo viverra erat, ac posuere dolor ipsum a velit. Donec id aliquet massa. Mauris lacinia molestie mollis. Vivamus vel nisi augue. Ut blandit, lorem eget tincidunt finibus, nunc ligula blandit urna, mollis placerat elit lectus at velit. Nunc diam nisl, molestie eget diam ut, semper finibus risus. Donec mollis iaculis venenatis. Maecenas luctus euismod purus et ultricies.
            </Text>
          </View>

          <TouchableOpacity onPress={() => openModalContato()} style={{...styles.btnNavigation, borderRadius: 10  }}>
        <Ionicons name="ios-chatbubbles-outline" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Contato</Text>
      </TouchableOpacity>
        </ScrollView>
    </View>
</View>
  );
}

const styles = StyleSheet.create({

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
    parentImage:{
      marginTop: 30
    },
    bio: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      textShadowColor: 'red',
      textShadowRadius: 15
    },
    biolong: {
      textAlign: 'justify',
      color: 'black',
      textShadowColor: 'blue',
      textShadowRadius: 1
    },
    modalParent: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1
    },
    boxModal: {
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: '35%',
      marginTop: '10%',
      padding: 10
    },
    textInput:
    {
      height: 35,
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
    }
  })