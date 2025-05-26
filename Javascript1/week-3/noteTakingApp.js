
const notes = [];  


function saveNote(content, id) {

  notes.push({ content, id });
}


function getNote(id) {

  if (typeof id !== 'number') {
    console.log("Error: The id must be a number.");
    return;
  }


  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i]; 
    }
  }

 
  console.log("Note not found.");
  return;
}

function logOutNotesFormatted() {
  
  for (let i = 0; i < notes.length; i++) {
    console.log("The note with id: " + notes[i].id + " has the following note text:" + " " + notes[i].content);
  }
}


saveNote("Pick up groceries", 1); 
saveNote("Do laundry", 2);         

console.log(notes); 

const firstNote = getNote(1);  
console.log(firstNote);  

logOutNotesFormatted();
