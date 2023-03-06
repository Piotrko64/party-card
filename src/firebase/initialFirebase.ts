// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { DataToWriteToDataBaseType } from "types/firebase/DataToWrite";
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

export async function writeNewData(cardInfo: DataToWriteToDataBaseType, id: string) {
    const reference = ref(db, "cards/" + id);

    await set(reference, cardInfo).catch((err) => {
        throw new Error(err);
    });
}
