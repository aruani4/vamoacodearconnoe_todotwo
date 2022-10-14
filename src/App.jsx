//form
//SearchList / boton de agregar
//item
//tachar el elemento agregado
//Boton de eliminar



import { Form } from './components/Form/Form';
import './App.css'
import { List } from './components/List/list';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.elements.add.value
    setItems([...items, {id: +new Date(), value: inputValue, completed: false }])
    e.target.elements.add.value = ''
  }


  return (
    <div className="App">
      <Form onSubmit={handleSubmit}/>
      <List  items={items} setItems={setItems} />
    </div>
  )
}

export default App


