import * as functions from "firebase-functions";

export const manualTriggers = functions.pubsub.topic('manualTriggers').onPublish((message) => {
    console.log("yea");
    console.log(message);
    return true;
});