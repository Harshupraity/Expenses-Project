import React, { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(()=>{
    filterItems(filteredYear)
  }, [])


  // sets filteredItems according to given year
  const filterItems = (year) =>{
    setFilteredItems(()=>{
      let newItems = props.items.filter(item=>{
        return item.date.toString().includes(year)
      })
      // console.log(newItems);
      return newItems
    })
  }


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    /// imp
    console.log(selectedYear, filteredYear);
    // console.log(selectedYear, props.items);
    filterItems(selectedYear)
  };


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredItems?.length && filteredItems.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;