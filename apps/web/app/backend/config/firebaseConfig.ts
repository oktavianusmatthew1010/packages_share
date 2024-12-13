const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };

const { db } = require('../config/firebaseConfig');
const { collection, doc, setDoc, getDoc } = require('firebase/firestore');

const userCollection = collection(db, 'USERS');

const updateUser = async (userId, userData) => {
    const userDoc = doc(userCollection, userId);
    await setDoc(userDoc, userData, { merge: true });
};

const fetchUser = async (userId) => {
    const userDoc = doc(userCollection, userId);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? userSnapshot.data() : null;
};

module.exports = { updateUser, fetchUser };