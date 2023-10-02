import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({data}) => {

  // Props are like HTML Attributes
  // Props are passed though an object called props in the argumnets of a component

  return (
    <>
    <h1>Todo Items:</h1>
     {
      data.map(item => <div>
      <Todoitem name={item.name} value={item.value}/></div>)
     }
    </>
  )
}

export default Todolist