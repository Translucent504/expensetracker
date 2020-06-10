import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';




const App = () => {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [incomehistory, setIncHistory] = useState([])
  const [expensehistory, setExpHistory] = useState([])
  const transname = React.createRef()
  const transamount = React.createRef()

  const handleSubmit = () => {
    const transvalue = transamount.current.value
    const tname = transname.current.value
    const histitem = {name:tname, value:transvalue}
    if(transvalue>0){
      setIncome(income + parseInt(transvalue))
      setIncHistory([...incomehistory, histitem])
    }
    if(transvalue<0){
      setExpense(expense - parseInt(transvalue))
      setExpHistory([...expensehistory, histitem])
    }
  }
  
  return (
    <div>
    <h1>Expense Tracker</h1>
    <h2>Your Balance</h2>
    ${income-expense}<br/>
    Income: {income} Expense:{expense}
    <h2>History</h2>
    <ul>
    {incomehistory.map((hist, index)=><li key={index}>{hist.name} +{hist.value}</li>)}
    {expensehistory.map((hist, index)=><li key={index}>{hist.name} {hist.value}</li>)}
    </ul>
    <h2>Add New transaction</h2>
    <input ref={transname} type="text" defaultValue="Transaction Name"/>
    <input ref={transamount} type="number" defaultValue="Transaction Amount"/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

