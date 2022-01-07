import { useState, useEffect } from "react";
import { Container } from "./styles"

const Rotas = (props) => {

  const [itemid, setItemId] = useState([])

  useEffect(() => {
  const url = props.id === 0 ? 'https://api-d1-test.herokuapp.com/api/journey': `https://api-d1-test.herokuapp.com/api/journey/${props.id}`

    fetch(url)
      .then(res => res.json())
      .then(res => setItemId(res))
  }, [props.id])
  

  return (
    <Container className='rotas'>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Destinatário</th>
            <th>Sucesso </th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          
          {itemid.map((item)=>(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.recipients}</td>
              <td>{item.success}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>

      </table>




    </Container>

  )
}
export default Rotas