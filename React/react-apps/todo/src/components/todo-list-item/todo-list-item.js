import React, {Component} from 'react';
import './todo-list-item.css';


class TodoListItem extends Component {

	render() {
		const { label, onDeleted, 
				onToggleImportant, 
				onToggleDone,
				important,
				done } = this.props;
		

		let classNames = 'todo-list-item';
		if(done) {
			classNames += ' done';
		}

		let classExclamation = "btn btn-outline-success btn-sm";
		if(important) {
			classNames += ' important';
			classExclamation = "btn btn-success btn-sm"
		}
	
		return (
			<span className={classNames}>	
				<span className="todo-list-item-label"
				onClick={ onToggleDone }>
				{ label }
			</span>
			
			<button type="button"
				className={classExclamation}
				onClick={onToggleImportant}>
				<i className="fa fa-exclamation"/>
			</button>
	
			<button type="button"
				className="btn btn-outline-danger btn-sm flex-grow"
				onClick={onDeleted}>
				<i className="fa fa-trash-o"/>
			</button>
	
			</span>
		)
	}
}


export default TodoListItem;