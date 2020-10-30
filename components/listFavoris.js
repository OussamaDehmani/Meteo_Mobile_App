




import React, { Component } from 'react';
import {StyleSheet,Text, FlatList, Image, LogBox,View} from 'react-native';
import firebase from 'firebase';
import { ListItem, Avatar,Divider } from 'react-native-elements';
import weather from '../assets/weather.png';

LogBox.ignoreAllLogs(true);

export default class ListFavoris extends Component{
  list;
  constructor(props){
    
    super(props);
    this.ref = firebase.firestore().collection('search');
    this.unsubscribe = null;
    this.state={ 
      list:[],
    } 
  }


  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      
      const { ville, temperature, datesearch } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        ville,
        temperature,
        datesearch,
      });
    });
    this.setState({
      list:boards,
     
   });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
 //render
  render(){
    
    return (
      <View  style={styles.flat}>
      <FlatList 
      data={this.state.list}
      renderItem={({ item }) => (
        <View style={styles.vi} >
      <ListItem style={styles.mylist} >
      <Image source={require('../assets/weather.png')} style={styles.ratingImage}/>
      <ListItem.Content >
      <ListItem.Title style={styles.ville} >{item.ville}</ListItem.Title>
        <View style={styles.subtitleView}>
          
          <Text style={styles.temp}>{item.temperature}°</Text>
          <Text style={styles.ratingText}>{item.datesearch}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
    <Divider style={{ backgroundColor: '#00aced' }} />
    </View>
    )}
    />
    
    </View>
    );
  }
}
const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
   // paddingLeft: 10,
    //paddingTop: 5,
   },
  ville: {
  fontSize:15,
  fontWeight:"bold",
  color:'#00aced'
   // paddingLeft: 10,
    //paddingTop: 5,
   },
  ratingImage: {
    height:50,
    width: 50
  },
  ratingText: {
    paddingLeft: 150,
    color: 'grey'
  },
  mylist:{
    //borderWidth:1,
    borderRadius:5,
    backgroundColor:'#00aced'
  },flat:{
    backgroundColor:'#00aced',
    borderRadius:5
  }
  ,vi:{
    backgroundColor:'#00aced',
    borderRadius:5
  }
  ,temp:{
   marginTop:20
  }
})