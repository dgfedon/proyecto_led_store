import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDSNNMfZWeeDKtz5dcylwE6f5doePlpEjc",
    authDomain: "proyecto-react-led-store.firebaseapp.com",
    projectId: "proyecto-react-led-store",
    storageBucket: "proyecto-react-led-store.appspot.com",
    messagingSenderId: "489306637085",
    appId: "1:489306637085:web:f4e018d4800788e071d7f4"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}
