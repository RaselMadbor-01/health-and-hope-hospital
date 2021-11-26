// const firebaseConfig = {
//   apiKey: "AIzaSyCUOs30vhR8R_Yo8WrIB8FnhycuXfgm6jw",
//   authDomain: "health-and-hope-hospital-1e98f.firebaseapp.com",
//   projectId: "health-and-hope-hospital-1e98f",
//   storageBucket: "health-and-hope-hospital-1e98f.appspot.com",
//   messagingSenderId: "986049207603",
//   appId: "1:986049207603:web:4f2b1d07085775c84ef246"
// };
// export default firebaseConfig;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
export default firebaseConfig;