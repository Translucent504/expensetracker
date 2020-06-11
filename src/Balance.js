import React, { useContext } from 'react'
import GlobalContext from './context/GlobalState'

const Balance = () => {
    const context = useContext(GlobalContext)
    const balance = context.transactions.reduce((cum, {amount})=>cum+amount, 0)
    return (
        <>
            <h2>Your Balance</h2>
            <span>{balance}</span>
        </>
    )
}

export default Balance
