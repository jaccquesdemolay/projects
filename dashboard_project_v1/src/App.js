import { React, createContext, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./components/GlobalStyles/GlobalStyles.css"

import Login from "./components/Login"
import Main from "./components/Main"
import Sales from "./components/Sales"
import Orders from "./components/Orders"
import Register from "./components/Register"

export const ThemeContext = createContext(null)
const themeLocal = localStorage.getItem("theme")

function App() {

   //check if isloggedIn, login session and logout
  const isloggedIn = window.localStorage.getItem("loggedIn")
  console.log(isloggedIn)


    const [userData, setUserData] = useState("");
   
    useEffect(() => {

      fetch("http://localhost:5000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token:window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
         
          console.log(data, "userData")
          setUserData(data.data);

        })
    }, [])

  const userName = userData.fname

  // script for the dark/light mode theme
  const [theme, setTheme] = useState(themeLocal)
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  if (toggleTheme) {
    localStorage.setItem("theme", theme)
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={ isloggedIn == "true" ? <Main theme={theme} toggleTheme={toggleTheme} userName={userName}/> : <Login theme={theme} toggleTheme={toggleTheme}/>}
          />
          <Route
            exact
            path="/main"
            element={isloggedIn != "true"? <Login theme={theme} toggleTheme={toggleTheme}/> :  <Main theme={theme} toggleTheme={toggleTheme} userName={userName}/>}
          />
          <Route
            exact
            path="/sales"
            element={isloggedIn != "true"? <Login theme={theme} toggleTheme={toggleTheme}/> :  <Sales theme={theme} toggleTheme={toggleTheme} userName={userName}/>}
          />
          <Route
            exact
            path="/orders"
            element={isloggedIn != "true"? <Login theme={theme} toggleTheme={toggleTheme}/> :  <Orders theme={theme} toggleTheme={toggleTheme} userName={userName}/>}
          />

          {/* only to add users with encrypted password, test only */}
          <Route
            exact
            path="/register"
            element={<Register theme={theme} toggleTheme={toggleTheme} userName={userName}/>}
          />
          {/*                                                      */}
        </Routes>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
