import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const userList = useSelector((state) => state.users.value );

  return (
    <div>
      <div className='addUser'>
        <input type='text' placeholder="name" />
        <input type='text' placeholder="Username" />
        <button>Add User</button>
      </div>
      <div className='displayUser'>
        {userList.map((user) => {
          return <h1>{user.name}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
