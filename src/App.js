import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Homepage from './components/Homepage'
import FamilyList from './components/FamilyList'
import FamilyForm from './components/FamilyForm'



export default function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<FamilyList />} />
        <Route path='/form' element={<FamilyForm />} />
      </Routes>
    </Router>
   </div>
  )
}