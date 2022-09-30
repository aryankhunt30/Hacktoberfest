import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 1)
    .toFixed(3);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 1)
    .toFixed(3);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h4>₹{(totalIncome - totalExpenses).toFixed(2)}</h4>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+₹{totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-₹{totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
