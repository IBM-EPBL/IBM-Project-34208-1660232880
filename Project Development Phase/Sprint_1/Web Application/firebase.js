// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmn-TzMoUVe9sBa6h56Bd4WnFJtjm0aE",
  authDomain: "ibm-smart-waste.firebaseapp.com",
  databaseURL: "https://ibm-smart-waste-default-rtdb.firebaseio.com",
  projectId: "ibm-smart-waste",
  storageBucket: "ibm-smart-waste.appspot.com",
  messagingSenderId: "426276430128",
  appId: "1:426276430128:web:4f8671bf97c4c9450728f5",
  measurementId: "G-16DJ7XEDK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);