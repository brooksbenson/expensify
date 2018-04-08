// accessing db
const db = firebase.database();

// overwriting root ref
db.ref().set({
  name: 'Brooks',
  age: 23,
  location: 'Provo',
  hobbies: {
    outdoors: 'Skateboarding',
    indoors: 'Coding'
  }
});

// overwriting hobbies/outdoors ref
db.ref('hobbies/outdoors').set('Skiing');

// setting new attributes ref
db.ref('attributes').set({
  height: 69,
  weight: 167
});

// removing location ref
db.ref('location')
  .remove()
  .then(_ => console.log('success'))
  .catch(_ => console.log('failure'));

// updating root ref
// passing null as a value removes properties
db.ref()
  .update({ age: 24, name: 'Eve', location: null, attributes: null })
  .then(_ => console.log('success'))
  .catch(_ => console.log('failure'));

// updating nested ref
db.ref()
  .update({ 'hobbies/outdoors': 'Biking' });

// reading from root once
db.ref()
  .once('value')
  .then(snapshot => console.log(snapshot.val()))
  .catch(e => console.log(`error: ${e}`));

// reading from hobbies once
db.ref('hobbies')
  .once('value')
  .then(snapshot => console.log(snapshot.val()))
  .catch(e => console.log('error fetching hobbies', e));

// enabling subscription on root
db.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});

// invoking subscription
db.ref().update({ name: 'Jane' });

// disabling subscription on root
setTimeout(() => {
  db.ref().off();
}, 2000);

// testing disabled subscription
setTimeout(() => {
  db.ref().update({ name: 'Sam' });
}, 4000);