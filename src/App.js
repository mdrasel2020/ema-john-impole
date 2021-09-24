import React, { useState, useEffect } from 'react';
import Body from './Body';

function App() {
  const [count, setCount] = useState(10);
  const app = {
    backgroundColor: '#32502E',
    textAlign: 'center'
  }
  return (
    <div style={app}>
      <header className="App-header">




        <h1>Count: {count}</h1>
        <button onClick={() => { setCount(count + 1) }}>inCreces</button>
        <button onClick={() => { setCount(count - 1) }}>Decrices</button>


        <User />


      </header>
    </div>
  );
}

export default App;

function User() {
  const dis = {
    display: ' grid',
    gridTemplateColumns: ' auto auto auto'
  }
  const [User, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(date => setUser(date))
  }, [])
  return (
    <div>
      <h1> Dynamic Data :{User.length}</h1>
      <ul style={dis}>
        {User.map(user => {
          return <Body users={user} />
        })}
      </ul>
    </div>
  )
}
