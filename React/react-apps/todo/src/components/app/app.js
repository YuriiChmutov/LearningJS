import React, {Component} from 'react';

import './app.css';

import AppHeader from '../app-header'; 
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item/add-item';

class App extends Component {

	startId = 0;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		],
		term: ''
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.startId++
		}
	}

	deleteItem = (id) => {
		
		this.setState(( {todoData} ) => {
			const idx = todoData.findIndex((el) => id === el.id);
			
			const newArray  = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArray
			}
		});
	};

	addItem = (text) => {

		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const newArr = [ ...todoData, newItem];
			return{
				todoData: newArr
			}
		});
	}

	onToggleImportant = (id) => {
		this.setState(( {todoData} ) => {
			const idx = todoData.findIndex((el) => id === el.id);
			const item = todoData[idx];

			const newItem = {...item, important: !item.important}

			const newArray = [
				...todoData.slice(0, idx),
				newItem, 
				...todoData.slice(idx+1)
			];

			return {
				todoData: newArray
			}; 
		})
	};

	onToggleDone = (id) => {
		this.setState(( {todoData} ) => {
			const idx = todoData.findIndex((el) => id === el.id);
			const oldItem = todoData[idx];

			const newItem = { ...oldItem, done: !oldItem.done }
			
			const newArray = [
				...todoData.slice(0, idx),
				newItem,
				...todoData.slice(idx+1)
			];

			return {
				todoData: newArray
			};
		});
	};

	searchItem (items, term) {

		if(term.length === 0){
			return items;
		}

		return items.filter((item) => {
			return item.label.toLowerCase()
			.indexOf(term.toLowerCase()) > -1;
		});
	}

	onSearchChange = (term) => {
		this.setState({term});
	} 

	render() {

		const {term, todoData} = this.state;
		
		const visibleItems = this.searchItem(todoData, term);

		const doneCount = todoData.filter((el) => el.done);
		const toDoCount = todoData.length - doneCount.length;

		return (
			<div className="container jumbotron mt-3">
				<AppHeader toDo = {toDoCount} done = {doneCount.length}/>
				<ItemStatusFilter />
				<SearchPanel onSearchChange={this.onSearchChange}/>
				<TodoList 
					todos={visibleItems}
					onDeleted={ this.deleteItem }
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
					/>
				<AddItem onAdded={ this.addItem }/>
			</div>
		);
	}	
	
}

export default App;
