import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"

createApp(App).use(store).mount('#app')

// const auth = getAuth(firebaseApp);

// onAuthStateChanged(auth, user => {
//   // Check for user status
//   if (!App) {
//     createApp(App).use(store).mount('#app')
//   }
// });
