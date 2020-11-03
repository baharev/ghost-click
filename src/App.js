import React, { useState } from "react"
import "./app.css"

export const App = () => {
  const [[first, second], setState] = useState([true, true])
  const remove = (index) => (e) => {
    e.preventDefault()
    const newState = [first, second]
    newState[index] = false
    setState(newState)
  }
  return <>
      {first &&  <div className="box blue"  onTouchStart={remove(0)} onMouseDown={remove(0)} />}
      {second && <div className="box green" onTouchStart={remove(1)} onMouseDown={remove(1)} />}
  </>
}
