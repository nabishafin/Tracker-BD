import React, { useState } from 'react';

import Expense from './components/Expense'
import Income from './components/Income'
import Navbar from './components/Navbar'
import SubmissionFrom from './components/SubmissionFrom'
import TotalBalence from './components/TotalBalence'



function App() {
  const [activeButton, setActiveButton] = useState('income')
  const [expense, setExpense] = useState([])
  const [income, setIncome] = useState([])

  const handleActiveButton = (status) => {
    setActiveButton(status)

  }

  const handleFromSubmit = ({ UpdateCategory, date, amount }) => {
    const newobj = {
      category: UpdateCategory,
      date: date,
      amount: amount
    }
    activeButton === 'income' ? setIncome((e) => [...e, newobj]) : setExpense((e) => [...e, newobj])
  }

  const totalIncome = income.reduce((a, b) => a + parseInt(b.amount), 0);
  const totalExpense = expense.reduce((a, b) => a + parseInt(b.amount), 0);

  return (
    <>
      <Navbar></Navbar>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionFrom
            handleActiveButton={handleActiveButton}
            activeButton={activeButton}
            handleFromSubmit={handleFromSubmit}
          ></SubmissionFrom>

          <div className="lg:col-span-2">
            <TotalBalence
              totalExpense={totalExpense}
              totalIncome={totalIncome}
            ></TotalBalence>

            {/* Expense and inCome colum */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <Income incomes={income}></Income>
              <Expense expenses={expense}></Expense>
            </div>
          </div>
        </section>
      </main>
    </ >

  )
}

export default App
