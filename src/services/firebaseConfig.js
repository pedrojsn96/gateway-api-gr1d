const firebase = require('firebase');

const firebaseConfig = {
	apiKey: 'AIzaSyBI3cMsTNAsWZziiB3nVcS26sJZ4xzxPqw',
	authDomain: 'nineteam-8187b.firebaseapp.com',
	databaseURL: 'https://nineteam-8187b.firebaseio.com',
	projectId: 'nineteam-8187b',
	storageBucket: '',
	messagingSenderId: '711247234118',
	appId: '1:711247234118:web:b09ae0791293868f'
};

const Firebase = firebase.initializeApp(firebaseConfig);

const FirebaseDB = Firebase.database();

module.exports = FirebaseDB;
