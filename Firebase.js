import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAxEru8zM4WX9MUys0L2j9SYmvsS0hwmNc",
    authDomain: "todo-list-react-native-5703f.firebaseapp.com",
    projectId: "todo-list-react-native-5703f",
    storageBucket: "todo-list-react-native-5703f.appspot.com",
    messagingSenderId: "110790818122",
    appId: "1:110790818122:web:00db179c5b3b1ff71529b3",
    measurementId: "G-G3E9RWZEZW"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;