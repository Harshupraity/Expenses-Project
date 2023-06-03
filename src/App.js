import "./App.css";
import Expenses from './components/Expenses/Expenses.js'
import NewExpense from './components/NewExpense/NewExpense'
// import ExpenseItem from "./components/ExpenseItem";
const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 800, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 300,
      date: new Date(2022, 11, 24),
    },
    { id: "e4", title: "New Desk", amount: 500, date: new Date(2023, 5, 28) },
  ];
 
  return (
    <div className="App">
      <NewExpense/>
      <Expenses items = {expense}/>
      
    </div>
  );
}

export default App;
