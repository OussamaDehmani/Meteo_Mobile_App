import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from './components/home';
import favoris from './components/favoris';
import listFavoris from './components/listFavoris';
import auth from './components/auth';
import { Icon } from "react-native-elements";
import { StyleSheet, TouchableHighlight, Alert,Image, Text, View, ImageBackground, TextInput, Card,FlatList, Button } from 'react-native';

const Tabs = createBottomTabNavigator( );
const stack = createStackNavigator( );

export default  HomeStackScreen = (props) => (
  <NavigationContainer>
    <stack.Navigator>

      <stack.Screen name="Home" component={home}  options={({ navigation, route }) => ({ 
        headerLeft:null, 
        headerRight: () => (
        <Icon style={styles.fav}
          size={30}
          onPress={() => {navigation.navigate('listFavoris')}}
          name="favorite"
          color="#fff"
        />
      ),
        headerTintColor:'white',
        headerStyle: {
          backgroundColor: '#00aced'
        }   })} />
      <stack.Screen name="Favoris" component={favoris}  options={({ navigation, route }) => ({
        headerRight: () => (
          <Icon style={styles.fav}
            size={30}
            onPress={() => {navigation.navigate('listFavoris')}}
            name="favorite"
            color="#00aced"
          />
        ),
        headerTitle:'search',
        headerTintColor:'#00aced',
        headerStyle: {
          backgroundColor:'white'
        }
      })} />
      <stack.Screen name="listFavoris" component={listFavoris}
          options={({ navigation, route }) => ({
            headerLeft: null,
            headerRight: () => (
              <Icon style={styles.fav}
                size={30}
                onPress={() => {navigation.navigate('Home')}}
                name="home"
                color="#00aced"
              />
            ),
          headerTitle: 'Favoris' ,
          headerTintColor:'#00aced',
          headerStyle: {
            backgroundColor: 'white'
          }
        })} />
     
    </stack.Navigator>
  </NavigationContainer>
);

const styles=StyleSheet.create({
  fav:{
    marginRight:5,
  }
})