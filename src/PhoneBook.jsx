import React, { useState } from 'react'

const PhoneBook = () => {

  const [person, setPerson] = useState([{ name: 'Arto Helles', number: "+977 9866216753" }])
  const [setName, setNewName] = useState("");
  const [setNumber, setNewNumber] = useState("")

  function handleOnchangePerson(e) {
    console.log(e.target.value);
    setNewName(e.target.value);
  }

  function handleOnchangeNumber(e) {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  }

  function addPrson(e) {
    e.preventDefault();
    const newPerson = {
      name: setName,
      number: setNumber
    }
    if (setName !== "") {
      if (person.includes(setName)) {
        alert("Persion already exist")
      } else {
        setPerson(person.concat(newPerson))
        setNewName("")
        setNewNumber("")
      }
    } else {
      alert("Name is empty")
    }
  }

  return (
    <>
      <h1>Phone Book</h1>
      <form onSubmit={addPrson}>
        <div>
          <input name="" onChange={handleOnchangePerson} value={setName} />
        </div>
        <div>
          <input name="" onChange={handleOnchangeNumber} value={setNumber} />
        </div>

        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {React.Children.toArray(
          person.map(item => <li>Name : {item.name}, Number : {item.number}</li>)
        )
        }
      </ol>
    </>
  )
}

export default PhoneBook
