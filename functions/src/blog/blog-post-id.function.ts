import * as functions from "firebase-functions";
import {CloudFunction, EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";

export const blogPostId: CloudFunction<DocumentSnapshot> = functions.firestore.document('blog-posts/{id}').onCreate((snap: DocumentSnapshot, context: EventContext) => {
    return snap.ref.update({id: snap.ref.id})
});