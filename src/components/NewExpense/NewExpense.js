import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [bool, setBool] = useState(true);
	const saveDataHandler = (expense) => {
		const expenseData = {
			...expense,
			id: Math.random().toString(),
		};
		props.onSaveData(expenseData);
	};
	const addExpenseHandler = () => {
		setBool(false);
	};
	const cancelHandler = () => {
		setBool(true);
	};
	if (!bool) {
		return (
			<div className='new-expense'>
				<ExpenseForm onCancel={cancelHandler} onSaveData={saveDataHandler} />
			</div>
		);
	}
	return (
		<div className='new-expense'>
			<button onClick={addExpenseHandler}>Add Expense</button>
		</div>
	);
};
export default NewExpense;
