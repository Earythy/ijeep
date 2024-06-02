/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.deleteOldCommuterMarks = functions.pubsub
  .schedule("every 15 minutes")
  .onRun(async (context) => {
    const now = Date.now();
    const thirtyMinutesAgo = now - 15 * 60 * 1000; // 15 minutes in milliseconds
    const db = admin.firestore();
    const commuterMarksRef = db.collection("commutermark");

    const snapshot = await commuterMarksRef
      .where("date", "<=", new Date(thirtyMinutesAgo))
      .get();

    // Delete documents in batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Deleted ${snapshot.size} old commutermark documents.`);
  });
