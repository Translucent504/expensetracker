import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    transactions: [
        { id: 1, name: "Cash", amount: 1000},
        { id: 2, name: "Salary", amount: 100},
        { id: 3, name: "Cow", amount: -200},
        { id: 4, name: "Camera", amount: -32},
    ]
}

// Create context
export const GlobalContext = createContext(initialState);



// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    function delTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        })
    ;}

    function newTransaction(name, amount) {
        const max_id = state.transactions.reduce((acc,{id})=>id>acc?id:acc, 0)
        dispatch({
            type:"NEW_TRANSACTION",
            payload:{
                id: max_id+1,
                name: name,
                amount:amount}
        });
    }   

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        newTransaction,
        delTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}

export default GlobalContext