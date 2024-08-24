// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getAuth} from "firebase/auth"
import { FacebookAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8bvrWS9s8qU4G-oprRxFx7rNV7OOMYKs",
  authDomain: "netflixgpt-91329.firebaseapp.com",
  projectId: "netflixgpt-91329",
  storageBucket: "netflixgpt-91329.appspot.com",
  messagingSenderId: "528712641666",
  appId: "1:528712641666:web:4b7917e3e6baee0c14589b",
  measurementId: "G-G5VJ4Q8GDZ",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth=getAuth();
export const provider = new FacebookAuthProvider();