import CrudApp from "./components/CrudApp"
import CrudApi from "./components/CrudApi"
import SongSearch from "./components/SongSearch"
import React from "react"

function App() {

  return (
    <>
      <h1>Ejercicios React</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp/>
    </>
  )
}

export default App
