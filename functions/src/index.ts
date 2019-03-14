require('./manual');
export * from './manual'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
// response.send("Hello from Brian!");
// });
// exports.collect_organizations = functions.auth.user().onCreate((user) => {
//
// });


// exports.blogPostId = functions.firestore.document('blog-posts/{id}').onCreate((snap: DocumentSnapshot, context: EventContext) => {
//     return snap.ref.update({id: snap.ref.id})
// });