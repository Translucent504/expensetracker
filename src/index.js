import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Balance from './Balance'
import History from './History'
import IncomeExpense from './IncomeExpense'
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './context/GlobalState'


const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <Balance />
            <IncomeExpense />
            <History />
            <AddTransaction />
        </GlobalProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

