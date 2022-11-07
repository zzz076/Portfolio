import React from "react"
import Navbar from "./components/Navbar"
import data from "./components/data"
import Card from "./components/Card"

const Cards = data.map(item => {
  return(
    <Card 
      item = {item}
    />
  )
})

export default function App(){
  return(
    <div className="wrap">
      <Navbar />
      {Cards}
    </div>
  )
}