import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import React from 'react'

function Note(props) {
  const { datas } = props;

  return (
    <>

      <h1 style={{ textAlign: 'center', textDecoration: 'underLine', marginBottom: '10px' }}>This is Note</h1>
      <p>Id = {datas.id}</p>
      <p>Content = {datas.content}</p>
      <p>Imp = {datas.important.toString()}</p>
      <p>Date = {datas.date}</p>
    </>
  )
}

const Notes = (props) => {
  const { notes } = props;
  // console.log(notes[2].content);
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map(item =>
          // TODO :  <Note key={item.id} id={item.id} content={item.content} important={item.important.toString()} date={item.date} />
          <Note key={nanoid()} datas={item} />
        )}
      </ul>
    </>
  )
}

export default Notes
