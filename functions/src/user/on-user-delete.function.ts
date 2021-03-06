import * as admin from "firebase-admin"
import * as functions from "firebase-functions";

const firestore: FirebaseFirestore.Firestore = admin.initializeApp(functions.config().firebase).firestore();
const COLLECTION_USERS = "users";

export const onUserDelete = functions.auth.user().onDelete((user) => {
    return firestore.collection(COLLECTION_USERS).doc(user.uid).delete();
});
