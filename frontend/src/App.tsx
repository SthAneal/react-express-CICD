import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

type userInfo = {
  name:string
}

function App() {
  const [user, setUser] = useState<userInfo>({} as userInfo);

  useEffect(()=>{
    getName();
  }, [])

  const getName = async ()=>{
    const response = await axios.get('/name');
    console.log(response);
    setUser({name:response.data});
  }

  return (
    <>
      <div>User name:</div>
      <div>{user.name}</div>
    </>
  );
}

export default App;
