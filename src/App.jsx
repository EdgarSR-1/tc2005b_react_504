// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
// import Home from './views/Home'
// import Login from './views/Login'
// import Footer from './components/Footer'
// import AppBar from './components/AppBar'


// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const login = async (user) => {
//     const data = await fetch("http://localhost:5000/login",{
//       method: "POST", 
//       headers: {
//           "Content-Type": "application/json"
//         },
//       body: JSON.stringify(user)
//     });
//   const res = await data.json();
//   setIsLogin(res.isLogin);
//   return res.isLogin;
//   };
//   return (
//     <BrowserRouter>
//     {isLogin && <AppBar />}
//       <Routes>
//         <Route path = "/home" element = {<Home />} />
//         <Route path = "/" element = {<Login />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App


// import './App.css'
// import Home from './views/Home'
// import Login from './views/Login'
// import Footer from './components/Footer'
// import AppBar from './components/AppBar'
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import { useState } from 'react'


// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const login = async (user) => {
//     try {
//       const data = await fetch("http://localhost:5000/login", {
//         method: "POST", 
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//       });
      
//       if (!data.ok) {
//         // Handle HTTP errors
//         throw new Error(`HTTP error: ${data.status}`);
//       }
      
//       const res = await data.json();
//       setIsLogin(res.isLogin);
//       return res.isLogin;
//     } catch (error) {
//       console.error("Login error:", error);
//       return false;
//     }
//   };
  
//   const logout = () => {
//     setIsLogin(false);
//   };

//   return (
//       <BrowserRouter>
//       {isLogin && <AppBar/>}
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/' element={<Login login={login}/>}/>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
//   );
// }

// export default App


import './App.css'
import Home from './views/Home'
import Login from './views/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AppBar from './components/AppBar'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = async (user) => {
    const data = await fetch("http://localhost:5000/login",{method :"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    });
    //Convertir la respuesta json
    const res = await data.json();
    setIsLogin(res.isLogin);
    return res.isLogin;
  };
  const logout = () => {
    setIsLogin(false);
  };
  return (
    <BrowserRouter>
    {isLogin && <AppBar />}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login login={login} />} />    
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App