import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyABm2M2TWaviXORNToE0WUAHqnBQzv5M-U',
  authDomain: 'ourtodo-d44b9.firebaseapp.com',
  projectId: 'ourtodo-d44b9',
  storageBucket: 'ourtodo-d44b9.appspot.com',
  messagingSenderId: '867387902021',
  appId: '1:867387902021:web:8fdc90622f72f4bd383b2c',
}

export default firebase.initializeApp(firebaseConfig)
