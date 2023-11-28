const { initializeApp } =  require("firebase/app");
const { getFirestore , collection , getDocs} =  require("firebase/firestore");
const { getDatabase, ref, query, equalTo, get } = require('firebase/database');
const { exit } = require("process");



const firebaseConfig = {
  apiKey: "AIzaSyDzUTKnPCx3lq3mCVJ_zyrGI4VMFBGO_JI",
  authDomain: "tv-shows-6661d.firebaseapp.com",
  projectId: "tv-shows-6661d",
  storageBucket: "tv-shows-6661d.appspot.com",
  messagingSenderId: "889896965432",
  appId: "1:889896965432:web:b1406e52a6dc3b94e71dcd",
  measurementId: "G-NL94192KYM"
};

const fire = initializeApp(firebaseConfig);







// Initialize Firebase app (as you've done before)



// Initialize Firebase app (as you've done before)
const db = getFirestore(fire);


async function getUsers(db) {
    const UsersCol = collection(db, 'user');
    const Snapshot = await getDocs(UsersCol);
    const usersList = Snapshot.docs.map(doc => doc.data());
    return usersList;
  }




  const getSeries = (req) => {
    return new Promise((resolve, reject) => {
      let tv_shows = "";
  
      getUsers(db).then((users) => {
        const foundUser = users.find((user) => {
          if (user.mail === req.email) {
            if (user.password === req.password) {
              console.log("User found");
              return true;
            } else {
              console.log("Wrong password");
            }
          }
          return false;
        });
  
        if (foundUser) {
          resolve(true);
        } else {
          console.log("User not found");
          reject("User not found");
        }
      });
    });
  };
  
  module.exports = getSeries;








  