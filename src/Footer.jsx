import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ <span>{year}</span> by <span>Asliddin Bozorov</span></p>
    </footer>
  )
}

export default Footer