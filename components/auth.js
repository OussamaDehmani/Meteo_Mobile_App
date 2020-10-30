import React, { Component } from 'react'
import { TextInput, Text, Button, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../components/server';
import * as firebase from 'firebase';
export default class Auth extends Component {


  Email = '';
  Password = '';
  error = '';
  onEnterText = (Email) => {
    if (TextInputValue.trim() != 0) {
      this.setState({ Email: Email, Password: Password });
    } else {
      this.setState({ Email: Email, Password: Password });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      error: '',
    }
  }

  auth() {
    const { navigation } = this.props;
    var firebaseConfig = {
      apiKey: "AIzaSyDsF4ga8plwnXbNm8--6qIRqcy9YD3h3is",
      authDomain: "meteo-9725c.firebaseapp.com",
      databaseURL: "https://meteo-9725c.firebaseio.com",
      projectId: "meteo-9725c",
      storageBucket: "meteo-9725c.appspot.com",
      messagingSenderId: "878682564863",
      appId: "1:878682564863:web:a809fe5aa3464e68f344ca"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    var sub = firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(() => {
        console.log('Exist');
        navigation.navigate('Home', {
          userid: this.sub

        })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          this.setState({ error: error })
        }

        if (error.code === 'auth/invalid-email') {

          this.setState({ error: error })
        }

        this.setState({ error })
        console.log(error)
      });
    return sub;
  }


  render(props) {
    const { navigation } = this.props;
    return (
      <View >
        <View >
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <View >
          <Text style={styles.emailL}>Email : </Text>
          <TextInput
            style={styles.email}
            editable
            value={this.state.Email}
            placeholder='taper votre Email'
            maxLength={40}
            onChangeText={(Email) => { this.setState({ Email }) }}
          // onChangeText={console.log(this.state.ville)}
          />
        </View>
        <View >
          <Text style={styles.passL}>Password : </Text>
          <TextInput
            style={styles.pass}
            editable
            value={this.state.Password}
            placeholder='taper votre Password'
            maxLength={40}
            onChangeText={(Password) => { this.setState({ Password }) }}
          // onChangeText={console.log(this.state.ville)}
          />
        </View >
        <View style={{marginHorizontal:15,marginTop:10}}>
          <Button
            title="Sign In "
            onPress={() => {
              this.auth(), this.setState({
                Email: '',
                Password: ''
              })
            }}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  emailL: {
    fontWeight: 'bold',
    color: "#00aced",
    marginLeft: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  email: {
    margin: 12,
    borderRadius: 5,
    padding: 4,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  passL: {
    fontWeight: 'bold',
    color: "#00aced",
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pass: {

    margin: 12,
    borderRadius: 5,
    padding: 4,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    margin: 12,
    backgroundColor: '#00aced',
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#00aced",
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    marginTop: 80,
    marginHorizontal: 90,
    alignItems: 'center',
    width: 180,
    height: 170,

  }
})
