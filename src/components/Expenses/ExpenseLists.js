import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>Expense not found</h2>;
	}

	return (
		<li className='expenses-list'>
			{props.items.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				);
			})}
		</li>
	);
};

export default ExpenseList;
