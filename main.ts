import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPdyVmBmfCG1sHTvHBSlyZF-0BsJx7sV4",
  authDomain: "portfolio-11179.firebaseapp.com",
  projectId: "portfolio-11179",
  storageBucket: "portfolio-11179.firebasestorage.app",
  messagingSenderId: "266496726090",
  appId: "1:266496726090:web:162d768e8dcdda102b82b3",
  measurementId: "G-QS33C11S5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
