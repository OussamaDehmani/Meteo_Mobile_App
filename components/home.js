import React, { Component }  from 'react';
import { StyleSheet, View, Button, Image, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Icon } from 'react-native-elements'
import listFavoris from './listFavoris'; 
import {add,getdata} from './server';
export default class Home extends Component {
  ville="";
  tompon=false;
  onEnterText = (ville) =>{
    if(TextInputValue.trim() != 0){
     this.setState({ville : ville, tompon : true}) ;
   }else{
       this.setState({ville : ville, tompon : false}) ;
   }
 }
  constructor(props,navigation) {
    //constructor to set default state
    super(props);
    this.state = {
      ville: '',
      color1: '#00aced'
    };
    
  }

    render (){
      const { navigation } = this.props;
 
      
      return(
        <View >
        
        
          <View style={styles.icon}>
          <Image source={require('../assets/icone_weather.jpg')} style={styles.tinyLogo}/>
          </View>
      <View  style={styles.v}>
        
          <TextInput
             style={styles.t}
             editable
             value={this.state.ville}
             placeholder='taper votre ville'
             maxLength={40}
             onChangeText={(ville) => {this.setState({ville})}}
            // onChangeText={console.log(this.state.ville)}
            />
          <Button style={styles.b}
        onPress={()=>{navigation.navigate('Favoris', {
            data1: this.state.ville
            
          });
         
        }}
        title="Search"
        color="#00aced"
        
      />
          
    
      </View>
      </View>);
    }
  }

  const styles = StyleSheet.create({
    tinyLogo: {
   
     
      width: 400,
      height: 350,
      alignContent:"center"
    },
    add: {
      flexDirection: 'row-reverse',
     // marginVertical:30,
     // flexDirection:'row'
      
    },
    v: {
     
     
      marginHorizontal: 16,
    },
    b: {
     
     borderRadius:30
    },
    t: {
      margin:10,
      marginHorizontal: 3,
      borderBottomColor: '#2175d1',
      borderBottomWidth: 1,
    }
  });