import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';

  const Expenses = (props) => {
  
  const [filteredExpenseItems, setFilteredExpenseItems] = useState(props.items);
  const filteredExpenseHandler = (filterYear)=>{
  const filteredExpenses = props.items.filter((item)=> {return filterYear === item.date.toLocaleDateString('en-us',{year: 'numeric'}); });
  setFilteredExpenseItems(filteredExpenses);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filteredExpenseHandler}/>
      <ExpenseList items ={filteredExpenseItems}/>
    </Card>
  );
}

export default Expenses;
