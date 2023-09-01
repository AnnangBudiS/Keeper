import { useState } from "react"
import InputForm from "./components/Form/Input"
import Header from "./components/Header/Header"
import Note from "./components/Note/Note"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [ notes, setNotes ] = useState([])

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [ ...prevNotes, newNote ]
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="">
      <Header />
      <InputForm onAdd={addNote} />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto">
        {notes.map((notesItem, index) => {
          return (
            <Note 
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onDelete={deleteNote} />
          )
        })}
      </div>
     <Footer />
    </div>
  )
}

export default App