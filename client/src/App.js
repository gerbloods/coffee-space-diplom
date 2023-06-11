import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';


function App() {

  const [loading, setLoading] = useState(false)
  const {user} = useContext(Context)
  useEffect(()=> {
    if(localStorage.getItem("token") != null) {
      user.setIsAuth(true)
      setLoading(true)
    }else{
      setLoading(true)
    }
  }, [user])

  if(loading === false) {
    return <h1>Загрузка</h1>
  }

  return (
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  );
}

export default App;
