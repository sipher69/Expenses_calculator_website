import './App.css';
import ExpenseItem from './components/ExpenseItem.js'

function App() {
  const Expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      <h1>Hello World!</h1>
      <ExpenseItem title={Expense[0].title} amount={Expense[0].amount} date={Expense[0].date}></ExpenseItem>
      <ExpenseItem title={Expense[1].title} amount=
        {Expense[1].amount} date={Expense[1].date}></
      ExpenseItem>
      <ExpenseItem title={Expense[2].title} amount=
        {Expense[2].amount} date={Expense[2].date}></
      ExpenseItem>
      <ExpenseItem title={Expense[3].title} amount=
        {Expense[3].amount} date={Expense[3].date}></
      ExpenseItem>



    </>



  )
}

export default App;
