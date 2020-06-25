import React from 'react';


export default class PostForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    }
    
    submitHandler = event => {
        event.preventDefault()
    }

    changeInputHandler = event => {
        this.setState(prev => ({
            [event.target.name]: event.target.value
        }))
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label for="title">Заголовок поста</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      value={this.state.title}
                      name="title"
                      onChange={this.changeInputHandler}/>
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }


}