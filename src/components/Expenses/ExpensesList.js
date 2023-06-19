import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Found no expenses this year.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
