import React, { useEffect, useState } from "react";
import "./styles/App.css"
import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsloading] = useState(true)

  // Если полльзователь уже был авторизован при закрытии приложения, то при запуске юзер снова будет автоматически авторизован
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsloading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth, 
      isLoading
    }}>
      <BrowserRouter>

        <Navbar/>
        <AppRouter/>

      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
