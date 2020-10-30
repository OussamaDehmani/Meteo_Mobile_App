
import * as firebase from 'firebase';
//import 'firebase/firestore';


export  function add(v, t) {
  var date1 = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate();
  var firebaseConfig = {
    apiKey: "xx",
    authDomain: "xx",
    databaseURL: "xx",
    projectId: "xx",
    storageBucket: "xx",
    messagingSenderId: "xx",
    appId: "xx"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  //.where('uid', '=', user)
  var dbRef = firebase.firestore().collection('search');
  dbRef.add({
    ville: v,
    temperature: t,
    datesearch: date1,
  }).then(() => { console.log('inserted seccesfully ') })
  .catch((error) => { console.log(error) });


}

export async function getdata() {
  var firebaseConfig = {
    apiKey: "xx",
    authDomain: "xx",
    databaseURL: "xx",
    projectId: "xx",
    storageBucket: "xx",
    messagingSenderId: "xx",
    appId: "xx"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var mylist = [];
  var snapshot = await firebase.firestore().collection('search').get();
  snapshot.forEach((doc) => {
   // console.log('hello'+doc)
    mylist.push(doc.data());
  });
  return (mylist);
}
