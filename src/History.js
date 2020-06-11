import { GlobalContext } from './context/GlobalState';
import React, { useContext } from 'react'
import Transaction from './Transaction'

const History = () => {
    const context = useContext(GlobalContext)

    return (
        <>
          <h2>History</h2>
            <ul className="list">
                {context.transactions.map(({id, name, amount}) =><Transaction key = {id} id={id} name={name} amount={amount}/>)}
            </ul>  
        </>
    )
}

export default History