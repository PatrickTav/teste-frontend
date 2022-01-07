// import { useState, useEffect } from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import * as C from "./AppStyles"
import { Aside } from './componentes/Aside'
import Rotas from "./componentes/Rotas/Rotas"



const App = () => {
 
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [filtros, setFiltros] = useState([])
  
  const [dataRotas, setDataRotas] = useState(0)

  useEffect(() => {
    fetch("https://api-d1-test.herokuapp.com/api/filter")
      .then(res => res.json())
      .then(
        res => setFiltros(res))}, [])
  
  

  
  const handleFilter = (item, index) => {

    return (
      <div key={index}>
        <ul >
          <li onClick={() => setDataRotas(item.id)} > {item.name} <span>{item.quantity}</span> </li>
        </ul>
      </div>
    )
  }

  return (
    <C.Container>
      <C.Body className='body'>
        <C.Aside className='aside'>
          <Aside />
        </C.Aside>
       
       
        <C.Header className='header'>
          <header >
            <div className="header-left">
              <div className="perfil">
                A
              </div>
              <div className="logo">
                [<img src='../../public/logo192.png' alt='logo.png'></img>]
              </div>
            </div>
            <div className="header-right">
              <div className="search">
                <div className="img-search">
                </div>
                <input type='text' placeholder="Buscar" />
              </div>
              <div className="button">
                <button > Nova Jornada + </button>
                

               
                
                
              </div>
            </div>
          </header>
        </C.Header>

        <C.Filter className='filter'>
          <h3>Jornada</h3>
          <div className='filter-int'>
            <ul className='list-filter'>
              {filtros.map((item, index) => handleFilter(item, index))}
            </ul>
          </div>
        </C.Filter>


        <Rotas id={dataRotas} />


      </C.Body>


      
    </C.Container>

  )
}

export default App