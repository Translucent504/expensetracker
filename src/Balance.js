import React, { useContext } from 'react'
import GlobalContext from './context/GlobalState'

const Balance = () => {
    const context = useContext(GlobalContext)
    const balance = context.transactions.reduce((cum, {amount})=>cum+amount, 0)
    return (
            <h2>
                Your Balance: <span className={balance>0?"plus":"minus"}>${balance.toFixed(2)}</span>
            </h2>
    )
}

export default Balance
