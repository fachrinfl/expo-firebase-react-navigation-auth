import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyALYoJjp7TN_NtUEnkQ8sMu2tTV7AE4Ak0",
  authDomain: "authapp-c5689.firebaseapp.com",
  projectId: "authapp-c5689",
  storageBucket: "authapp-c5689.appspot.com",
  messagingSenderId: "697688861882",
  appId: "1:697688861882:web:4d34a4dcc27561bb126683"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const Firebase = {
    app: firebaseApp,
    auth: firebaseAuth
}

export default Firebase;