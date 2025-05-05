import {useEffect, useState} from 'react'
import './App.css'
import {useAuthStore} from "./store/auth.store.js";
import Header from "./components/Layout/Header/Header.jsx";
import PostList from "./components/Posts/PostList.jsx";
import Home from './pages/Home/Home.jsx'
import {Routing} from "../src/pages/routing/Routing.jsx";

function App() {
    const { isAuthenticated, fetchProfile } = useAuthStore();

    useEffect(() => {
      const checkAuth = async () => {
          try {
              await fetchProfile();
          } catch (error) {
              console.error('Auth check failed:', error);
          }
      };
      
      if (isAuthenticated) {
          checkAuth();
      }
  }, [isAuthenticated, fetchProfile]);


  return (
    <>
<Routing/>
    </>
  )
}

export default App
