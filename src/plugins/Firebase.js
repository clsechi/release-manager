import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBpEUPuQSYjdZggftirH2-59z9_H_Joz_s',
  authDomain: 'release-manager-e9c24.firebaseapp.com',
  databaseURL: 'https://release-manager-e9c24.firebaseio.com',
  projectId: 'release-manager-e9c24',
  storageBucket: 'release-manager-e9c24.appspot.com',
  messagingSenderId: '898341645086',
};

firebase.initializeApp(config);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.firestore().enablePersistence();

export default ({ Vue }) => {
  Vue.prototype.$firebase = firebase;
  Vue.prototype.$firestore = firebase.firestore();
};
