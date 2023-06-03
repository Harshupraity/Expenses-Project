import React,{useState} from "react"
import './ExpenseForm.css';
const  ExpenseForm = () => {

    const [enteredtitle,setEnteredTitle] = useState('');
    const [enteredamount,setAmount]= useState('');
    const [entereddate,setDate] = useState('');

    // const [useInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...useInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value};
        // })
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...useInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...useInput,
        //     enteredDate: event.target.value
        // })
    }
    return <form>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type = 'text' onChange = {titleChangeHandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type = 'number' min = "0.01" step = "0.01" onChange = {amountChangeHandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type = 'date' min = "2019-01-01" max = "2022-12-31" onChange = {dateChangeHandler}/>
            </div>
            <div className = "new-expense__actions">
               <button type = 'submit'>Add Expense</button>
            </div>
        </div>
    </form>

}

export default ExpenseForm