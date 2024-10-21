import React, { useState } from 'react';

import Expense from './components/Expense'
import Income from './components/Income'
import Navbar from './components/Navbar'
import SubmissionFrom from './components/SubmissionFrom'
import TotalBalence from './components/TotalBalence'

function App() {



  const [activeButton, setActiveButton] = useState('income')
  console.log(activeButton)

  const handleActiveButton = (status) => {
    setActiveButton(status)

  }

  return (
    <>
      <Navbar></Navbar>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionFrom
            handleActiveButton={handleActiveButton}
            activeButton={activeButton}
          ></SubmissionFrom>
          <div className="lg:col-span-2">
            <TotalBalence></TotalBalence>
            {/* Expense and inCome colum */}
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              {/* <Income></Income> */}
              {/* <Expense></Expense> */}
            </div>
          </div>
        </section>
      </main>
    </ >

  )
}

export default App
