import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
  // response.send("Hello from Brian!");
// });
exports.manual_triggers = functions.pubsub.topic('manual_triggers').onPublish((message) => {
    console.log("yea");
    console.log(message);
});