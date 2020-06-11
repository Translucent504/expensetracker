import React, {useContext} from 'react'
import GlobalContext from './context/GlobalState'

const Transaction = ({id, name, amount}) => {
    const {delTransaction} = useContext(GlobalContext)

    return (
            <li>
                <span>{name}</span>
                <span className={amount>0?"plus":"minus"}>
                    {(amount<0?"-$":"+$") + Math.abs(amount).toFixed(2)}
                    <button onClick={() => delTransaction(id)} className="delete-btn">x</button>
                </span>
                
            </li>
    )
}

export default Transaction
