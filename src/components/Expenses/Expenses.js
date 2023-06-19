import React from "react";
import "./Expenses.css";
import ExpensesFilter from ".//ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../Ui/Card";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
