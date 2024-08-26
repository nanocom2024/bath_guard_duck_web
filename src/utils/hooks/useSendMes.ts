import {getMessaging} from "firebase-admin/messaging";
import {initializeApp} from "firebase-admin/app";


const useSendMes = () => {
  const topic = 'highScores';

const message = {
  data: {
    score: '850',
    time: '2:45'
  },
  topic: topic
};

const firebaseConfig = {
    apiKey: "AIzaSyAeLkkug45n12jHuXbiejbdVnJfDY8PFnA",
    authDomain: "bathguardduck.firebaseapp.com",
    projectId: "bathguardduck",
    storageBucket: "bathguardduck.appspot.com",
    messagingSenderId: "541742638673",
    appId: "1:541742638673:web:a3e681348e0ae1926fba70",
    measurementId: "G-6N151G1YXV"
};

const app = initializeApp(firebaseConfig);


  // Send a message to devices subscribed to the provided topic.
  getMessaging(app).send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}

export default useSendMes;