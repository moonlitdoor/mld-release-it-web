import * as functions from "firebase-functions";
import {EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";

exports.blogPostId = functions.firestore.document('blog-posts/{id}').onCreate((snap: DocumentSnapshot, context: EventContext) => {
    return true;
});