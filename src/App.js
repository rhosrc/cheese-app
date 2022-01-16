import { useEffect, useState } from 'react'; // NAMED IMPORTS from a module
import { auth } from './services/firebase'; 

import './App.css';

import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [ user, setUser ] = useState(null); // 'null' instead of brackets b/c state(user/who) is only an object who's properties we're going to use.

  // useEffect hook is where we'll get info about user, or whether there is one
  //this method calls a callback function when something changes in authentication
      // const token = await user.getIdToken();
      // console.log(token);
  useEffect(() => {
    auth.onAuthStateChanged(user =>  
      setUser(user)); 
  }, []);

  // useEffect(() => {
    // Observer code below triggers login/logout. user refers to user that Google gives us.
 
 // empty dependency array. I only want this effect ONCE, at mounting.
  //creating a prop for the header and main
  return (
    <div className="App">
     <Header user={user} /> 
     <Main user={user} />
    </div>
  );
}

export default App;
