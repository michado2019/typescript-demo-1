import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const name = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }
  
  const names = [
    {
      firstName: 'Bruce',
      lastName: 'Wayne'
    },
    {
      firstName: 'Mike',
      lastName: 'Adeshina'
    },
    {
      firstName: 'John',
      lastName: 'Agboola'
    }
  ]
  return (
    <div className="App">
      <Greet name="Mike" messageCount={100} isLoggedIn={false} />
      <Person name={name}/>
      <PersonList names={names}/>
    </div>
  );
}

export default App;
