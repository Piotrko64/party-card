// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { DataToWrite } from "types/firebase/DataToWrite";
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    databaseURL: import.meta.env.VITE_databaseURL,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase();

export function writeNewData(cardInfo: DataToWrite, id: string) {
    const reference = ref(db, "cards/" + id);
    set(reference, cardInfo)
        .then((e) => console.log(e))
        .catch((e) => console.log(e));
}
