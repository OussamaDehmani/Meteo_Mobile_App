import React, { Component } from 'react';
import { StyleSheet, Button, Alert,Image, Text, View, ImageBackground, TextInput, Card,FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {add,getdata} from './server';
import { Icon } from 'react-native-elements'

  export default class Favoris extends Component {
iconetype="favorite-border";
    dataFromImput="";
    Myvar="";
  constructor(props) {
    super(props);

    this.state = {
      ville:'',
      icon:"",
      desc:'',
      temperature:0,
      error:'',
      Myvar:this.props.route.params.data1,
    
  };
  }
  getdata(){
  
      let url =  `http://api.openweathermap.org/data/2.5/weather?q=${this.props.route.params.data1}&units=imperial&appid=8f08f225d829ea30971861473c00202a`;
    
      fetch(url)
      .then(response => response.json())
      
      .then(data => {
       
          this.setState({
  
              icon:data.weather[0]['icon'],
              desc:data.weather[0]['description'],
              temperature: data.main.temp,
              ville: data.name,
      })
      }).then(()=>{add(this.state.ville,this.state.temperature,new Date());      }
    
  
    
    )
  
  }
    componentDidMount(props) {

   this.getdata()
    
   

  }

 render() {


  return (

 <View style={styles.weatherContainer}>
     <View style={styles.add}>
            
            
            </View>
      <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={48} name={this.state.iconetype} color={'#fff'} />
          <Text style={styles.temperature}>Temperature {((5/9)*(this.state.temperature-32)).toFixed(0)}˚</Text>
         <View style={styles.line}>
        <MaterialCommunityIcons size={48} name="map" color={'#fff'} />
        <Text style={styles.city} >{this.state.ville} </Text>
         </View>
         <View>
        <Image
                style={styles.tinyLogo}
                source={{
                  uri: `http://openweathermap.org/img/wn/${this.state.icon}.png`,
                }}
        />
      </View>
      </View>
      <View style={styles.bodyContainer}>
          <Text style={styles.descr} >{this.state.desc}</Text>
      </View>
     

      <View style={styles.container}>
                <Text>{this.state.data}</Text>
            </View>

            <View >
             
            </View>
   </View>
  );

  
}


}


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#00aced'
  },
  headerContainer: {
    marginTop:150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    fontSize: 40,
    color: '#fff'
  },
  city: {
    fontSize: 30,
    color: 'gray',

  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
   // paddingLeft: 25,
   // marginBottom: 40
  },
 descr:{
   marginBottom:20,
  color:'grey',
  fontSize:25,
  marginLeft:40,
  textTransform: 'capitalize'
 },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  tinyLogo: {

    width: 180,
    height: 180
  }
});



