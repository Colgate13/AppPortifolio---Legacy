import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sobre from './src/pages/Sobre.js'
import Home from "./src/pages/Home.js";
import Porti from "./src/pages/Porti.js";


function HomeScreen({navigation}) {//Função onde vai ficar a page Home
  return(<Home navigation={navigation}></Home>); 
}

function SobreScreen({navigation}) {//Função onde vai ficar a page Sobre
  return(<Sobre></Sobre>);
}

function PortifolioScreen({navigation}) {//Função onde vai ficar a page Portifolio
  return(<Porti></Porti>);
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
