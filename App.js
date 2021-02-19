import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import Modal from "./src/utils/Modal.js";


function HomeScreen({navigation}) {//Função onde vai ficar a page Home
  return (
    <View style={{ flex: 1,padding: 15 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }} style={styles.scrollviewEver}>
        <Text style={styles.textHeader}>Para onde você deseja navegar</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btnNavigation}>
        <Ionicons name="md-home" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sobre")} style={styles.btnNavigation}>
        <Ionicons name="ios-information" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Portifolio")} style={styles.btnNavigation}>
        <Ionicons name="ios-list" size={29} color='white'/>
        <Text style={{ color: 'white', marginTop: 8 }}>Portifolio</Text>
      </TouchableOpacity>



      </ScrollView>
    </View>
  );
}

function SobreScreen({navigation}) {//Função onde vai ficar a page Sobre

  const [showModal, setModal] = useState(false);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [number, setNumber] = useState('');

  const openModalContato = () => 
  {
    setModal(!showModal);
  }

  const enviarMensagem = () => {
    alert('Mensagem Enviada!');
  } 


  let windowWidthThis = Dimensions.get('window').width -30 - 40;



  return (
    <View style={{ flex: 1 }}>
      {
        (showModal)?
        <Modal setNome={setNome} setMensagem={setMensagem} setNumber={setNumber} enviarMensagem={enviarMensagem}></Modal>
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

function PortifolioScreen({navigation}) {//Função onde vai ficar a page Portifolio

const [images, setImages] = useState([
  {
    titulo: "Sistema de fazer pesquisa automatizado",
      img: require('./assets/img/sco.png'),
      width: 0,
      heigth: 0,
      ratio: 0,
      url: "https://github.com/Colgate13/Escollog----Applied-statistics",
    },
    {
      titulo: "Gerenciador de clientes",
      img: require('./assets/img/home1.png'),
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

const Tab = createBottomTabNavigator(); //Criando o BottomTab, a barra que fica em baixo que pode mudar de pages


function App() {//Função principal
  return (
    <NavigationContainer>{/*Comeã com o navigationContainer*/}

    {/* Tab.Navigator -> Para definiar algumas propriedades a bottomtab, colo os icones e as cores */}
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-pizza-outline';
          } else if (route.name === 'Portifolio') {
            iconName = focused ? 'ios-list-box' : 'ios-nutrition-outline';
          } else if(route.name === 'Sobre') {
            iconName = focused ? 'person-outline' : 'ios-people-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;//Retornando as propriedades do Tab.Navigator
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',//Color
        inactiveTintColor: 'purple',//COlor
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />{/* Definindo as pages */}
      <Tab.Screen name="Sobre" component={SobreScreen} />{/* Definindo as pages */}
      <Tab.Screen name="Portifolio" component={PortifolioScreen} />{/* Definindo as pages */}

    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App;

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