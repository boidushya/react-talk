const init = () => {
	document.querySelector("#list-form").addEventListener("submit",(e)=>{
		e.preventDefault();
		addNewItem(e.target);
	})
}

const strikeThrough = (e) => {
	e.parentElement.querySelector("span").classList.toggle("strike")
}

const addNewItem = (e) => {
	let val = e.querySelector("input").value
	if(val.length){
		let listHTMl =
		`<li class="todo-list">
			<label class="todo-label">
				<input type="checkbox" onchange="strikeThrough(this);"/>
				<span class="todo-content">${val}</span>
			</label>
		</li>`
		document.querySelector("#list").innerHTML += listHTMl
		e.querySelector("input").value = ""
	}
	return false;
}

window.onload = ()=>{
	init()
}