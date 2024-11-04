import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8CeuL7-tpMaYAue2UjmeQ6sk9pjiIRMg',
  authDomain: 'danby-fire-dept.firebaseapp.com',
  databaseURL: 'https://danby-fire-dept-default-rtdb.firebaseio.com',
  projectId: 'danby-fire-dept',
  storageBucket: 'danby-fire-dept.appspot.com',
  messagingSenderId: '27639369124',
  appId: '1:27639369124:web:f304e722d4aa8385f68531'
}

const firebaseApp = initializeApp(firebaseConfig)
const timestamp = serverTimestamp
const db = getFirestore(firebaseApp)

export { timestamp, db }
