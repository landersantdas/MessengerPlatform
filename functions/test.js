var config = {
        apiKey: "AIzaSyCUVCJ453FqXEcmUxXthq9oSi2Nex7qKC4",
        authDomain: "fir-functions-bc2ab.firebaseapp.com",
        databaseURL: "https://fir-functions-bc2ab.firebaseio.com",
        projectId: "fir-functions-bc2ab",
        storageBucket: "fir-functions-bc2ab.appspot.com",
        messagingSenderId: "294274764437"
      };
      
const functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
let firestrore = admin.firestore();
let firebase = require('firebase');


firabase.initializeApp(config);





var FBMessenger = require('fb-messenger');
var messenger = new FBMessenger('EAADWhiHBnQoBACy8w0RN20kNqQd02duaraYZAGYBt4lBIZB3SLiWZAZByxWvmR7SVRY46LtGMnZA2CBMmmsZCqkS9pL3ALvb6e4adGuSueSuMp0U5UZAkOS2Luxo3QU8j2QZBm7YObOgYY4ttxcyFEefPWXDczSAzJl3Frs660FopAZDZD');
        
messenger.sendTextMessage('1654303328018515', 'Hello');
        

firestrore.collection('conversation').get()
.then((querySnapshot) => {

    var conversation = [];
    querySnapshot.forEach((doc) => {conversation.push(doc.data() )});

    var id = "";

    conversation.forEach((eachMessageData, index) => {
        id += `${eachMessageData.originalDetectIntentRequest.payload.data.sender.id}`
    })

    console.log(id);
})
.catch((err => {
    console.log("Error: ", err);
    response.send({
        fulfillmentText: "Something went wrong on showing"
    })

}))