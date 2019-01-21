import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
  // response.send("Hello from Brian!");
// });
// exports.collect_organizations = functions.auth.user().onCreate((user) => {
//
// });
exports.manualTriggers = functions.pubsub.topic('manualTriggers').onPublish((message) => {
    console.log("yea");
    console.log(message);
    return true;
});