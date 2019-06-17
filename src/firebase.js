// Other imports
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<PROJECT_ID>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<PROJECT_ID>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
    appId: "<APP_ID>"
}

firebase.initializeApp(config)

export const db = firebase.firestore().collection('comments')


export default firebase