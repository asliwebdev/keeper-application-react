import React from 'react'
import {FaTrashAlt, FaEdit} from 'react-icons/fa'

const Note = ({id, note, deleteNote, editNote}) => {
  return (
    <div className='single-note'>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <div className="btn-container">
        <button onClick={() => editNote(id)}><FaEdit /></button>
        <button onClick={() => deleteNote(id)}><FaTrashAlt /></button>
      </div>
    </div>
  )
}

export default Note