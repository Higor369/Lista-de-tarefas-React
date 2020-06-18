import React , { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pagesHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const url = 'http://localhost:3008/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: '', list : []}
        this.handlerChange = this.handlerChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this) //faz amarração do this com o this da classe
        this.handleRemove = this.handleRemove.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
        this.markAsPending = this.markAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    handleAdd(){
        var desc = this.state.description
        console.log('request ', this.state )
        axios.post(url,{description: desc})
            .then(resp => this.refresh())
    }
    handlerChange(e){ 
        this.setState({ description: e.target.value})
        console.log(this.state)
    }

    handleRemove(element){
        axios.delete(`${url}/${element._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    markAsDone (todo){
        axios.put(`${url}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }
    markAsPending(todo){
        axios.put(`${url}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }
    handleClear(){
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${url}?sort=-creatDate${search}`)
            .then((resp) =>{
                console.log(resp.data)
                this.setState({...this.setState, description, list: resp.data})
            } )
    }

    render() {

        return (

            <div>
              <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
              <TodoForm 
                handlerChange={this.handlerChange}
                description={this.state.description}
                handleAdd={this.handleAdd}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}></TodoForm>
              <TodoList 
                list={this.state.list}
                handleRemove={this.handleRemove}
                markAsPending={this.markAsPending}
                markAsDone={ this.markAsDone}></TodoList>
            </div>
        )
    }


}