import React, {useState} from 'react'
import Header from './Header'
import Form from './Form'
import Note from './Note'
import Footer from './Footer'
import {toast} from 'react-toastify'
import { nanoid } from 'nanoid'

const setLocalStorage = (notes) => {
  localStorage.setItem('myNotes', JSON.stringify(notes));
}
const defaultValue = JSON.parse(localStorage.getItem('myNotes') || '[]');

const App = () => {
  const [notes, setNotes] = useState(defaultValue);
  const [note, setNote] = useState({
    title: '' ,
    content: '',
   })
   const [editing, setEditing] = useState(false);

  const addNote = (note) => {
    const newNote = {...note, id: nanoid()};
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setLocalStorage(newNotes);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    setLocalStorage(newNotes);
    toast.success('Successfully deleted!');
  }
  const editNote = (id) => {
    const item = notes.find(note => note.id === id);
    setNote(item);
    setEditing(true);
  }

  const saveEditedNote = (id) => {
    const noteIndex = notes.findIndex(note => note.id === id);
    const newNotes = [...notes];
    newNotes[noteIndex] = note;
    setNotes(newNotes);
    setLocalStorage(newNotes);
    toast.success("Successfully edited");
    setNote({title: '', content: '', });
  }

  return (
    <main>
      <Header />
      <div className='area-container'>
        <Form addNote={addNote} note={note} setNote={setNote} saveEditedNote={saveEditedNote} editing={editing} setEditing={setEditing} />
        <div className="notes-container">
        {
          notes.map(note => {
            return <Note key={note.id} id={note.id} note={note} deleteNote={deleteNote} editNote={editNote}/>
          })
        }
        </div>
    </div>
    <Footer />
    </main>
  )
}

export default App