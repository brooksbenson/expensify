const notes = [
  {
    body: 'This is my note',
    title: 'First note'
  },
  {
    body: 'This is another note',
    title: 'Another note'
  },
  {
    body: 'This is the body',
    title: 'This is the title'
  }
];

// building lists
const notesRef = db.ref('notes');
for (let note of notes) {
  // using push method to add list item
  notesRef.push(note);
}

// subscriptions
setTimeout(() => {
  notesRef.on('value', (snapshot) => console.log(buildNotes(snapshot)));
  notesRef.on('child_removed', (snapshot) => console.log(snapshot.val()));
  notesRef.on('child_changed', (snapshot) => console.log(snapshot.val()));
  notesRef.on('child_added', (snapshot) => console.log(snapshot.val()));
}, 2500);

// accessing lists
function buildNotes(snapshot) {
  const notes = [];
  snapshot.forEach(child => {
    notes.push({
      id: child.key,
      ...child.val()
    });
  });
  return notes;
}