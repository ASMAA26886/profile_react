import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
     
      <Profile fullName={{fullname:"asmaa"}}  bio="female" profession="sans">

      <img src="logo192.png" alt="" />

      </Profile>
  
       
    </div>
  );
}

export default App;
