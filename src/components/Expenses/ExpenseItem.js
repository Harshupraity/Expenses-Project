import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {


  const [title,setTitle] = useState(props.title);
  console.log('Expense item evaluated by react');
  const clickHandler = () =>{
   setTitle('Updated!');
   console.log(title);
  }
  return ( 
    <Card className = "expense-item">
        <ExpenseDate date = {props.date}/>
        <div className = "expense-item__description">
            <h2>{title}</h2>
        </div>
        <div className = "expense-item__price">
        ${props.amount}
            {/* for numeric value we use dollar sign */}

        </div>
        <button onClick = {clickHandler}>ChangeTitle</button>
    </Card>
  );
}
export default ExpenseItem;