import React from 'react'

const Todoitem = ({name, value}) => {

  return (
    <div>
    <h2>{name}</h2>
    <p>{value}</p>
    </div>
  )
}

export default Todoitem