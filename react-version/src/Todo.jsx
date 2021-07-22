import React, { useRef, useState } from 'react'
import "./Todo.css"

const List = (props) =>{
	const [done, setDone] = useState(false)
	return (
		<li className="todo-list">
			<label
				className={`todo-label ${done&&`strike`}`}
			>
			<input
				type="checkbox"
				value={props.content}
				onChange={()=>{
					setDone(!done);
				}}
			/><span className="todo-content">{props.content}</span></label>
		</li>
	)
}

const Todo = () => {
	const [todoList, setTodoList] = useState([
		"Learn React Basics",
		"Learn About Hooks",
		"Shift from vanilla HTML CSS JS",
	])
	const inputRef = useRef();
	return (
		<div className="wrapper">
			<div className="container">
				<h1 className="heading">
					Todo App
				</h1>
				<div className="todo-container">
					<ul>
						{todoList.map((item,idx)=>{
							return (
								<List
									key={idx}
									content={item}
								/>
							)
						})}
					</ul>
				</div>
				<form
					className="todo-add"
					onSubmit={(e)=>{
						e.preventDefault()
						// setTodoList()
						let newMember = inputRef.current.value.trim();
						if(newMember.length){
							setTodoList([
								...todoList,
								newMember
							])
							inputRef.current.value = "";
						}
					}}
				>
					<input
						ref={inputRef}
						className="todo-add-input"
						type="text"
						placeholder="Add new item..."
					></input>
				</form>
			</div>
		</div>
	)
}

export default Todo
