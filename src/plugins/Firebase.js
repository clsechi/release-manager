import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDz7HEWdU8GHO70NbGmH2DZfvyaGEzITYQ',
  authDomain: 'car-rent-control.firebaseapp.com',
  databaseURL: 'https://car-rent-control.firebaseio.com',
  projectId: 'car-rent-control',
  storageBucket: 'car-rent-control.appspot.com',
  messagingSenderId: '64153021131',
};

firebase.initializeApp(config);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore().enablePersistence();

export default ({ Vue }) => {
  Vue.prototype.$firebase = firebase;
  Vue.prototype.$firestore = firebase.firestore();
};
