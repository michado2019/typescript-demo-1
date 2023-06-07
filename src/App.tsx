import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Assertion from './components/state/Assertion';
import Reducer from './components/state/Reducer';

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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('Button clicked', event, id)
  }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event)
  }
  return (
    <div className="App">
      <Greet name="Mike" messageCount={100} isLoggedIn={false} />
      <Person name={name}/>
      <PersonList names={names}/>
      <Status status="success" />
      <Button handleClick={handleClick}/>
      <br />
      <Input handleChange={handleChange} value=''/>
      <Container styles={{border: "4px solid red", fontSize: "32px", margin: "0 100px"}} />
      <LoggedIn />
      <User />
      <Assertion />
      <Reducer />
    </div>
  );
}

export default App;
