
import * as firebase from 'firebase';
//import 'firebase/firestore';


export function add(v, t) {

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
  var dbRef = firebase.firestore().collection('search');
  var date1 = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate();
  dbRef.add({
    ville: v,
    temperature: t,
    datesearch: date1
  }).then(() => { console.log('inserted seccesfully ') })
    .catch((error) => { console.log(error) });

}

export async function getdata() {
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
  var mylist = [];
  var snapshot = await firebase.firestore().collection('search').orderBy('datesearch').get()
  snapshot.forEach((doc) => {
    mylist.push(doc.data());
  });
  return (mylist);
}
