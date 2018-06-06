const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);


exports.addMessage = functions.https.onRequest((req, res) => {
 
    const original = req.query.text;

    admin.database().ref('/messages').push({original: original}).then((snapshot) => {
        res.redirect(303, snapshot.ref.toString());
  });
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();

        var FBMessenger = require('fb-messenger');
        var messenger = new FBMessenger('EAADWhiHBnQoBACy8w0RN20kNqQd02duaraYZAGYBt4lBIZB3SLiWZAZByxWvmR7SVRY46LtGMnZA2CBMmmsZCqkS9pL3ALvb6e4adGuSueSuMp0U5UZAkOS2Luxo3QU8j2QZBm7YObOgYY4ttxcyFEefPWXDczSAzJl3Frs660FopAZDZD');
         
        messenger.sendTextMessage('1654303328018515', 'Hello');

        // var util = require('util');
        // var exec = require('child_process').exec;

        // var command = `curl -X POST -H "Content-Type:application/json" -d '{
        //     "recipient":{
        //       "id":"1654303328018515"
        //     },
        //     "message":{
        //       "text":"hello, world!"
        //     }
        //   }' "https://graph.facebook.com/v3.0/me/messages?access_token=EAADWhiHBnQoBACy8w0RN20kNqQd02duaraYZAGYBt4lBIZB3SLiWZAZByxWvmR7SVRY46LtGMnZA2CBMmmsZCqkS9pL3ALvb6e4adGuSueSuMp0U5UZAkOS2Luxo3QU8j2QZBm7YObOgYY4ttxcyFEefPWXDczSAzJl3Frs660FopAZDZD"`

        // child = exec(command, function(error, stdout, stderr){

        // console.log('stdout: ' + stdout);
        // console.log('stderr: ' + stderr);

        // if(error !== null)
        // {
        //     console.log('exec error: ' + error);
        // }

        // });

        const uppercase = original.toUpperCase();
        // // You must return a Promise when performing asynchronous tasks inside a Functions such as
        // // writing to the Firebase Realtime Database.
        // // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
        return snapshot.ref.parent.child('uppercase').set(uppercase);
  
      

    });
