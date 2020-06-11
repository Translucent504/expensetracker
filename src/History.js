import { GlobalContext } from './context/GlobalState';

import React, { useContext } from 'react'

const History = () => {
    const context = useContext(GlobalContext)

    return (
        <>
          <h2>History</h2>
            <ul>
                {context.transactions.map(({id, name, amount}) => (<li key={id}>{name} {(amount<0?"-$":"+$") + Math.abs(amount)}</li>))}
            </ul>  
        </>
    )
}

export default History