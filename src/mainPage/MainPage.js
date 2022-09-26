import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  })
  if (!todos || !todos.length) {
    return 
  }
  return (
    <ul className='button'>
      {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.name}<button onClick={() => handleClick(todo.id)}>X</button></li>)}
    </ul>
  )
}

const TodoInput = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState()
  const handleChange = event => setNewTodo(event.target.value)
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      name: newTodo,
    }
  })

  return (
    <>
    <input value={newTodo} onChange={handleChange} type="text"/>
    <button className='button2' onClick={handleClick}>OK</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          
        </p>
        <Todos />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;