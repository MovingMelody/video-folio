import { initializeApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBzzEWCJNIa3Hvh0K5JWP7obGS_nRJXQmc",
    authDomain: "aelin-media-video-folio.firebaseapp.com",
    projectId: "aelin-media-video-folio",
    storageBucket: "aelin-media-video-folio.appspot.com",
    messagingSenderId: "578604785605",
    appId: "1:578604785605:web:627de0db8ab1de92caf5ac",
    measurementId: "G-8JLPX8KQ4W"
};

const app = initializeApp(firebaseConfig);

export default app