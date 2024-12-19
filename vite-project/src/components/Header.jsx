import React from 'react'

function Header() {
  const ulStyle = {
    backgroundColor: '#212529',
    padding: '20px',
    textAlign: 'center',
    display:'flex',
    justifyContent:'center'
  }
return (
  <>
    <nav>
      <div style={{ backgroundColor: '#212529' }} className="start">
        <h1>Start Bootstrap</h1>
      </div>
      <ul style={ulStyle}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>
  </>
)
}

export default Header
