import React, { useContext } from 'react'
import GlobalContext from './context/GlobalState'

const IncomeExpense = () => {
    const context = useContext(GlobalContext)
    const income = context.transactions.reduce((acc, {amount})=> amount>=0?acc + amount : acc, 0)
    const expense = context.transactions.reduce((acc, {amount})=> amount<0?acc + amount : acc, 0)
    return (
        <div>
            <span> Income: {income} Expense: {expense}</span>
        </div>
    )
}

export default IncomeExpense