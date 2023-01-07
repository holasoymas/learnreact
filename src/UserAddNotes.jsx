import React, { useState } from 'react'

function UserNote(props) {
  const { note } = props;
  return (
    <>
      <h2>This is note {note.id}</h2>
      <ul>
        <li>{note.id}</li>
        <li>{note.content}</li>
        <li>{note.important.toString()}</li>
        <li>{note.date}</li>
      </ul>
    </>
  )
}

const UserAddNotes = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setnewNote] = useState("")
  const [showAll, setshowAll] = useState(true)

  function addNote(e) {
    e.preventDefault();
    const myNewNote = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,   //! 50 % chance of being true
      date: new Date().toISOString()
    }
    setNotes(notes.concat(myNewNote));
    setnewNote('');
    // NOTE: console.log("This is clicked, ", e.target);
  }

  function handleNoteChange(e) {
    console.log(e.target.value);
    setnewNote(e.target.value);
  }

  const allNote = showAll ? notes : notes.filter((item) =>
    item.important === true
  )

  return (
    <>
      <h1>These are user add notes</h1>
      <button onClick={() => setshowAll(!showAll)}>Show {showAll ? 'important' : 'all'}</button>
      {allNote.map((item) =>
        <UserNote key={item.id} note={item} />
      )}

      <h1>Add New Data Here : </h1>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} name="content" />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default UserAddNotes
