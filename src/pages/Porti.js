import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';



export default function Porti(props) {

const [images, setImages] = useState([
    {
      titulo: "Sistema de fazer pesquisa automatizado",
        img: require('../../assets/img/god.jpg'),
        width: 0,
        heigth: 0,
        ratio: 0,
        url: "https://github.com/Colgate13/Escollog----Applied-statistics",
      },
      {
        titulo: "Gerenciador de clientes",
        img: require('../../assets/img/Opai.jpg'),
        width: 0,
        heigth: 0,
        ratio: 0,
        url: "https://github.com/Colgate13/Gerenciador-de-clientes",
  
      },
  
    ])
  
    const [windowWidth, setWindonWidth] = useState(0);
  
    useEffect(() => {
  
      let windowWidthN = Dimensions.get('window').width;
  
      setWindonWidth(windowWidthN - 30 - 40); // Subtraindo o padding da view e da scrollView
  
      let newImage = images.filter(function(val){
        let w = Image.resolveAssetSource(val.img).width;
        let h = Image.resolveAssetSource(val.img).height;
  
        val.width = w;
        val.heigth = h;
  
        val.ratio = h / w;
  
        return val;
      })
  
      setImages(newImage);
    }, [])
  
    const abrirNavegador = async (url) => {
        let result = await WebBrowser.openBrowserAsync(url);
    }
  
    return (
      <View style={{ flex: 1, padding: 15}}>
        <ScrollView contentContainerStyle={{padding: 20}} style={styles.scrollviewEver}>
          <Text style={styles.textHeader}>Os últimos projetos e repositorios:</Text>
  
  
      {
        images.map(function(val){
          return ( <View style={styles.parentImage}>
  
             <Text style={{ fontWeight: 'normal' ,backgroundColor: 'black' ,color: 'white', fontSize:16}}>{val.titulo}</Text>
           
              <Image style={{width: windowWidth, height: windowWidth*val.ratio, resizeMode: 'stretch'}} source={val.img}/>
          
              <TouchableOpacity onPress={() => abrirNavegador(val.url)} style={styles.btnImgOpenNavegador}>
                <Text style={{fontWeight: '800',textAlign: 'center', color: 'white', fontSize: 18 }}>Abrir Repositorio</Text>    
              </TouchableOpacity>
  
  
            </View>
          );
        })
      }
  
  
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
    parentImage:{
      marginTop: 30
    },
    btnImgOpenNavegador: {
      padding: 10,
      backgroundColor: '#5f5380'
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