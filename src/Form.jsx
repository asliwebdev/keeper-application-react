import React from 'react'
import {FaPlus, FaEdit} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';

const Form = ({addNote, note, setNote, editing, setEditing, saveEditedNote}) => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(note.title === '' && note.content === '' && !editing) {
        toast.error("Please note down something first");
        return;
    } 
    if(!editing) {
        addNote(note);
        setNote({title: '', content: '', });
        toast.success('Successfully noted down!');
    }
    setEditing(false);
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNote(prevNote => {
        return {...prevNote,
         [name]: value,
        }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='create-note'>
         <input type="text" name='title' placeholder='Title' value={note.title} onChange={handleChange} spellCheck='false' />
         <textarea name="content" placeholder='Take a note...' rows="3" value={note.content} onChange={handleChange} spellCheck='false'/>
         {editing ? <button onClick={() => saveEditedNote(note.id)}><FaEdit /></button> :  <button><FaPlus /></button>}
         <ToastContainer position='top-center'/>
      </form>
    </div>
  )
}

export default Form