// rafce
import React from 'react'
import Todolist from './components/Todolist'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Todolist />
    </div>
  )
}

export default App