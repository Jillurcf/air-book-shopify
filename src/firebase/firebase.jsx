// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjIjzRypZYe6LwUgV18sDKcymCBEQgA2w",
  authDomain: "shopify-project-d82f0.firebaseapp.com",
  projectId: "shopify-project-d82f0",
  storageBucket: "shopify-project-d82f0.appspot.com",
  messagingSenderId: "845619823451",
  appId: "1:845619823451:web:64bd671d0765f6fcff907e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;