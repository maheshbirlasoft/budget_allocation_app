import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newValue = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        console.log(parseInt(newBudget), totalExpenses);

        if (parseInt(newValue) < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            // console.log("Cart", CartValue, budget);
            setNewBudget(newValue);
            dispatch({
                type: "EXTEND_BUDGET",
                payload: event.target.value,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;