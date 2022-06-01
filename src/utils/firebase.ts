/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import initializeApp from '../../initialize-app.json';

firebase.initializeApp(initializeApp);

const db = firebase.firestore();
const auth = firebase.auth();

if (import.meta.env.MODE === 'development' && import.meta.env.VITE_DEBUG === 'true') {
    db.useEmulator(import.meta.env.VITE_EMULATOR_HOST, import.meta.env.VITE_EMULATOR_FIRESTORE_PORT);
    auth.useEmulator(`http://${import.meta.env.VITE_EMULATOR_HOST}:${import.meta.env.VITE_EMULATOR_AUTH_PORT}`);
    // firebase.firestore.setLogLevel('debug');
}

export { db, auth };

export default firebase;
