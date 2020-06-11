import React, { useState, useContext } from 'react'
import GlobalContext from './context/GlobalState'

const AddTransaction = () => {
    const [tname, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const {newTransaction} = useContext(GlobalContext)
    const submitTrans = (e) => {
        e.preventDefault()
        if(tname)
        newTransaction(tname, amount)
        e.target[0].value = ''
        e.target[1].value = ''
    }
    return (
        <>
            <h2>Add New transaction</h2>
            <form onSubmit={submitTrans}>
            <input required type="text" placeholder="Transaction Name" onChange={(e)=>setName(e.target.value)}/>
            <input required type="number" placeholder="0" onChange={(e)=>setAmount(parseFloat(e.target.value))}/>
            <input className="btn" type="submit"  value="Submit"/>
            </form>
        </>
    )
}

export default AddTransaction
