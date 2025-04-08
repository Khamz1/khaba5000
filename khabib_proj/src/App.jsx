import {useEffect, useState} from 'react'
import './App.css'
import {useAuthStore} from "./store/auth.store.js";

import Header from "./components/Layout/Header/Header.jsx";
import PostList from "./components/Posts/PostList.jsx";
import Home from './pages/Home/Home.jsx'

function App() {
    const { isAuthenticated, fetchProfile } = useAuthStore();

    useEffect(() => {
        if (isAuthenticated) {
            fetchProfile();
        }
    }, [isAuthenticated, fetchProfile]);
  // const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<PostList/>
    </>
  )
}

export default App
