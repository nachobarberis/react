import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/itemDetailContainer";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar nombre={"NachStore"}/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos a mi tienda"}/>} />
        <Route exact path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
