import * as admin from 'firebase-admin'
import  config  from "../../config/database";

admin.initializeApp({credential: admin.credential.cert(config.urlFirebase),})
export const db = admin.firestore()