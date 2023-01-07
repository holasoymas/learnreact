// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { notes } from './note'
import Notes from './Notes';
import PhoneBook from './PhoneBook';
import UserAddNotes from './UserAddNotes';

// TODO : Nanoid generate a unique url for the id

function App() {
  // console.log(notes)
  // const { notes } = props;
  return (
    <>
      <h1>FullStackOpen Part 2 </h1>
      {/* <ul> */}
      {/*   {notes.map((note) => */}
      {/*     <li key={nanoid()}>{note.content} </li> */}
      {/*   )} */}
      {/* </ul> */}

      <Notes notes={notes} />
      <UserAddNotes notes={notes} />
      <PhoneBook />
    </>

  );
}

export default App;
