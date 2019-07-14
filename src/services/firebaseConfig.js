const firebase = require('firebase');

const firebaseConfig = {
	apiKey: 'AIzaSyBI3cMsTNAsWZziiB3nVcS26sJZ4xzxPqw',
	authDomain: 'nineteam-8187b.firebaseapp.com',
	databaseURL: 'https://nineteam-8187b.firebaseio.com',
	projectId: 'nineteam-8187b',
	storageBucket: '',
	messagingSenderId: '711247234118',
	appId: '1:711247234118:web:4a384b1f4a08e80a'
};

const Firebase = firebase.initializeApp(firebaseConfig);

const FirebaseDB = Firebase.database();

module.exports = FirebaseDB;
