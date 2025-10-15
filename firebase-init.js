// Cole aqui o firebaseConfig do seu app (console.firebase.google.com)
// Exemplo:
// const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "...", ... };
const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_PROJETO.firebaseapp.com',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_BUCKET.appspot.com',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID'
};
// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
